import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ExploreShell } from "@/components/layout/ExploreShell";
import { RelatedPanel } from "@/components/layout/RightPanel";
import { SideTrackOverlay } from "@/components/sidetrack/SideTrackOverlay";
import { NodeViewTracker } from "@/components/analytics/NodeViewTracker";
import { TechniquePageView } from "@/components/nodes/TechniquePageView";
import { fetchTechniquePage } from "@/lib/sanity/fetchPage";

export async function generateMetadata({
  params,
}: PageProps<"/techniques/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchTechniquePage(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.shortDescription ?? data.tenSecondExplanation,
    alternates: { canonical: `/techniques/${slug}` },
  };
}

export default async function TechniquePageRoute({
  params,
}: PageProps<"/techniques/[slug]">) {
  const { slug } = await params;
  const preview = (await draftMode()).isEnabled;
  const data = await fetchTechniquePage(slug);
  if (!data) notFound();

  return (
    <>
      <ExploreShell
        currentSlug={slug}
        right={<RelatedPanel relations={data.sideTracks ?? []} />}
      >
        <TechniquePageView data={data} preview={preview} />
      </ExploreShell>
      <Suspense fallback={null}>
        <SideTrackOverlay sideTracks={data.sideTracks ?? []} nodeId={data._id} />
      </Suspense>
      <NodeViewTracker nodeId={data._id} nodeType={data._type} domain={data.domain} slug={slug} />
    </>
  );
}
