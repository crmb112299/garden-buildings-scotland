import type { Metadata } from "next";
import { SITE } from "./site";
import type { Product } from "./products";
import type { Town } from "./towns";
import { locationPhrase } from "./towns";

// Compelling default meta — to be refined in the SEO pass.
export function adPageMeta(product: Product, town: Town): Metadata {
  const place = locationPhrase(town);
  const placeTitle = town.type === "national" ? "Scotland" : town.name;
  // Title — keep under ~60 chars where possible
  const title = `${product.plural} ${placeTitle} | Save Up To 50% | Free Quote`;
  const description = `${product.plural} ${place} — supplied & installed by Garden Buildings Scotland. Save up to 50%, best price promise, free delivery & installation. Get your free quote in under a minute.`;

  const url = `${SITE.url}/${product.urlPrefix}-${town.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [product.image] }
  };
}
