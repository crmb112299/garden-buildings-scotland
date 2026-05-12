import LeadForm from "./LeadForm";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  saleBanner?: string;
  /** Sale badge bottom line. Default "Garden Buildings". Use product name on product pages. */
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
  bodyCopy = "Get An Unbeatable Quote Now",
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
      <div className="bg-brand-700 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4">
        {saleBanner}
      </div>

      <section className="bg-ink-900 text-white" style={bgStyle}>
        <div className="max-w-container mx-auto px-4 py-8 md:py-10 grid lg:grid-cols-2 gap-3 lg:gap-4 items-stretch">
          {/* LEFT: green sale badge + dark info panel stacked */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {/* Green sale badge */}
            <div className="bg-brand-600 rounded-xl px-6 py-5 md:py-6 text-white text-center border border-brand-500 shadow-lg">
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

            {/* Dark info panel */}
            <div className="bg-ink-900/55 backdrop-blur-md rounded-xl p-5 md:p-6 border border-white/10 shadow-2xl flex-1 flex flex-col">
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">{headline}</h1>
              <p className="mt-2 text-lg md:text-xl text-slate-200 font-semibold">{subheadline}</p>
              {bodyCopy && <p className="mt-1.5 text-sm text-slate-300">{bodyCopy}</p>}

              <a
                href={SITE.phoneHref}
                className="block mt-4 text-3xl md:text-4xl font-black text-white hover:text-brand-100 leading-none"
                aria-label={`Call ${SITE.phone}`}
              >
                {SITE.phone}
              </a>

              <a
                href="#quote"
                className="mt-4 inline-block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-3 rounded-md"
              >
                Get A FREE Quote
              </a>
            </div>
          </div>

          {/* RIGHT: dark form */}
          <div id="quote" className="scroll-mt-32">
            <LeadForm source={source} defaultInterest={defaultInterest} theme="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
