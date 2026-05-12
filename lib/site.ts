export const SITE = {
  brand: "Garden Buildings Scotland",
  domain: "gardenbuildingsscotland.co.uk",
  url: "https://www.gardenbuildingsscotland.co.uk",
  phone: "01413 100527",
  phoneRaw: "01413100527",
  phoneHref: "tel:+441413100527",
  email: "info@gardenbuildingsscotland.co.uk",
  addressLine: "Blantyre Industrial Estate, Blantyre, Glasgow G72 0ND",
  region: "Scotland",
  // Used by hero/CTA across the site
  hookHeadline: "Save Up To 50% Off Garden Buildings",
  hookSubhead: "No hard sell. No obligation. Just a great price.",
  // Form interests
  interests: ["Garden Shed", "Garden Room", "Playhouse", "Summerhouse", "Other"] as const,
  // Trust bar items (5–6)
  trustBar: [
    "Save Up To 50% Off",
    "Best Price Promise",
    "Excellent Reviews",
    "5 Star Rated",
    "Free Delivery & Installation",
    "Made In Scotland"
  ]
};

export type Interest = (typeof SITE.interests)[number];
