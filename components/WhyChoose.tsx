type Item = { title: string; body: string; icon?: keyof typeof ICONS };

const ICONS = {
  star: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m12 17.3 6.18 3.7-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.3Z" />
    </svg>
  ),
  pound: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 5h-5a4 4 0 0 0-4 4v3H6v3h2v4h11" />
      <path d="M8 13h7" />
    </svg>
  ),
  timber: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11.5 12 4l9 7.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5Z" />
      <path d="M9 22V15h6v7" />
    </svg>
  ),
  van: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 7h12v10H3z" />
      <path d="M15 11h4l2 3v3h-6" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
} as const;

const DEFAULT_ITEMS: Item[] = [
  {
    icon: "star",
    title: "5★ Rated",
    body: "Hundreds of 5-star reviews from homeowners across Scotland."
  },
  {
    icon: "pound",
    title: "Save Up To 50%",
    body: "Direct-from-manufacturer pricing means you skip the showroom mark-up."
  },
  {
    icon: "timber",
    title: "Built To Last",
    body: "Pressure-treated timber and quality fittings, built for Scottish weather."
  },
  {
    icon: "van",
    title: "Free Delivery & Fitting",
    body: "Supplied and installed by our own team. No hidden extras."
  }
];

export default function WhyChoose({
  items = DEFAULT_ITEMS,
  heading,
  subheading
}: {
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
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-brand-500 hover:shadow-lg transition-all"
            >
              {item.icon && (
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-50 text-brand-700 mb-4">
                  {ICONS[item.icon]}
                </div>
              )}
              <div className="text-xl font-extrabold text-ink-900">{item.title}</div>
              <p className="mt-2 text-ink-700 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
