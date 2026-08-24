import type { TechniquePageData } from "@/lib/sanity/types";
import { RichText, ScienceCallout, ProcessSteps } from "@/components/common/RichText";
import { StaticDiagram } from "@/components/common/StaticDiagram";
import { RelatedContent } from "@/components/common/RelatedContent";
import { RecommendedPath, RelatedPanel } from "@/components/layout/RightPanel";
import { SourceList } from "@/components/common/SourceList";
import { InteractiveDiagram } from "@/components/interactive/InteractiveDiagram";

/** §4.3 TechniqueHero + §1.2 Technique 섹션 구조 */
export function TechniquePageView({ data, preview }: { data: TechniquePageData; preview?: boolean }) {
  const firstScience = data.scienceConcepts?.[0];

  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Technique · {data.family}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {data.title}
        </h1>
        {/* 10초 설명 */}
        <p className="mt-5 border-l-4 border-accent bg-accent/5 p-4 text-lg leading-relaxed">
          {data.tenSecondExplanation}
        </p>
      </header>

      {/* Process */}
      {data.process && data.process.length > 0 ? (
        <section aria-labelledby="process-heading" className="mt-12">
          <h2 id="process-heading" className="text-xl font-bold">
            과정
          </h2>
          <ProcessSteps steps={data.process} />
          {/* 첫 단계 다이어그램이 있으면 시각 보상 */}
          {data.process.find((s) => s.image) ? (
            <StaticDiagram diagram={data.process.find((s) => s.image)!.image!} preview={preview} />
          ) : null}
        </section>
      ) : null}

      {/* Interactive (§4.5 budget 1) */}
      {data.interactiveDiagram ? (
        <InteractiveDiagram diagram={data.interactiveDiagram} preview={preview} />
      ) : null}

      {/* Science callout: 일상 비유 → 정확한 용어 */}
      {firstScience?.oneSentence ? (
        <ScienceCallout
          analogy="기름은 기름끼리, 물은 물끼리 — 석판화 전체가 이 한 줄의 성질 위에 서 있다."
          term={firstScience.title ?? "친수성/친유성 표면"}
          definition={firstScience.oneSentence}
        />
      ) : null}

      {data.whyItAppeared ? (
        <section aria-labelledby="why-heading" className="mt-12">
          <h2 id="why-heading" className="text-xl font-bold">
            {data.whyItAppeared.heading}
          </h2>
          <div className="mt-3">
            <RichText value={data.whyItAppeared.body} />
          </div>
        </section>
      ) : null}

      {data.historicalContext ? (
        <section aria-labelledby="history-heading" className="mt-12">
          <h2 id="history-heading" className="text-xl font-bold">
            {data.historicalContext.heading}
          </h2>
          <div className="mt-3">
            <RichText value={data.historicalContext.body} />
          </div>
        </section>
      ) : null}

      {/* Side-tracks (inline triggers + overlay 데이터) */}
      {data.sideTracks && data.sideTracks.length > 0 ? (
        <section aria-label="옆길로 새기기" className="mt-12 grid gap-4 sm:grid-cols-2">
          {data.sideTracks.map((relation) => (
            <RelatedContent key={`${relation.target._id}-${relation.label}`} relation={relation} onOpenSideTrack sourceNodeId={data._id} />
          ))}
        </section>
      ) : null}

      {/* 대표 작품 카드 */}
      {data.representativeArtwork ? (
        <RecommendedPath
          items={[
            {
              reason: "원리가 아니라 결과물부터 보고 싶다면",
              target: data.representativeArtwork,
            },
          ]}
        />
      ) : (
        <RecommendedPath items={[]} />
      )}

      {/* 우측 패널용 (데스크톱에서는 shell이 별도 렌더) */}
      <div className="xl:hidden">
        <RelatedPanel relations={[...(data.sideTracks ?? [])]} />
      </div>

      <SourceList sources={data.sources} />
    </>
  );
}
