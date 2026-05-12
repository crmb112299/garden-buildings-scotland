type Item = { title: string; body: string };

const DEFAULT_ITEMS: Item[] = [
  {
    title: "5★ Rated",
    body: "Hundreds of 5-star reviews from homeowners across Scotland."
  },
  {
    title: "Save Up To 50%",
    body: "Direct-from-manufacturer pricing means you skip the showroom mark-up."
  },
  {
    title: "Built To Last",
    body: "Pressure-treated timber and quality fittings — built for Scottish weather."
  },
  {
    title: "Free Delivery & Fitting",
    body: "Supplied and installed by our own team — no hidden extras."
  }
];

export default function WhyChoose({ items = DEFAULT_ITEMS, heading, subheading }: {
  items?: Item[];
  heading?: string;
  subheading?: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {heading ?? "Why Choose Garden Buildings Scotland"}
          </h2>
          <p className="mt-3 text-ink-500">
            {subheading ?? "Here's what changes when you order from us."}
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-slate-200 rounded-xl p-6 hover:border-brand-500 transition-colors"
            >
              <div className="text-2xl font-extrabold text-brand-700">{item.title}</div>
              <p className="mt-2 text-ink-700 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
