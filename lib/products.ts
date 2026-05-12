export type ProductKey = "garden-sheds" | "garden-rooms" | "greenhouse" | "summerhouse" | "playhouses";

export type Product = {
  key: ProductKey;
  // URL prefix for ad pages (e.g. /garden-sheds-edinburgh)
  urlPrefix: string;
  // Singular human label
  singular: string;
  // Plural human label
  plural: string;
  // Hero positioning — keep tone consistent with brief (sheds = quality/value, rooms = accessible)
  positioning: string;
  // Short blurb used on homepage product cards
  blurb: string;
  // Hero image used on category & ad pages
  image: string;
  // Full gallery (9 supplier photos under /public/images/<slug>/)
  gallery: string[];
  // Default keyword used in meta titles (also surfaces "garden office" inside garden-rooms)
  keywords: string[];
};

// 9 supplier photos per product live under /public/images/<slug>/1.jpg ... 9.jpg
// `image` is the hero shot; `gallery` is the full set for future galleries.
function gallery(slug: string): string[] {
  return Array.from({ length: 9 }, (_, i) => `/images/${slug}/${i + 1}.jpg`);
}

export const PRODUCTS: Record<ProductKey, Product> = {
  "garden-sheds": {
    key: "garden-sheds",
    urlPrefix: "garden-sheds",
    singular: "Garden Shed",
    plural: "Garden Sheds",
    positioning:
      "Heavy-duty timber sheds built to last. Not the flat-pack stuff that bows after a Scottish winter.",
    blurb:
      "Pressure-treated timber sheds built to last decades. Supplied and installed across Scotland.",
    image: "/images/garden-sheds/1.jpg",
    gallery: gallery("garden-sheds"),
    keywords: ["garden sheds", "wooden sheds", "timber sheds"]
  },
  "garden-rooms": {
    key: "garden-rooms",
    urlPrefix: "garden-rooms",
    singular: "Garden Room",
    plural: "Garden Rooms",
    positioning:
      "Insulated, year-round garden rooms. Perfect as a garden office, studio or guest space, built without the premium price tag.",
    blurb:
      "Fully insulated garden rooms and garden offices. Work, relax or host without leaving home.",
    image: "/images/garden-rooms/1.jpg",
    gallery: gallery("garden-rooms"),
    keywords: ["garden rooms", "garden offices", "garden studios"]
  },
  greenhouse: {
    key: "greenhouse",
    urlPrefix: "greenhouse",
    singular: "Greenhouse",
    plural: "Greenhouses",
    positioning:
      "Sturdy aluminium and timber greenhouses sized for Scottish gardens. Free delivery and installation included.",
    blurb:
      "Quality greenhouses with toughened glazing. Sized to suit any garden, fitted by our team.",
    image: "/images/greenhouse/1.jpg",
    gallery: gallery("greenhouse"),
    keywords: ["greenhouses", "garden greenhouse"]
  },
  summerhouse: {
    key: "summerhouse",
    urlPrefix: "summerhouse",
    singular: "Summerhouse",
    plural: "Summerhouses",
    positioning:
      "Traditional and modern summerhouses. Somewhere proper to enjoy the garden when the sun finally shows up.",
    blurb:
      "Timber summerhouses for relaxing, entertaining and family time. Installed across Scotland.",
    image: "/images/summerhouse/1.jpg",
    gallery: gallery("summerhouse"),
    keywords: ["summerhouses", "garden summerhouse"]
  },
  playhouses: {
    key: "playhouses",
    urlPrefix: "playhouses",
    singular: "Playhouse",
    plural: "Playhouses",
    positioning:
      "Solid timber playhouses that survive everything the kids and Scottish weather can throw at them.",
    blurb:
      "Wooden playhouses, dens and outdoor play structures built to last well past the toddler years.",
    image: "/images/playhouses/1.jpg",
    gallery: gallery("playhouses"),
    keywords: ["playhouses", "kids playhouse", "wooden playhouse"]
  }
};

export const PRODUCT_LIST: Product[] = Object.values(PRODUCTS);
