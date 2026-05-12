"use client";

import { useState } from "react";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  /** Pre-selects the Interested In dropdown — used on product/ad pages */
  defaultInterest?: Interest;
  /** Source identifier sent with the lead so we know which page captured it */
  source: string;
  /** Optional heading shown above the form */
  heading?: string;
  /** Optional sub-heading shown above the form */
  subheading?: string;
};

type Status = "idle" | "submitting" | "ok" | "error";

export default function LeadForm({
  defaultInterest,
  source,
  heading = "Get Your Free Quote",
  subheading = "Save Up To 50% — takes under a minute."
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      interest: String(data.get("interest") || ""),
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      postcode: String(data.get("postcode") || "").trim(),
      source
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong, please try again.");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-brand-100">
        <div className="text-2xl font-bold text-brand-700">Thanks — we&apos;ve got your details.</div>
        <p className="mt-2 text-ink-700">
          One of the team will be in touch shortly with your free quote. If you&apos;d like to speak to
          us right now, call{" "}
          <a href={SITE.phoneHref} className="text-brand-700 font-semibold">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-slate-200"
      aria-busy={status === "submitting"}
    >
      <div className="text-2xl font-bold text-ink-900">{heading}</div>
      {subheading && <p className="text-sm text-ink-500 mt-1">{subheading}</p>}

      <div className="mt-5 space-y-3">
        <label className="block">
          <span className="sr-only">Interested In</span>
          <select
            name="interest"
            required
            defaultValue={defaultInterest ?? ""}
            className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          >
            <option value="" disabled>
              Interested In…
            </option>
            {SITE.interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>

        <input
          name="name"
          required
          placeholder="Your Name"
          autoComplete="name"
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />
        <input
          name="phone"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="Phone Number"
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />
        <input
          name="email"
          required
          type="email"
          autoComplete="email"
          placeholder="Your Email"
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />
        <input
          name="postcode"
          required
          autoComplete="postal-code"
          placeholder="Your Postcode"
          className="w-full rounded-md border border-slate-300 px-4 py-3 text-base focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-brand-600/70 text-white font-bold text-lg py-3.5 rounded-md transition-colors"
        >
          {status === "submitting" ? "Sending…" : "Continue"}
        </button>

        <p className="text-xs text-ink-500 text-center pt-1">
          No hard sell. No obligation. Just a great price.
        </p>

        {status === "error" && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
