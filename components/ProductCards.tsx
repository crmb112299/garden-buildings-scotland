import Link from "next/link";
import { PRODUCT_LIST } from "@/lib/products";

export default function ProductCards({
  heading = "Garden Buildings For Every Scottish Home",
  subheading = "Choose from our range of sheds, garden rooms, summerhouses, greenhouses and playhouses."
}: {
  heading?: string;
  subheading?: string;
}) {
  // Show the 4 main products on the homepage; the 5th lives in /sheds & /garden-rooms detail pages.
  const featured = PRODUCT_LIST.slice(0, 4);
  return (
    <section className="py-16 md:py-20 bg-brand-50/40">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">{heading}</h2>
          <p className="mt-3 text-ink-500">{subheading}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => {
            const href = p.key === "garden-sheds" ? "/sheds" : p.key === "garden-rooms" ? "/garden-rooms" : "/online-quote";
            return (
              <Link
                key={p.key}
                href={href}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-brand-500 transition-colors group"
              >
                <div
                  className="h-44 bg-slate-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${p.image})` }}
                  aria-hidden
                />
                <div className="p-5">
                  <div className="font-bold text-lg group-hover:text-brand-700">{p.plural}</div>
                  <p className="text-sm text-ink-500 mt-1.5 leading-relaxed">{p.blurb}</p>
                  <div className="mt-3 text-brand-700 font-semibold text-sm">View {p.plural} →</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
