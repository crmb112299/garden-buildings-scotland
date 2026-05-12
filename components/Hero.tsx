import LeadForm from "./LeadForm";
import { SITE, type Interest } from "@/lib/site";

type Props = {
  saleBanner?: string;
  /** Bottom line of the big sale stack. Use "Garden Buildings", "Garden Sheds", etc. */
  badgeTagline?: string;
  /** Fallback H1 for utility pages (Reviews, FAQ, Areas) that aren't selling the 50% offer. */
  headline?: string;
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
  bodyCopy,
  defaultInterest,
  source,
  backgroundImage = DEFAULT_BG
}: Props) {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(15,23,42,0.45), rgba(15,23,42,0.6)), url(${backgroundImage})`,
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
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Single unified info card */}
            <div className="bg-ink-900/55 backdrop-blur-md rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-2xl flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 self-start bg-brand-600/90 text-white text-[11px] font-extrabold tracking-[0.2em] px-3 py-1.5 rounded-full uppercase">
                <span className="w-1.5 h-1.5 bg-white rounded-full" aria-hidden />
                Sale Now On
              </span>

              {badgeTagline ? (
                // Sale "badge" layout, rendered in white on the dark card (no separate coloured box)
                <h1 className="mt-5 text-white" aria-label={`Up To 50% Off ${badgeTagline}`}>
                  <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                    Up To
                  </span>
                  <span className="block text-7xl md:text-8xl font-black leading-none my-1">
                    50%
                  </span>
                  <span className="block text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                    Off
                  </span>
                  <span className="block mt-3 text-sm md:text-base uppercase tracking-[0.2em] font-extrabold">
                    {badgeTagline}
                  </span>
                </h1>
              ) : (
                <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black leading-[1.05] text-white">
                  {headline}
                </h1>
              )}

              <p className="mt-5 text-base md:text-lg text-slate-200 font-medium">
                {subheadline}
              </p>

              {bodyCopy && (
                <p className="mt-2 text-sm md:text-base text-slate-300">{bodyCopy}</p>
              )}

              <a
                href={SITE.phoneHref}
                className="mt-6 flex items-center gap-3 text-3xl md:text-4xl font-black text-white hover:text-brand-100 leading-none"
                aria-label={`Call ${SITE.phone}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.58l2.2-2.21a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1c0 9.39 7.61 17 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1Z" />
                </svg>
                {SITE.phone}
              </a>

              <a
                href="#quote"
                className="mt-5 inline-block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3.5 rounded-lg"
              >
                Get A FREE Quote
              </a>
            </div>

            {/* Form */}
            <div id="quote" className="scroll-mt-32">
              <LeadForm source={source} defaultInterest={defaultInterest} theme="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
