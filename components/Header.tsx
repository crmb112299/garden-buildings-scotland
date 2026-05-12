import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-ink-900 text-white text-sm">
        <div className="max-w-container mx-auto px-4 h-10 flex items-center justify-between gap-4">
          <a href={SITE.phoneHref} className="font-semibold hover:text-brand-100">
            <span aria-hidden>📞</span> {SITE.phone}
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
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-extrabold text-xl text-ink-900">
            Garden Buildings <span className="text-brand-600">Scotland</span>
          </span>
          <span className="text-xs text-ink-500">Sheds · Garden Rooms · Summerhouses</span>
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

        <Link
          href="/online-quote"
          className="lg:hidden bg-brand-600 hover:bg-brand-700 text-white font-semibold px-3 py-2 rounded text-sm"
        >
          Free Quote
        </Link>
      </div>
    </header>
  );
}
