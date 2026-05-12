"use client";

import { useState } from "react";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  /** Pre-selects the Interested In dropdown, used on product/ad pages */
  defaultInterest?: Interest;
  /** Source identifier sent with the lead so we know which page captured it */
  source: string;
  /** Optional heading shown above the form */
  heading?: string;
  /** Optional sub-heading shown above the form */
  subheading?: string;
  /** Visual theme. "light" = white card (default). "dark" = dark semi-transparent panel for use on hero photos. */
  theme?: "light" | "dark";
};

type Status = "idle" | "submitting" | "ok" | "error";

const FIELDS: Array<{
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  inputMode?: "tel" | "email" | "text";
  autoComplete: string;
}> = [
  { name: "name", label: "Your Name", placeholder: "Full name", autoComplete: "name" },
  { name: "phone", label: "Phone Number", placeholder: "Your phone number", inputMode: "tel", autoComplete: "tel" },
  { name: "email", label: "Your Email", placeholder: "Your email", type: "email", autoComplete: "email" },
  { name: "postcode", label: "Your Postcode", placeholder: "e.g. G72 0ND", autoComplete: "postal-code" }
];

export default function LeadForm({
  defaultInterest,
  source,
  heading = "Get Your Free Quote",
  subheading,
  theme = "light"
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isDark = theme === "dark";

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

  const panelClass = isDark
    ? "bg-ink-900/80 backdrop-blur rounded-xl p-6 md:p-7 border border-white/10 shadow-2xl"
    : "bg-white rounded-xl shadow-lg p-6 md:p-8 border border-slate-200";
  const headingClass = isDark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-ink-900";
  const subheadingClass = isDark ? "text-sm text-slate-300 mt-1" : "text-sm text-ink-500 mt-1";
  const labelClass = isDark
    ? "block text-sm font-semibold text-white mb-1.5"
    : "block text-sm font-semibold text-ink-900 mb-1.5";
  const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-500/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
  const footnoteClass = isDark
    ? "text-xs text-slate-300 text-center pt-1"
    : "text-xs text-ink-500 text-center pt-1";

  if (status === "ok") {
    return (
      <div className={panelClass}>
        <div className={isDark ? "text-2xl font-bold text-brand-100" : "text-2xl font-bold text-brand-700"}>
          Thanks, we&apos;ve got your details.
        </div>
        <p className={isDark ? "mt-2 text-slate-200" : "mt-2 text-ink-700"}>
          One of the team will be in touch shortly with your free quote. If you&apos;d like to speak to
          us right now, call{" "}
          <a href={SITE.phoneHref} className={isDark ? "text-white font-semibold underline" : "text-brand-700 font-semibold"}>
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={panelClass} aria-busy={status === "submitting"}>
      <div className={headingClass}>{heading}</div>
      {subheading && <p className={subheadingClass}>{subheading}</p>}

      <div className="mt-4 space-y-3">
        <label className="block">
          <span className={labelClass}>Interested In</span>
          <select
            name="interest"
            required
            defaultValue={defaultInterest ?? ""}
            className={inputClass}
          >
            <option value="" disabled>
              Please Select
            </option>
            {SITE.interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>

        {FIELDS.map((f) => (
          <label key={f.name} className="block">
            <span className={labelClass}>{f.label}</span>
            <input
              name={f.name}
              required
              type={f.type ?? "text"}
              inputMode={f.inputMode}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              className={inputClass}
            />
          </label>
        ))}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-brand-600/70 text-white font-bold text-lg py-3.5 rounded-md transition-colors mt-2"
        >
          {status === "submitting" ? "Sending…" : "Continue"}
        </button>

        <p className={footnoteClass}>No hard sell. No obligation. Just a great price.</p>

        {status === "error" && (
          <p className="text-sm text-red-300 text-center" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
