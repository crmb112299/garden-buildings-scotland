import TrustBar from "@/components/TrustBar";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Online Quote | Garden Buildings Scotland",
  description:
    "Get a free, no-obligation online quote for garden sheds, garden rooms, summerhouses, greenhouses and playhouses across Scotland. Save up to 50%."
};

export default function OnlineQuotePage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <div className="max-w-container mx-auto px-4 py-12 md:py-16 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Get Your Free Online Quote
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-200 font-semibold">
              Save Up To 50% Off Garden Buildings
            </p>
            <p className="mt-4 text-slate-200 max-w-xl">
              Tell us what you&apos;re looking for and your postcode. We&apos;ll come back with a
              free, no-obligation price, usually the same day. No hard sell, no obligation.
            </p>
            <p className="mt-4 text-slate-300">
              Or call us on{" "}
              <a className="font-semibold text-white" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-2">
            <LeadForm source="page-online-quote" />
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
}
