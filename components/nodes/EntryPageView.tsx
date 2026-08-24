import Image from "next/image";
import type { EntryPageData } from "@/lib/sanity/types";
import { nodeHref } from "@/components/common/RelatedContent";
import { IntroQuestion, RichText } from "@/components/common/RichText";
import { EntryStartLink } from "@/components/analytics/EntryStartLink";
import { RelatedContent } from "@/components/common/RelatedContent";
import { RecommendedPath } from "@/components/layout/RightPanel";
import { SourceList } from "@/components/common/SourceList";
import { StaticDiagram } from "@/components/common/StaticDiagram";

/** §4.3 EntryHero + §1.2 Entry 섹션 구조 */
export function EntryPageView({ data, preview }: { data: EntryPageData; preview?: boolean }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Entry</p>
        <h2 className="mt-2 text-sm font-semibold text-ink-soft">{data.title}</h2>
        <div className="mt-3">
          <IntroQuestion question={data.introQuestion} />
        </div>

        {data.heroImage?.url ? (
          <div className="mt-6 overflow-hidden rounded-2xl border border-stone-line">
            <Image
              src={data.heroImage.url}
              alt={data.heroImage.alt}
              width={1200}
              height={800}
              className="h-auto w-full"
              unoptimized={data.heroImage.url.endsWith(".svg")}
              fetchPriority="high"
            />
          </div>
        ) : (
          <div className="mt-6 flex h-56 items-center justify-center rounded-2xl border border-dashed border-stone-line bg-stone-line/30 px-8 text-center">
            <p className="text-sm text-ink-soft">
              대표 이미지는 기관 자산 검증 후 연결됩니다 (§6.3)
            </p>
          </div>
        )}

        {/* 시작 CTA → 첫 연결 노드 */}
        {data.connections && data.connections.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {data.connections.slice(0, 1).map((relation) => (
              <EntryStartLink
                key={relation.target._id}
                entryOrigin="entry"
                href={nodeHref(relation.target)}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-semibold text-white shadow-sm hover:bg-accent/90"
              >
                {relation.label} →
              </EntryStartLink>
            ))}
          </div>
        ) : null}
      </header>

      {/* 30초 이야기 */}
      <section className="mt-10 space-y-4 text-lg leading-relaxed">
        <RichText
          value={[
            {
              _type: "block",
              _key: "simple",
              style: "normal",
              markDefs: [],
              children: [{ _type: "span", _key: "simple1", text: data.simpleExplanation }],
            },
          ]}
        />
      </section>

      {/* 시대의 장면 / 왜 포스터였나 — 선택 다이어그램 */}
      {data.optionalDiagram ? (
        <StaticDiagram diagram={data.optionalDiagram} preview={preview} />
      ) : null}

      {/* 연결 기술 카드 */}
      {data.connections && data.connections.length > 0 ? (
        <section aria-label="연결 기술" className="mt-12 grid gap-4 sm:grid-cols-2">
          {data.connections.map((relation) => (
            <RelatedContent key={relation.target._id} relation={relation} onOpenSideTrack sourceNodeId={data._id} />
          ))}
        </section>
      ) : null}

      <RecommendedPath items={data.recommendedPath ?? []} />

      <SourceList sources={data.sources} />
    </>
  );
}
