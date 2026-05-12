import { SITE } from "@/lib/site";

export const metadata = {
  title: "Cookie Policy | Garden Buildings Scotland",
  description:
    "How Garden Buildings Scotland uses cookies on gardenbuildingsscotland.co.uk."
};

export default function CookiePolicyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold">Cookie Policy</h1>
        <p className="mt-2 text-ink-500 text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="mt-8 text-ink-700 space-y-4 leading-relaxed">
          <p>
            Cookies are small text files that websites place on your device. We use a minimal set of
            cookies on {SITE.domain}, described below.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">Essential cookies</h2>
          <p>
            These are required for the site to function — for example, to remember you&apos;ve
            submitted a form during your session. They cannot be turned off.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">Analytics cookies</h2>
          <p>
            We may use anonymous analytics cookies (e.g. Google Analytics, Plausible) to understand
            how the site is used. These don&apos;t identify you personally.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">Advertising cookies</h2>
          <p>
            If you arrived here via a paid advert, our advertising partners (e.g. Google Ads,
            Facebook Ads) may set cookies to measure ad performance. These can be controlled via
            your browser settings or the ad provider&apos;s opt-out tools.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">Managing cookies</h2>
          <p>
            You can disable or delete cookies in your browser at any time. Doing so may affect how
            this site works.
          </p>

          <p>
            Questions? Email{" "}
            <a className="text-brand-700 font-semibold" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
