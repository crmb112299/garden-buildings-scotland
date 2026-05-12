import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "FAQ | Garden Buildings Scotland",
  description:
    "Frequently asked questions about garden sheds, garden rooms, summerhouses, greenhouses and playhouses from Garden Buildings Scotland. Delivery, installation, guarantees, lead times."
};

const FAQS = [
  {
    q: "Do you deliver across all of Scotland?",
    a: "Yes — we cover Edinburgh, Glasgow, Dundee, Stirling, Perth, Fife, Lanarkshire, Ayrshire and every town in between. Free delivery is included as standard."
  },
  {
    q: "Is installation included?",
    a: "Yes. Every order includes free installation by our own team. You don't need to lift a finger and there's no flatpack assembly required."
  },
  {
    q: "How quickly can I get a quote?",
    a: "Most quotes go back the same day. Fill in the form on any page or call us on 01413 100527 and we'll come back with a price."
  },
  {
    q: "What's the lead time once I order?",
    a: "Typical lead times are 2–4 weeks from order to install. We'll give you an exact slot when we confirm your order."
  },
  {
    q: "Are the buildings really 50% off?",
    a: "Our prices are up to 50% below high-street and showroom equivalents because we supply and fit direct — no middleman, no franchise fees, no showroom mark-up. Like-for-like, our Best Price Promise applies to every quote."
  },
  {
    q: "Do I need planning permission?",
    a: "Most garden buildings fall under permitted development — no planning required. We'll flag it if your project might need a planning application, and point you in the right direction."
  },
  {
    q: "What about guarantees?",
    a: "Every building comes with our quality guarantee. Specifics vary by product — we'll confirm the warranty in writing with your quote."
  },
  {
    q: "Can I see one before I buy?",
    a: "Yes — get in touch and we'll arrange a viewing or send photos and videos of recent installs near you."
  }
];

export default function FAQPage() {
  return (
    <>
      <Hero
        source="page-faq"
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know before getting a quote"
        bodyCopy="Quick answers about delivery, installation, lead times, guarantees and pricing. If your question isn't here, just call or use the form — we'll come straight back."
      />
      <TrustBar />

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 max-w-3xl">
          <dl className="space-y-6">
            {FAQS.map((item) => (
              <div key={item.q} className="border-b border-slate-200 pb-6">
                <dt className="text-lg font-bold text-ink-900">{item.q}</dt>
                <dd className="mt-2 text-ink-700 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
