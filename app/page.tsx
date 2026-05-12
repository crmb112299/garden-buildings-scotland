import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChoose from "@/components/WhyChoose";
import ProductCards from "@/components/ProductCards";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Garden Rooms | Garden Buildings | Garden Buildings Scotland",
  description:
    "Save up to 50% on garden sheds, garden rooms, summerhouses, greenhouses and playhouses. Supplied and installed across Scotland. Get your free quote in under a minute."
};

export default function HomePage() {
  return (
    <>
      <Hero
        source="home"
        headline="Garden Buildings Scotland. Sheds, Garden Rooms and More"
        subheadline="Save Up To 50% Off Garden Buildings"
        bodyCopy="Garden sheds, garden rooms, summerhouses, greenhouses and playhouses. Supplied and installed right across Scotland. Built to last, priced to beat the competition."
      />

      <TrustBar />

      <WhyChoose />

      <ProductCards />

      <TrustBar dark={false} />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">Garden Buildings, Made For Scotland</h2>
          <div className="mt-5 space-y-4 text-ink-700 leading-relaxed">
            <p>
              From tucked-away tool sheds to fully insulated garden rooms used as offices, studios
              and guest bedrooms, Garden Buildings Scotland supplies and installs the lot. Every
              building is made from pressure-treated timber and built to handle the kind of weather
              the rest of the country only talks about.
            </p>
            <p>
              Whether you&apos;re after a no-frills shed, a year-round garden office, a traditional
              summerhouse for the garden or a sturdy playhouse for the kids, you&apos;re ordering
              direct. No middleman, no showroom mark-up. That&apos;s how we keep prices up to 50%
              under the high-street alternatives.
            </p>
            <p>
              We cover Edinburgh, Glasgow, Dundee and every town in between. Free delivery and
              installation included as standard, with a price promise on every quote.
            </p>
          </div>

          <h3 className="mt-10 text-2xl font-bold">What you get with every order</h3>
          <ul className="mt-3 space-y-2 text-ink-700 list-disc pl-5">
            <li>Pressure-treated, weatherproof timber as standard</li>
            <li>Free delivery and installation across Scotland</li>
            <li>Best Price Promise. We&apos;ll beat any like-for-like quote</li>
            <li>No-pressure quote process. Take your time, decide later.</li>
            <li>Friendly aftercare from a local Scottish team</li>
          </ul>

          <h3 className="mt-10 text-2xl font-bold">How it works</h3>
          <p className="mt-3 text-ink-700 leading-relaxed">
            Tell us what you&apos;re looking for and your postcode using the form above. We&apos;ll
            come back with a free, no-obligation quote, usually the same day. Happy with the price?
            We book a delivery and install slot to suit you. That&apos;s it.
          </p>
          <p className="mt-4 text-ink-700">
            Prefer to chat? Call us on{" "}
            <a className="text-brand-700 font-semibold" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
