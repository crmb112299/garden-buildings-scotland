import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-200 mt-20">
      <div className="max-w-container mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="text-2xl md:text-3xl font-black uppercase tracking-wider text-brand-400">
              Garden Buildings
            </span>
            <span className="mt-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-slate-300">
              Scotland
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
            Garden sheds, garden rooms, summerhouses, greenhouses and playhouses, supplied and
            installed across Scotland. Family-friendly team, honest prices, and no hard sell.
          </p>

          <div className="mt-5 space-y-1.5 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 font-semibold text-white hover:text-brand-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />
              </svg>
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-brand-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {SITE.email}
            </a>
            <div className="flex items-start gap-2 text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5">
                <path d="M12 22s-7-5.5-7-12a7 7 0 1 1 14 0c0 6.5-7 12-7 12Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {SITE.addressLine}
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Get A Quote</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/online-quote" className="hover:text-brand-100">Online Quote</Link></li>
            <li><Link href="/contact-us" className="hover:text-brand-100">Contact Us</Link></li>
            <li><Link href="/customer-reviews" className="hover:text-brand-100">Reviews</Link></li>
            <li><Link href="/frequently-asked-questions" className="hover:text-brand-100">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Products</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sheds" className="hover:text-brand-100">Garden Sheds</Link></li>
            <li><Link href="/garden-rooms" className="hover:text-brand-100">Garden Rooms</Link></li>
            <li><Link href="/online-quote" className="hover:text-brand-100">Summerhouses</Link></li>
            <li><Link href="/online-quote" className="hover:text-brand-100">Greenhouses</Link></li>
            <li><Link href="/online-quote" className="hover:text-brand-100">Playhouses</Link></li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4 border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/areas-covered" className="hover:text-brand-100">Areas Covered</Link>
            <Link href="/privacy-policy" className="hover:text-brand-100">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-brand-100">Cookie Policy</Link>
          </div>
          <div>
            © {new Date().getFullYear()} {SITE.brand}. Serving Scotland & surrounding areas.
          </div>
        </div>
      </div>
    </footer>
  );
}
