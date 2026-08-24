import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ExploreShell } from "@/components/layout/ExploreShell";
import { RelatedPanel } from "@/components/layout/RightPanel";
import { SideTrackOverlay } from "@/components/sidetrack/SideTrackOverlay";
import { BridgeTracker, NodeViewTracker } from "@/components/analytics/NodeViewTracker";
import { BridgePageView } from "@/components/nodes/BridgePageView";
import { fetchBridgePage } from "@/lib/sanity/fetchPage";

export async function generateMetadata({
  params,
}: PageProps<"/bridge/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchBridgePage(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.shortDescription ?? data.introQuestion,
    alternates: { canonical: `/bridge/${slug}` },
  };
}

/** §5.1 bridge_enter / bridge_complete */
export default async function BridgePageRoute({ params }: PageProps<"/bridge/[slug]">) {
  const { slug } = await params;
  await draftMode();
  const data = await fetchBridgePage(slug);
  if (!data) notFound();

  return (
    <>
      <ExploreShell currentSlug={slug} right={<RelatedPanel relations={data.relatedNodes ?? []} />}>
        <BridgePageView data={data} />
      </ExploreShell>
      <Suspense fallback={null}>
        <SideTrackOverlay sideTracks={data.relatedNodes ?? []} nodeId={data._id} />
      </Suspense>
      <NodeViewTracker nodeId={data._id} nodeType={data._type} domain={data.domain} slug={slug} />
      <BridgeTracker nodeId={data._id} />
    </>
  );
}
