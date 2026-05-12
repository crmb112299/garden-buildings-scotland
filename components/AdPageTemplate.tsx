import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import { type Product } from "@/lib/products";
import { type Town, locationPhrase } from "@/lib/towns";
import { type Interest } from "@/lib/site";

const PRODUCT_TO_INTEREST: Record<string, Interest> = {
  "garden-sheds": "Garden Shed",
  "garden-rooms": "Garden Room",
  greenhouse: "Other",
  summerhouse: "Summerhouse",
  playhouses: "Playhouse"
};

type Props = {
  product: Product;
  town: Town;
};

export default function AdPageTemplate({ product, town }: Props) {
  const place = locationPhrase(town);
  const headline = `${product.plural} ${place}. Save Up To 50%`;
  const subheadline = `Quality ${product.plural.toLowerCase()} supplied & installed ${place}.`;
  const source = `${product.key}-${town.slug}`;
  const interest = PRODUCT_TO_INTEREST[product.key];

  return (
    <>
      <Hero
        source={source}
        defaultInterest={interest}
        headline={headline}
        subheadline={subheadline}
        bodyCopy={product.positioning}
        backgroundImage={product.image}
        badgeTagline={product.plural}
        saleBanner={`SALE NOW ON. Up To 50% Off ${product.plural} ${place}`}
      />

      <TrustBar />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              {product.plural} {place}
            </h2>
            <div className="mt-4 space-y-4 text-ink-700 leading-relaxed">
              <p>
                Looking for {product.plural.toLowerCase()} {place}? You&apos;re in the right place.
                Garden Buildings Scotland supplies and installs quality {product.plural.toLowerCase()}{" "}
                throughout {town.name}, with free delivery, free installation and our Best Price
                Promise on every order.
              </p>
              <p>{product.positioning}</p>
              <p>
                Tell us what you&apos;re after using the form (name, postcode, what you&apos;re
                looking for) and we&apos;ll come back with a free, no-obligation quote, usually the
                same day. No hard sell. No showroom mark-up.
              </p>
            </div>

            <h3 className="mt-10 text-2xl font-bold">Why {town.name} chooses us</h3>
            <ul className="mt-3 space-y-2 text-ink-700 list-disc pl-5">
              <li>Pressure-treated, weatherproof construction</li>
              <li>Free delivery & installation {place}</li>
              <li>Save up to 50% vs. high-street equivalents</li>
              <li>Friendly Scottish team. Easy to reach, easy to deal with</li>
              <li>Best Price Promise on every quote</li>
            </ul>

            <h3 className="mt-10 text-2xl font-bold">How to get your quote</h3>
            <p className="mt-3 text-ink-700 leading-relaxed">
              Fill in the form and we&apos;ll be back with your price, typically within the day.
              Prefer a chat? Call us on{" "}
              <a className="text-brand-700 font-semibold" href="tel:+441413100527">
                01413 100527
              </a>
              .
            </p>
          </div>

          <aside className="lg:col-span-2" id="quote">
            <div className="lg:sticky lg:top-32">
              <LeadForm
                source={source}
                defaultInterest={interest}
                heading="Get Your Free Quote"
                subheading={`${product.plural} ${place}. Save Up To 50%`}
              />
            </div>
          </aside>
        </div>
      </section>

      <WhyChoose />

      <CTASection
        subheading={`Save Up To 50% Off ${product.plural} ${place}`}
        body={`Free, no-obligation quote on ${product.plural.toLowerCase()} ${place}. Delivery and installation included as standard.`}
      />
    </>
  );
}
