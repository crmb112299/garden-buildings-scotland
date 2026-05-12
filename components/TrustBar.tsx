import type { ReactElement } from "react";
import { SITE } from "@/lib/site";

const ICONS: Record<string, ReactElement> = {
  "Save Up To 50% Off": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12V8a2 2 0 0 0-2-2h-4l-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6" />
      <path d="m15 17 2 2 4-4" />
    </svg>
  ),
  "Best Price Promise": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  "Excellent Reviews": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 17.3 6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.3Z" />
    </svg>
  ),
  "5 Star Rated": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 17.3 6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.3Z" />
    </svg>
  ),
  "Free Delivery & Installation": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h12v10H3z" />
      <path d="M15 11h4l2 3v3h-6" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  ),
  "Made In Scotland": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-5.5-7-12a7 7 0 1 1 14 0c0 6.5-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
};

const DEFAULT_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m4 12 5 5L20 6" />
  </svg>
);

export default function TrustBar({ dark = true }: { dark?: boolean }) {
  const bg = dark ? "bg-ink-900 text-white" : "bg-slate-50 text-ink-900 border-y border-slate-200";
  const iconColor = dark ? "text-brand-400" : "text-brand-600";
  return (
    <section className={bg}>
      <div className="max-w-container mx-auto px-4 py-4">
        <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-semibold">
          {SITE.trustBar.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className={iconColor} aria-hidden>
                {ICONS[item] ?? DEFAULT_ICON}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
