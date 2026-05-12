import { notFound } from "next/navigation";
import AdPageTemplate from "@/components/AdPageTemplate";
import { allAdSlugs, resolveAdSlug } from "@/lib/adRoutes";
import { adPageMeta } from "@/lib/seo";

export const dynamicParams = false;

export async function generateStaticParams() {
  return allAdSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const match = resolveAdSlug(slug);
  if (!match) return {};
  return adPageMeta(match.product, match.town);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const match = resolveAdSlug(slug);
  if (!match) notFound();
  return <AdPageTemplate product={match.product} town={match.town} />;
}
