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
    body:
      "Spot on from start to finish. Quote came back the same day, no pressure, lads turned up on time and the shed looks great. Half the price of the big-name places."
  },
  {
    name: "David R.",
    town: "Edinburgh",
    rating: 5,
    body:
      "We ordered a garden office for working from home — fully kitted out, electrics in, insulated, the lot. Couldn't ask for better. Highly recommend."
  },
  {
    name: "Sarah K.",
    town: "Falkirk",
    rating: 5,
    body:
      "Friendly team, fair price, properly built. The playhouse has survived two winters and the kids are still battering it. Worth every penny."
  },
  {
    name: "Iain B.",
    town: "Dundee",
    rating: 5,
    body:
      "Got three quotes — these guys were the best price by a mile AND they fit it themselves. No nonsense. Brilliant summerhouse."
  },
  {
    name: "Karen T.",
    town: "Stirling",
    rating: 5,
    body:
      "Greenhouse arrived on the day they said, two friendly lads put it up and tidied up after. Wouldn't go anywhere else now."
  },
  {
    name: "Mark P.",
    town: "Ayrshire",
    rating: 5,
    body:
      "Honest pricing, no surprise add-ons, great build quality. Already recommended to a neighbour who's getting a garden room next month."
  }
];

export default function ReviewsPage() {
  return (
    <>
      <Hero
        source="page-reviews"
        headline="What Our Customers Say"
        subheadline="5-star rated across Scotland"
        bodyCopy="Hundreds of happy customers from Edinburgh to Ayrshire. Read what they say about our sheds, garden rooms, summerhouses and more — then get your own free quote in under a minute."
      />
      <TrustBar />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="border border-slate-200 rounded-xl p-6 bg-white">
                <div className="flex items-center gap-1 text-amber-500" aria-label={`${r.rating} stars`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-3 text-ink-700 leading-relaxed">“{r.body}”</p>
                <div className="mt-4 text-sm font-semibold text-ink-900">
                  {r.name}
                  <span className="text-ink-500 font-normal"> · {r.town}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
