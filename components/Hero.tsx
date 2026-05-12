import LeadForm from "./LeadForm";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  saleBanner?: string;
  badgeTagline?: string;
  headline: string;
  subheadline: string;
  bodyCopy?: string;
  defaultInterest?: Interest;
  source: string;
  backgroundImage?: string;
};

const DEFAULT_BG = "/images/garden-rooms/1.jpg";

export default function Hero({
  saleBanner = "SALE NOW ON. Up To 50% Off Garden Buildings.",
  badgeTagline,
  headline,
  subheadline,
  bodyCopy = "Get An Unbeatable Quote Now",
  defaultInterest,
  source,
  backgroundImage = DEFAULT_BG
}: Props) {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(15,23,42,0.4), rgba(15,23,42,0.55)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <>
      <div className="bg-brand-700 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4">
        {saleBanner}
      </div>

      <section className="bg-ink-900 text-white" style={bgStyle}>
        <div className="max-w-container mx-auto px-4 py-10 md:py-14 lg:py-16">
          {/* ONE big transparent card wrapping both columns */}
          <div className="bg-ink-900/55 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              {/* LEFT: badge + info (centered) */}
              <div className="text-center text-white">
                {badgeTagline ? (
                  <>
                    {/* Green sale badge — solid */}
                    <div className="bg-brand-600 rounded-md px-6 py-6 md:py-7 border border-brand-500 shadow-lg mx-auto max-w-sm">
                      <div className="inline-block bg-white/25 backdrop-blur px-3 py-0.5 rounded-full text-[11px] font-extrabold tracking-[0.25em]">
                        SALE NOW ON
                      </div>
                      <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em]">Up To</div>
                      <div className="text-6xl md:text-7xl font-black leading-none my-1">50%</div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em]">Off</div>
                      <div className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.2em] font-extrabold">
                        {badgeTagline}
                      </div>
                    </div>

                    <h1 className="mt-6 text-xl md:text-2xl font-extrabold leading-tight">{headline}</h1>
                  </>
                ) : (
                  <h1 className="text-3xl md:text-5xl font-black leading-tight">{headline}</h1>
                )}

                <p className="mt-2 text-base md:text-lg font-semibold text-slate-100">
                  {subheadline}
                </p>
                {bodyCopy && (
                  <p className="mt-2 text-sm md:text-base text-slate-200">{bodyCopy}</p>
                )}

                <a
                  href={SITE.phoneHref}
                  className="block mt-4 text-3xl md:text-4xl font-black text-white hover:text-brand-100 leading-none"
                  aria-label={`Call ${SITE.phone}`}
                >
                  {SITE.phone}
                </a>

                <a
                  href="#quote"
                  className="mt-5 inline-block w-full max-w-sm text-center bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3.5 rounded-md"
                >
                  Get A FREE Quote
                </a>
              </div>

              {/* RIGHT: form */}
              <div id="quote" className="scroll-mt-32">
                <LeadForm source={source} defaultInterest={defaultInterest} theme="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
