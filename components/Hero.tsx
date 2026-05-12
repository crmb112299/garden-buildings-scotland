import LeadForm from "./LeadForm";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  saleBanner?: string;
  headline: string;
  subheadline: string;
  bodyCopy?: string;
  formHeading?: string;
  formSubheading?: string;
  defaultInterest?: Interest;
  source: string;
  backgroundImage?: string;
};

export default function Hero({
  saleBanner = "SALE NOW ON. Up To 50% Off Garden Buildings",
  headline,
  subheadline,
  bodyCopy,
  formHeading,
  formSubheading,
  defaultInterest,
  source,
  backgroundImage
}: Props) {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.65)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    : undefined;

  return (
    <>
      <div className="bg-brand-700 text-white text-center text-sm font-semibold py-2 px-4">
        {saleBanner}
      </div>

      <section
        className="bg-ink-900 text-white"
        style={bgStyle}
      >
        <div className="max-w-container mx-auto px-4 py-12 md:py-20 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {headline}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-slate-200 font-semibold">
              {subheadline}
            </p>
            {bodyCopy && (
              <p className="mt-4 text-base text-slate-200 max-w-xl">{bodyCopy}</p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="bg-white text-ink-900 hover:bg-brand-50 font-bold px-5 py-3 rounded-md"
              >
                Call {SITE.phone}
              </a>
              <a
                href="#quote"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-3 rounded-md"
              >
                Get A FREE Quote
              </a>
            </div>
          </div>

          <div id="quote" className="lg:col-span-2 scroll-mt-32">
            <LeadForm
              source={source}
              defaultInterest={defaultInterest}
              heading={formHeading}
              subheading={formSubheading}
            />
          </div>
        </div>
      </section>
    </>
  );
}
