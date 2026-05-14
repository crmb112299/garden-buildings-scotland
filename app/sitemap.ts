import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TOWNS } from "@/lib/towns";
import { PRODUCT_LIST } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    "",
    "sheds",
    "garden-rooms",
    "customer-reviews",
    "frequently-asked-questions",
    "online-quote",
    "contact-us",
    "areas-covered",
    "privacy-policy",
    "cookie-policy"
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE.url}/${path}`.replace(/\/$/, ""),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));

  const adEntries: MetadataRoute.Sitemap = [];
  for (const product of PRODUCT_LIST) {
    for (const town of TOWNS) {
      adEntries.push({
        url: `${SITE.url}/${product.urlPrefix}-${town.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8
      });
    }
  }

  return [...staticEntries, ...adEntries];
}
