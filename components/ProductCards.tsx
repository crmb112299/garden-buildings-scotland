import Link from "next/link";
import { PRODUCT_LIST } from "@/lib/products";

const PRODUCT_HREFS: Record<string, string> = {
  "garden-sheds": "/sheds",
  "garden-rooms": "/garden-rooms",
  greenhouse: "/online-quote",
  summerhouse: "/online-quote",
  playhouses: "/online-quote"
};

export default function ProductCards({
  heading = "Garden Buildings For Every Scottish Home",
  subheading = "Choose from our range of sheds, garden rooms, summerhouses, greenhouses and playhouses."
}: {
  heading?: string;
  subheading?: string;
}) {
  // Show 4 featured products on the homepage grid
  const featured = PRODUCT_LIST.slice(0, 4);
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 text-ink-500">{subheading}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <Link
              key={p.key}
              href={PRODUCT_HREFS[p.key] ?? "/online-quote"}
              className="group relative overflow-hidden rounded-xl bg-ink-900 aspect-[4/5] shadow-md hover:shadow-2xl transition-shadow"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${p.image})` }}
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/55 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="inline-block bg-brand-600 text-white text-[10px] font-extrabold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full">
                  50% Off
                </div>
                <div className="mt-3 text-xl font-extrabold leading-tight">{p.plural}</div>
                <p className="mt-1.5 text-sm text-slate-200 leading-relaxed line-clamp-3">
                  {p.blurb}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-300 group-hover:text-brand-100">
                  View {p.plural}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
