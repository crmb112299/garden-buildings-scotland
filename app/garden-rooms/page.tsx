import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChoose from "@/components/WhyChoose";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "Garden Rooms & Garden Offices Scotland | Save Up To 50% | Free Quote",
  description:
    "Fully insulated garden rooms and garden offices supplied and installed across Scotland. Use as an office, studio or guest space. Save up to 50%. Free quote in under a minute."
};

export default function GardenRoomsPage() {
  const product = PRODUCTS["garden-rooms"];
  return (
    <>
      <Hero
        source="page-garden-rooms"
        defaultInterest="Garden Room"
        badgeTagline="Garden Rooms"
        subheadline="Free delivery & installation right across Scotland."
        backgroundImage={product.image}
      />

      <TrustBar />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Garden Rooms, Garden Offices & Studios
            </h2>
            <div className="mt-4 space-y-4 text-ink-700 leading-relaxed">
              <p>
                Whether you&apos;re calling it a garden room, a garden office, a garden studio or
                somewhere to escape the kids, they&apos;re all the same thing: a fully insulated,
                year-round building in your back garden, ready to use the day we leave.
              </p>
              <p>
                Ours come with proper insulation, double glazing and electrics. Usable from
                January through to December without freezing or cooking. Great as a home office, a
                gym, a hobby room, a spare bedroom or a quiet space away from the house.
              </p>
              <p>
                We keep prices keen by supplying and fitting direct. No showroom rent to cover, no
                franchise fees, no inflated mark-ups. Quality without the premium tag.
              </p>
            </div>

            <h3 className="mt-10 text-2xl font-bold">Standard features</h3>
            <ul className="mt-3 space-y-2 text-ink-700 list-disc pl-5">
              <li>Fully insulated walls, floor and roof</li>
              <li>Double-glazed windows and doors</li>
              <li>Electrics installed as standard</li>
              <li>Free delivery and installation across Scotland</li>
              <li>Best Price Promise on every quote</li>
            </ul>

            <h3 className="mt-10 text-2xl font-bold">How to get your garden room quote</h3>
            <p className="mt-3 text-ink-700 leading-relaxed">
              Drop your details into the form (name, postcode, what you&apos;re after) and we
              come back with a free, no-obligation quote, usually within the day.
            </p>
          </div>

          <aside className="lg:col-span-2" id="quote">
            <div className="lg:sticky lg:top-32">
              <LeadForm
                source="page-garden-rooms"
                defaultInterest="Garden Room"
                heading="Get Your Free Garden Room Quote"
                subheading="Save Up To 50%. Takes under a minute."
              />
            </div>
          </aside>
        </div>
      </section>

      <WhyChoose />
      <CTASection subheading="Save Up To 50% Off Garden Rooms" />
    </>
  );
}
