import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { TOWNS } from "@/lib/towns";
import { PRODUCT_LIST } from "@/lib/products";

export const metadata = {
  title: "Areas Covered | Garden Buildings Scotland",
  description:
    "Garden sheds, garden rooms, summerhouses, greenhouses and playhouses across Edinburgh, Glasgow, Dundee, Stirling, Fife, Lanarkshire, Ayrshire and the rest of Scotland."
};

export default function AreasCoveredPage() {
  return (
    <>
      <Hero
        source="page-areas-covered"
        headline="Areas We Cover Across Scotland"
        subheadline="Free delivery & installation, wherever you are"
        bodyCopy="We supply and install garden buildings across Scotland, from Edinburgh and Glasgow to the smallest village in Ayrshire. Find your town below."
      />
      <TrustBar />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOWNS.filter((t) => t.type !== "national").map((town) => (
              <div key={town.slug}>
                <h3 className="text-xl font-bold text-ink-900">
                  Garden Buildings {town.type === "region" ? `across ${town.name}` : `in ${town.name}`}
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {PRODUCT_LIST.map((p) => (
                    <li key={p.key}>
                      <Link
                        href={`/${p.urlPrefix}-${town.slug}`}
                        className="text-brand-700 hover:text-brand-800 hover:underline"
                      >
                        {p.plural} {town.type === "region" ? "across" : "in"} {town.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
