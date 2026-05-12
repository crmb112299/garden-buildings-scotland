"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Sheds", href: "/sheds" },
  { label: "Garden Rooms", href: "/garden-rooms" },
  { label: "Reviews", href: "/customer-reviews" },
  { label: "FAQ", href: "/frequently-asked-questions" },
  { label: "Online Quote", href: "/online-quote" },
  { label: "Contact", href: "/contact-us" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-ink-900 text-white text-sm">
        <div className="max-w-container mx-auto px-4 h-10 flex items-center justify-between gap-4">
          <a href={SITE.phoneHref} className="flex items-center gap-2 font-semibold hover:text-brand-100">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />
            </svg>
            {SITE.phone}
          </a>
          <div className="flex items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="hidden sm:inline hover:text-brand-100">
              Email Us
            </a>
            <Link
              href="/online-quote"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-3 py-1.5 rounded"
            >
              Get An Online Quote Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 leading-tight" onClick={() => setOpen(false)}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-600 text-white" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 11.5 12 4l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9.5Z" />
            </svg>
          </span>
          <span className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl text-ink-900 leading-none">
              Garden Buildings <span className="text-brand-600">Scotland</span>
            </span>
            <span className="text-[11px] text-ink-500 mt-0.5">Sheds, Garden Rooms & More</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-ink-700 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-ink-900 hover:bg-slate-100"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6 18 18M18 6 6 18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white">
          <ul className="px-4 py-3 space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-ink-900 hover:bg-brand-50 hover:text-brand-700 rounded-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/online-quote"
                onClick={() => setOpen(false)}
                className="block bg-brand-600 hover:bg-brand-700 text-white font-semibold text-center px-4 py-3 rounded-md"
              >
                Get A Free Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
