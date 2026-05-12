import { PRODUCT_LIST, type Product, PRODUCTS, type ProductKey } from "./products";
import { TOWNS, type Town, findTown } from "./towns";

// All product url prefixes — used to parse "/garden-sheds-edinburgh" style slugs.
const PRODUCT_BY_PREFIX: Record<string, ProductKey> = Object.fromEntries(
  PRODUCT_LIST.map((p) => [p.urlPrefix, p.key])
);

// Sorted longest-first so "garden-sheds" beats a hypothetical "garden" prefix.
const PREFIXES = Object.keys(PRODUCT_BY_PREFIX).sort((a, b) => b.length - a.length);

/** Every static slug we want to prerender at build time. */
export function allAdSlugs(): string[] {
  const slugs: string[] = [];
  for (const product of PRODUCT_LIST) {
    for (const town of TOWNS) {
      slugs.push(`${product.urlPrefix}-${town.slug}`);
    }
  }
  return slugs;
}

/** Resolve a URL slug like "garden-sheds-edinburgh" → product + town. */
export function resolveAdSlug(slug: string): { product: Product; town: Town } | null {
  for (const prefix of PREFIXES) {
    if (slug === prefix) return null; // exact prefix is not an ad page
    if (slug.startsWith(prefix + "-")) {
      const townSlug = slug.slice(prefix.length + 1);
      const town = findTown(townSlug);
      if (!town) return null;
      const productKey = PRODUCT_BY_PREFIX[prefix];
      return { product: PRODUCTS[productKey], town };
    }
  }
  return null;
}
