import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ExploreShell } from "@/components/layout/ExploreShell";
import { NodeViewTracker } from "@/components/analytics/NodeViewTracker";
import { SciencePageView } from "@/components/nodes/StoryPageView";
import { fetchSciencePage } from "@/lib/sanity/fetchPage";

export async function generateMetadata({
  params,
}: PageProps<"/science/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchSciencePage(slug);
  if (!data) return {};
  return {
    title: data.title,
    description: data.shortDescription ?? data.oneSentence,
    alternates: { canonical: `/science/${slug}` },
  };
}

export default async function SciencePageRoute({ params }: PageProps<"/science/[slug]">) {
  const { slug } = await params;
  await draftMode();
  const data = await fetchSciencePage(slug);
  if (!data) notFound();

  return (
    <ExploreShell currentSlug={slug}>
      <SciencePageView data={data} />
      <NodeViewTracker nodeId={data._id} nodeType={data._type} domain={data.domain} slug={slug} />
    </ExploreShell>
  );
}
