import { Suspense } from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ExploreShell } from "@/components/layout/ExploreShell";
import { RightPanelChips } from "@/components/layout/RightPanel";
import { SideTrackOverlay } from "@/components/sidetrack/SideTrackOverlay";
import { NodeViewTracker } from "@/components/analytics/NodeViewTracker";
import { EntryPageView } from "@/components/nodes/EntryPageView";
import { fetchEntryPage } from "@/lib/sanity/fetchPage";

export async function generateMetadata({
  params,
}: PageProps<"/entries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchEntryPage(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.shortDescription ?? data.introQuestion,
    alternates: { canonical: `/entries/${slug}` },
    openGraph: data.heroImage?.url ? { images: [{ url: data.heroImage.url }] } : undefined,
  };
}

export default async function EntryPageRoute({ params }: PageProps<"/entries/[slug]">) {
  const { slug } = await params;
  const preview = (await draftMode()).isEnabled;
  const data = await fetchEntryPage(slug);
  if (!data) notFound();

  return (
    <>
      <ExploreShell
        currentSlug={slug}
        right={<RightPanelChips relations={data.connections ?? []} />}
      >
        <EntryPageView data={data} preview={preview} />
      </ExploreShell>
      <Suspense fallback={null}>
        <SideTrackOverlay sideTracks={data.connections ?? []} nodeId={data._id} />
      </Suspense>
      <NodeViewTracker
        nodeId={data._id}
        nodeType={data._type}
        domain={data.domain}
        slug={slug}
        entryOrigin="direct"
      />
    </>
  );
}
