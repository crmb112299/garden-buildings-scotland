import { SITE } from "@/lib/site";

export default function TrustBar({ dark = true }: { dark?: boolean }) {
  const bg = dark ? "bg-ink-900 text-white" : "bg-brand-50 text-ink-900";
  return (
    <section className={`${bg}`}>
      <div className="max-w-container mx-auto px-4 py-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-semibold">
        {SITE.trustBar.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span aria-hidden className="text-brand-500">✓</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
