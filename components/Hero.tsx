import LeadForm from "./LeadForm";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  saleBanner?: string;
  /** Big sale-badge bottom line. Default "GARDEN BUILDINGS". Use product name on product pages. */
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
  badgeTagline = "Garden Buildings",
  headline,
  subheadline,
  bodyCopy,
  defaultInterest,
  source,
  backgroundImage = DEFAULT_BG
}: Props) {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.7)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <>
      <div className="bg-brand-700 text-white text-center text-sm font-semibold py-2 px-4">
        {saleBanner}
      </div>

      <section className="bg-ink-900 text-white" style={bgStyle}>
        <div className="max-w-container mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* LEFT column: sale badge + info panel stacked */}
          <div className="flex flex-col gap-5">
            {/* Sale badge */}
            <div className="bg-brand-600 rounded-xl px-6 py-7 md:py-9 text-white text-center shadow-xl border border-brand-500">
              <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-xs font-extrabold tracking-[0.25em]">
                SALE NOW ON
              </div>
              <div className="mt-4 text-sm font-bold uppercase tracking-[0.2em]">Up To</div>
              <div className="text-7xl md:text-8xl font-black leading-none my-1">50%</div>
              <div className="text-sm font-bold uppercase tracking-[0.2em]">Off</div>
              <div className="mt-4 text-xs md:text-sm uppercase tracking-[0.2em] font-extrabold">
                {badgeTagline}
              </div>
            </div>

            {/* Info panel */}
            <div className="bg-ink-900/75 backdrop-blur rounded-xl p-6 md:p-7 border border-white/10 shadow-xl flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{headline}</h1>
              <p className="mt-3 text-lg md:text-xl text-slate-200 font-semibold">{subheadline}</p>
              {bodyCopy && <p className="mt-3 text-sm md:text-base text-slate-200">{bodyCopy}</p>}

              <div className="mt-5">
                <div className="text-xs text-slate-300 uppercase tracking-widest font-bold">
                  Speak To Us Now
                </div>
                <a
                  href={SITE.phoneHref}
                  className="block mt-1 text-3xl md:text-4xl font-black text-white hover:text-brand-100"
                >
                  {SITE.phone}
                </a>
              </div>

              <a
                href="#quote"
                className="mt-5 inline-block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-3.5 rounded-md text-lg"
              >
                Get A FREE Quote
              </a>
            </div>
          </div>

          {/* RIGHT column: form */}
          <div id="quote" className="scroll-mt-32">
            <LeadForm
              source={source}
              defaultInterest={defaultInterest}
              theme="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}
