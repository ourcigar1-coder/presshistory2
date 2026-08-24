import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { ExploreShell } from "@/components/layout/ExploreShell";
import { NodeViewTracker } from "@/components/analytics/NodeViewTracker";
import { TermPageView } from "@/components/nodes/StoryPageView";
import { fetchTermPage } from "@/lib/sanity/fetchPage";

export async function generateMetadata({
  params,
}: PageProps<"/terms/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchTermPage(slug);
  if (!data) return {};
  return {
    title: data.term,
    description: data.shortDescription ?? data.simpleDefinition,
    alternates: { canonical: `/terms/${slug}` },
  };
}

export default async function TermPageRoute({ params }: PageProps<"/terms/[slug]">) {
  const { slug } = await params;
  await draftMode();
  const data = await fetchTermPage(slug);
  if (!data) notFound();

  return (
    <ExploreShell currentSlug={slug}>
      <TermPageView data={data} />
      <NodeViewTracker nodeId={data._id} nodeType={data._type} domain={data.domain} slug={slug} />
    </ExploreShell>
  );
}
