import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ExploreShell } from "@/components/layout/ExploreShell";
import { SideTrackOverlay } from "@/components/sidetrack/SideTrackOverlay";
import { NodeViewTracker } from "@/components/analytics/NodeViewTracker";
import { StoryPageView } from "@/components/nodes/StoryPageView";
import { fetchStoryPage } from "@/lib/sanity/fetchPage";

export async function generateMetadata({
  params,
}: PageProps<"/stories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchStoryPage(slug);
  if (!data) return {};
  return {
    title: data.question,
    description: data.shortDescription ?? data.shortAnswer,
    alternates: { canonical: `/stories/${slug}` },
  };
}

/** 직접 URL 접근은 full page (§4.4) */
export default async function StoryPageRoute({ params }: PageProps<"/stories/[slug]">) {
  const { slug } = await params;
  await draftMode();
  const data = await fetchStoryPage(slug);
  if (!data) notFound();

  return (
    <ExploreShell currentSlug={slug}>
      <StoryPageView data={data} />
      <NodeViewTracker nodeId={data._id} nodeType={data._type} domain={data.domain} slug={slug} />
      <Suspense fallback={null}>
        <SideTrackOverlay sideTracks={data.connections ?? []} nodeId={data._id} />
      </Suspense>
    </ExploreShell>
  );
}
