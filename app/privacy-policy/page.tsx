import { SITE } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy | Garden Buildings Scotland",
  description:
    "How Garden Buildings Scotland collects, stores and uses your personal data when you request a quote or contact us."
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
        <p className="mt-2 text-ink-500 text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>

        <div className="prose mt-8 text-ink-700 space-y-4 leading-relaxed">
          <p>
            Garden Buildings Scotland (&quot;we&quot;, &quot;us&quot;) respects your privacy. This
            policy explains what personal data we collect, why we collect it, and what we do with
            it.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">What we collect</h2>
          <p>
            When you submit a quote form or contact us, we collect: your name, phone number, email
            address, postcode and the product you&apos;re interested in. We may also collect
            anonymous analytics about how visitors use the site (page views, device type).
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">Why we collect it</h2>
          <p>
            We use your details solely to respond to your enquiry — typically by phone or email —
            and to send a quote. We do not sell, rent or pass your details to unrelated third
            parties.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">How long we keep it</h2>
          <p>
            We keep enquiry data for as long as needed to fulfil the enquiry and meet our legal
            obligations (typically up to 6 years for tax and contract records). After that, your
            data is securely deleted.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">Your rights</h2>
          <p>
            Under UK GDPR you have the right to access, correct or request deletion of your personal
            data, and to object to its processing. Email{" "}
            <a className="text-brand-700 font-semibold" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            with any request.
          </p>

          <h2 className="text-2xl font-bold text-ink-900 mt-8">Contact</h2>
          <p>
            {SITE.brand}
            <br />
            {SITE.addressLine}
            <br />
            <a className="text-brand-700 font-semibold" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            <br />
            <a className="text-brand-700 font-semibold" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
