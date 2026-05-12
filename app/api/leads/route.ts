import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type LeadPayload = {
  interest?: string;
  name?: string;
  phone?: string;
  email?: string;
  postcode?: string;
  source?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUkPostcode(value: string) {
  return /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(value.trim());
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }

  const interest = String(body.interest || "").trim();
  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();
  const postcode = String(body.postcode || "").trim();
  const source = String(body.source || "unknown").trim();

  if (!interest || !name || !phone || !email || !postcode) {
    return NextResponse.json(
      { ok: false, message: "Please complete every field." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "That email doesn't look right." },
      { status: 400 }
    );
  }
  if (!isValidUkPostcode(postcode)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid UK postcode." },
      { status: 400 }
    );
  }

  const recipients = (process.env.LEAD_RECIPIENTS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const from = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";
  const apiKey = process.env.RESEND_API_KEY;

  // Always log the lead so nothing is lost while Resend is being configured.
  // eslint-disable-next-line no-console
  console.log("[lead]", { interest, name, phone, email, postcode, source, at: new Date().toISOString() });

  if (!apiKey || recipients.length === 0) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);
  const subject = `New lead: ${interest}, ${name} (${postcode})`;
  const html = `
    <h2>New lead from gardenbuildingsscotland.co.uk</h2>
    <table cellpadding="6" cellspacing="0" border="0" style="font-family:system-ui,sans-serif;font-size:14px;">
      <tr><td><strong>Interested In</strong></td><td>${escapeHtml(interest)}</td></tr>
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Postcode</strong></td><td>${escapeHtml(postcode)}</td></tr>
      <tr><td><strong>Source</strong></td><td>${escapeHtml(source)}</td></tr>
    </table>
  `;

  try {
    await resend.emails.send({
      from,
      to: recipients,
      replyTo: process.env.LEAD_REPLY_TO || undefined,
      subject,
      html,
      text: `New lead\nInterested In: ${interest}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nPostcode: ${postcode}\nSource: ${source}`
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[lead] resend error", err);
    // Still return 200 — we logged the lead, don't block the customer.
    return NextResponse.json({ ok: true, delivered: false });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
