import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ExploreShell } from "@/components/layout/ExploreShell";
import { NodeViewTracker } from "@/components/analytics/NodeViewTracker";
import { ArtworkPageView } from "@/components/nodes/ArtworkPageView";
import { fetchArtworkPage } from "@/lib/sanity/fetchPage";

export async function generateMetadata({
  params,
}: PageProps<"/artworks/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchArtworkPage(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.shortDescription ?? data.thirtySecondExplanation,
    alternates: { canonical: `/artworks/${slug}` },
    openGraph: data.heroImage?.url ? { images: [{ url: data.heroImage.url }] } : undefined,
  };
}

export default async function ArtworkPageRoute({ params }: PageProps<"/artworks/[slug]">) {
  const { slug } = await params;
  await draftMode(); // §3.4 perspective는 sanityFetch가 처리
  const data = await fetchArtworkPage(slug);
  if (!data) notFound();

  return (
    <ExploreShell currentSlug={slug}>
      <ArtworkPageView data={data} />
      <NodeViewTracker nodeId={data._id} nodeType={data._type} domain={data.domain} slug={slug} />
    </ExploreShell>
  );
}
