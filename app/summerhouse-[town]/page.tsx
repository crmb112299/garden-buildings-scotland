import { notFound } from "next/navigation";
import AdPageTemplate from "@/components/AdPageTemplate";
import { PRODUCTS } from "@/lib/products";
import { TOWNS, findTown } from "@/lib/towns";
import { adPageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }) {
  const { town: townSlug } = await params;
  const town = findTown(townSlug);
  if (!town) return {};
  return adPageMeta(PRODUCTS.summerhouse, town);
}

export default async function Page({ params }: { params: Promise<{ town: string }> }) {
  const { town: townSlug } = await params;
  const town = findTown(townSlug);
  if (!town) notFound();
  return <AdPageTemplate product={PRODUCTS.summerhouse} town={town} />;
}
