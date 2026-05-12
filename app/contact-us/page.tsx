import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact Us | Garden Buildings Scotland",
  description:
    "Get in touch with Garden Buildings Scotland. Free quotes on garden sheds, garden rooms, summerhouses, greenhouses and playhouses across Scotland."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <div className="max-w-container mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-3 text-xl text-slate-200">
            We&apos;re a friendly Scottish team. No call centre, no hard sell.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-sm font-semibold text-brand-700 uppercase tracking-wide">Phone</div>
              <a href={SITE.phoneHref} className="block mt-1 text-2xl font-bold text-ink-900">
                {SITE.phone}
              </a>
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-700 uppercase tracking-wide">Email</div>
              <a href={`mailto:${SITE.email}`} className="block mt-1 text-lg text-ink-900">
                {SITE.email}
              </a>
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-700 uppercase tracking-wide">Address</div>
              <div className="mt-1 text-ink-700">{SITE.addressLine}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-brand-700 uppercase tracking-wide">Hours</div>
              <div className="mt-1 text-ink-700">
                Mon to Fri, 9am to 5pm
                <br />
                Sat, 10am to 2pm
                <br />
                Sun, Closed
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <LeadForm
              source="page-contact"
              heading="Send Us A Message"
              subheading="Quick form. We'll come back the same day."
            />
          </div>
        </div>
      </section>

      <TrustBar />
    </>
  );
}
