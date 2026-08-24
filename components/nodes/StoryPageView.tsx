import type { StoryPageData, TermPageData, SciencePageData } from "@/lib/sanity/types";
import { RichText } from "@/components/common/RichText";
import { RelatedContent } from "@/components/common/RelatedContent";
import { SourceList } from "@/components/common/SourceList";

/** §1.2 Story — Question / Short Answer / Story / Evidence / Connections / What Changed? */
export function StoryPageView({ data }: { data: StoryPageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Story</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {data.question}
        </h1>
      </header>

      {/* Short Answer */}
      <p className="mt-6 border-l-4 border-water bg-water/5 p-4 text-lg leading-relaxed">
        {data.shortAnswer}
      </p>

      <div className="mt-8 space-y-4 text-base leading-relaxed">
        <RichText value={data.storyBody} />
      </div>

      {data.evidence ? (
        <section aria-labelledby="evidence-heading" className="mt-12 rounded-xl border border-stone-line bg-white/70 p-5">
          <h2 id="evidence-heading" className="text-lg font-bold">
            {data.evidence.heading}
          </h2>
          <div className="mt-3 text-sm leading-relaxed">
            <RichText value={data.evidence.body} />
          </div>
        </section>
      ) : null}

      {data.whatChanged ? (
        <section aria-labelledby="changed-heading" className="mt-10">
          <h2 id="changed-heading" className="text-xl font-bold">
            {data.whatChanged.heading}
          </h2>
          <div className="mt-3">
            <RichText value={data.whatChanged.body} />
          </div>
        </section>
      ) : null}

      {data.connections && data.connections.length > 0 ? (
        <section aria-label="이어지는 연결" className="mt-12 grid gap-4 sm:grid-cols-2">
          {data.connections.map((relation) => (
            <RelatedContent key={`${relation.target._id}-${relation.label}`} relation={relation} onOpenSideTrack sourceNodeId={data._id} />
          ))}
        </section>
      ) : null}

      {data.furtherReading && data.furtherReading.length > 0 ? (
        <SourceList sources={data.furtherReading} title="더 읽기" />
      ) : null}

      <SourceList sources={data.sources} />
    </>
  );
}

/** §1.2 Term — Term / literalMeaning / etymology / definitions / relatedTerms */
export function TermPageView({ data }: { data: TermPageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Term</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {data.term}
        </h1>
        {data.pronunciation || data.originalLanguage || data.literalMeaning ? (
          <dl className="mt-4 space-y-1 rounded-xl border border-stone-line bg-white/70 p-4 text-sm">
            {data.pronunciation ? (
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 font-medium text-ink-soft">발음</dt>
                <dd>{data.pronunciation}</dd>
              </div>
            ) : null}
            {data.originalLanguage ? (
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 font-medium text-ink-soft">원어</dt>
                <dd>{data.originalLanguage}</dd>
              </div>
            ) : null}
            {data.literalMeaning ? (
              <div className="flex gap-2">
                <dt className="w-24 shrink-0 font-medium text-ink-soft">직역</dt>
                <dd>{data.literalMeaning}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}
      </header>

      {/* simpleDefinition */}
      <p className="mt-6 border-l-4 border-accent bg-accent/5 p-4 text-lg leading-relaxed">
        {data.simpleDefinition}
      </p>

      {data.etymology ? (
        <section aria-labelledby="etymology-heading" className="mt-10">
          <h2 id="etymology-heading" className="text-xl font-bold">
            {data.etymology.heading}
          </h2>
          <div className="mt-3">
            <RichText value={data.etymology.body} />
          </div>
        </section>
      ) : null}

      {data.contextDefinition ? (
        <section aria-labelledby="context-heading" className="mt-10">
          <h2 id="context-heading" className="text-xl font-bold">
            {data.contextDefinition.heading}
          </h2>
          <div className="mt-3">
            <RichText value={data.contextDefinition.body} />
          </div>
        </section>
      ) : null}

      <SourceList sources={data.sources} />
    </>
  );
}

/** §3.3 SCIENCE_PAGE_QUERY 렌더러 */
export function SciencePageView({ data }: { data: SciencePageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Science</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {data.title}
        </h1>
        <p className="mt-5 border-l-4 border-water bg-water/5 p-4 text-lg leading-relaxed">
          {data.oneSentence}
        </p>
      </header>

      <div className="mt-8 space-y-4 text-base leading-relaxed">
        <RichText value={data.standardExplanation} />
      </div>

      {data.deepExplanation ? (
        <details className="mt-8 rounded-xl border border-stone-line bg-white/70 p-5">
          <summary className="cursor-pointer select-none text-lg font-bold">더 깊이</summary>
          <div className="mt-3 text-sm leading-relaxed">
            <RichText value={data.deepExplanation} />
          </div>
        </details>
      ) : null}

      <SourceList sources={data.sources} />
    </>
  );
}
