"use client";

import { useState } from "react";

export type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <dl className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="py-2">
            <dt>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-4 py-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base md:text-lg font-bold text-ink-900">{item.q}</span>
                <span
                  className={`shrink-0 mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-brand-50 text-brand-700 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </dt>
            {isOpen && (
              <dd className="pb-4 pr-10 text-ink-700 leading-relaxed">{item.a}</dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
