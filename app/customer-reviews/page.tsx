import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Customer Reviews | Garden Buildings Scotland",
  description:
    "What our customers say about Garden Buildings Scotland. 5-star rated for garden sheds, garden rooms, summerhouses, greenhouses and playhouses across Scotland."
};

const REVIEWS = [
  {
    name: "Linda M.",
    town: "Glasgow",
    rating: 5,
    product: "Garden Shed",
    body:
      "Spot on from start to finish. Quote came back the same day, no pressure, lads turned up on time and the shed looks great. Half the price of the big-name places."
  },
  {
    name: "David R.",
    town: "Edinburgh",
    rating: 5,
    product: "Garden Office",
    body:
      "We ordered a garden office for working from home. Fully kitted out, electrics in, insulated, the lot. Couldn't ask for better. Highly recommend."
  },
  {
    name: "Sarah K.",
    town: "Falkirk",
    rating: 5,
    product: "Playhouse",
    body:
      "Friendly team, fair price, properly built. The playhouse has survived two winters and the kids are still battering it. Worth every penny."
  },
  {
    name: "Iain B.",
    town: "Dundee",
    rating: 5,
    product: "Summerhouse",
    body:
      "Got three quotes. These guys were the best price by a mile AND they fit it themselves. No nonsense. Brilliant summerhouse."
  },
  {
    name: "Karen T.",
    town: "Stirling",
    rating: 5,
    product: "Greenhouse",
    body:
      "Greenhouse arrived on the day they said, two friendly lads put it up and tidied up after. Wouldn't go anywhere else now."
  },
  {
    name: "Mark P.",
    town: "Ayrshire",
    rating: 5,
    product: "Garden Room",
    body:
      "Honest pricing, no surprise add-ons, great build quality. Already recommended to a neighbour who's getting a garden room next month."
  }
];

const AVG_RATING = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

export default function ReviewsPage() {
  return (
    <>
      <Hero
        source="page-reviews"
        headline="What Our Customers Say"
        subheadline="5-star rated across Scotland"
        bodyCopy="Hundreds of happy customers from Edinburgh to Ayrshire. Read what they say, then get your own free quote in under a minute."
      />
      <TrustBar />

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-3xl">★</span>
            ))}
          </div>
          <div className="mt-3 text-2xl font-extrabold text-ink-900">{AVG_RATING} / 5</div>
          <p className="mt-1 text-ink-500 text-sm">Based on reviews from customers across Scotland</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${r.rating} stars`}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-brand-700 bg-brand-50 px-2 py-1 rounded-full">
                    {r.product}
                  </span>
                </div>
                <p className="mt-3 text-ink-700 leading-relaxed">&ldquo;{r.body}&rdquo;</p>
                <div className="mt-4 text-sm font-semibold text-ink-900">
                  {r.name}
                  <span className="text-ink-500 font-normal">, {r.town}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
