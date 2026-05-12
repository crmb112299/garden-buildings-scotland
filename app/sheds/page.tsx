import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Garden Sheds Scotland | Save Up To 50% | Free Delivery & Installation",
  description:
    "Quality garden sheds supplied and installed across Scotland. Pressure-treated timber, free delivery & installation, save up to 50%. Get your free quote in under a minute."
};

export default function ShedsPage() {
  const product = PRODUCTS["garden-sheds"];
  return (
    <>
      <Hero
        source="page-sheds"
        defaultInterest="Garden Shed"
        headline="Garden Sheds Built To Last"
        subheadline="Save Up To 50% Off Garden Sheds"
        bodyCopy={product.positioning}
        backgroundImage={product.image}
      />

      <TrustBar />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold">Garden Sheds, Made For Scotland</h2>
            <div className="mt-4 space-y-4 text-ink-700 leading-relaxed">
              <p>
                Our garden sheds are built from pressure-treated, weatherproof timber and finished
                to a standard you won&apos;t find on a DIY-store forecourt. They&apos;re designed to
                handle Scottish winters without warping, sagging or rotting after a couple of
                seasons.
              </p>
              <p>
                Sizes run from compact tool sheds for tight courtyard gardens through to large
                workshop-grade buildings. Whatever you&apos;re storing (bikes, the lawnmower, the
                kit you can&apos;t fit in the garage), there&apos;s a shed for it.
              </p>
              <p>
                Every order is supplied AND installed by our own team. No flatpack rage, no
                wrestling with cryptic instructions, no waiting in for a delivery slot that never
                turns up.
              </p>
            </div>

            <h3 className="mt-10 text-2xl font-bold">Standard features</h3>
            <ul className="mt-3 space-y-2 text-ink-700 list-disc pl-5">
              <li>Pressure-treated, weatherproof timber</li>
              <li>Heavy-duty floor and roof construction</li>
              <li>Secure door & window options</li>
              <li>Free delivery and installation across Scotland</li>
              <li>Best Price Promise on every quote</li>
            </ul>

            <h3 className="mt-10 text-2xl font-bold">How to get your shed quote</h3>
            <p className="mt-3 text-ink-700 leading-relaxed">
              Use the form to send your details (name, postcode, what you&apos;re after) and
              we&apos;ll come back with a free, no-obligation quote, usually within the day.
            </p>
          </div>

          <aside className="lg:col-span-2" id="quote">
            <div className="lg:sticky lg:top-32">
              <LeadForm
                source="page-sheds"
                defaultInterest="Garden Shed"
                heading="Get Your Free Shed Quote"
                subheading="Save Up To 50%. Takes under a minute."
              />
            </div>
          </aside>
        </div>
      </section>

      <WhyChoose />
      <CTASection subheading="Save Up To 50% Off Garden Sheds" />
    </>
  );
}
