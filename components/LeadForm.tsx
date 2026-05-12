"use client";

import { useState } from "react";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  /** Pre-selects the Interested In dropdown. */
  defaultInterest?: Interest;
  /** Source identifier sent with the lead so we know which page captured it */
  source: string;
  /** Optional heading shown above the form */
  heading?: string;
  /** Optional sub-heading shown above the form */
  subheading?: string;
  /**
   * Visual theme:
   * - "light" = white card, single-column stack (standalone use on pages)
   * - "dark"  = no outer panel, 2-col grid (embedded inside transparent hero container)
   * - "card"  = white card with 2-col grid (Weatherseal-style product page hero)
   */
  theme?: "light" | "dark" | "card";
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

  const isCard = theme === "card";
  const isDark = theme === "dark";
  const onLight = isCard || theme === "light";
  const useGrid = isCard || isDark;

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

  const panelClass = isCard
    ? "bg-white rounded-xl shadow-2xl p-6 md:p-7 border border-slate-200"
    : isDark
    ? ""
    : "bg-white rounded-xl shadow-lg p-6 md:p-7 border border-slate-200";

  const headingClass = onLight
    ? "text-xl md:text-2xl font-bold text-ink-900 text-center"
    : "text-xl md:text-2xl font-bold text-white";
  const subheadingClass = onLight
    ? "text-sm text-ink-500 mt-1 text-center"
    : "text-sm text-slate-300 mt-0.5";
  const labelClass = onLight
    ? "block text-xs font-semibold text-ink-900 mb-1"
    : "block text-xs font-semibold text-white mb-1";
  const inputClass =
    "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-base text-ink-900 placeholder:text-ink-500/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
  const footnoteClass = onLight
    ? "text-xs text-ink-500 text-center pt-1"
    : "text-xs text-slate-300 text-center pt-1";

  if (status === "ok") {
    return (
      <div className={panelClass || "text-white"}>
        <div className={onLight ? "text-2xl font-bold text-brand-700" : "text-2xl font-bold text-brand-100"}>
          Thanks, we&apos;ve got your details.
        </div>
        <p className={onLight ? "mt-2 text-ink-700" : "mt-2 text-slate-200"}>
          One of the team will be in touch shortly with your free quote. If you&apos;d like to speak
          to us right now, call{" "}
          <a
            href={SITE.phoneHref}
            className={onLight ? "text-brand-700 font-semibold" : "text-white font-semibold underline"}
          >
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldsWrapper = useGrid
    ? "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3"
    : "mt-3 space-y-2.5";
  const spanFull = useGrid ? "sm:col-span-2" : "";

  return (
    <form onSubmit={handleSubmit} className={panelClass} aria-busy={status === "submitting"}>
      <div className={headingClass}>{heading}</div>
      {subheading && <p className={subheadingClass}>{subheading}</p>}

      <div className={fieldsWrapper}>
        {/* Interested In, full width */}
        <label className={`block ${spanFull}`}>
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
          <label key={f.name} className={useGrid ? "block" : "block"}>
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
          className={`bg-brand-600 hover:bg-brand-700 disabled:bg-brand-600/70 text-white font-bold text-base md:text-lg py-3 rounded-md transition-colors mt-1 w-full ${spanFull}`}
        >
          {status === "submitting" ? "Sending…" : "Continue"}
        </button>

        <p className={`${footnoteClass} ${spanFull}`}>
          No hard sell. No obligation. Just a great price.
        </p>

        {status === "error" && (
          <p
            className={`text-sm text-center ${onLight ? "text-red-600" : "text-red-300"} ${spanFull}`}
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
