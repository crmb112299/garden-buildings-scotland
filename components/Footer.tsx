import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-200 mt-20">
      <div className="max-w-container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="font-extrabold text-xl text-white">
            Garden Buildings <span className="text-brand-500">Scotland</span>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-sm">
            Garden sheds, garden rooms, summerhouses, greenhouses and playhouses, supplied and
            installed across Scotland.
          </p>
          <p className="mt-4 text-sm">
            <a href={SITE.phoneHref} className="font-semibold hover:text-brand-100">
              {SITE.phone}
            </a>
            <br />
            <a href={`mailto:${SITE.email}`} className="hover:text-brand-100">
              {SITE.email}
            </a>
            <br />
            <span className="text-slate-400">{SITE.addressLine}</span>
          </p>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Get A Quote</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/online-quote" className="hover:text-brand-100">Online Quote</Link></li>
            <li><Link href="/contact-us" className="hover:text-brand-100">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white mb-3">Products</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sheds" className="hover:text-brand-100">Garden Sheds</Link></li>
            <li><Link href="/garden-rooms" className="hover:text-brand-100">Garden Rooms</Link></li>
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
