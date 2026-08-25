import Image from "next/image";
import type { StoryPageData, TermPageData, SciencePageData } from "@/lib/sanity/types";
import { RichText } from "@/components/common/RichText";
import { SideTrackChips } from "@/components/layout/RightPanel";
import { SourceList } from "@/components/common/SourceList";

export function StoryPageView({ data }: { data: StoryPageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Story</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{data.question}</h1>
      </header>
      <p className="mt-6 border-l-4 border-water bg-water/5 p-4 text-lg leading-relaxed">{data.shortAnswer}</p>
      {data._id === "story-how-many-blocks-great-wave" ? (
        <figure className="mt-8">
          <Image src="/images/hokusai-wave.jpg" alt="가나가와 해변의 큰 파도 — 갈라진 물방울과 후지산, 여러 색판의 겹침으로 완성된 목판화" width={1200} height={1700} className="h-auto w-full rounded-2xl border border-stone-line object-cover" />
          <figcaption className="mt-2 text-xs text-ink-soft">가나가와 해변의 큰 파도 — Katsushika Hokusai, The Metropolitan Museum of Art, JP10 (Public Domain)</figcaption>
        </figure>
      ) : null}
      {data._id === "story-why-gum-arabic-likes-water" ? (
        <figure className="mt-8">
          <Image src="/images/gum-arabic-exuding.jpg" alt="아카시아 나무 줄기에서 스며 나와 굳은 아라비아고무 수액" width={1200} height={800} className="h-auto w-full rounded-2xl border border-stone-line object-cover" />
          <figcaption className="mt-2 text-xs text-ink-soft">아카시아 수액에서 스며 나오는 아라비아고무 — Wikimedia Commons, CC BY-SA 4.0</figcaption>
        </figure>
      ) : null}
      <div className="mt-8 space-y-4 text-base leading-relaxed"><RichText value={data.storyBody} /></div>
      {data.evidence ? <section aria-labelledby="evidence-heading" className="mt-12 rounded-xl border border-stone-line bg-white/70 p-5"><h2 id="evidence-heading" className="text-lg font-bold">{data.evidence.heading}</h2><div className="mt-3 text-sm leading-relaxed"><RichText value={data.evidence.body} /></div></section> : null}
      {data.whatChanged ? <section aria-labelledby="changed-heading" className="mt-10"><h2 id="changed-heading" className="text-xl font-bold">{data.whatChanged.heading}</h2><div className="mt-3"><RichText value={data.whatChanged.body} /></div></section> : null}
      <SideTrackChips relations={data.connections ?? []} />
      {data.furtherReading && data.furtherReading.length > 0 ? <SourceList sources={data.furtherReading} title="더 읽기" /> : null}
      <SourceList sources={data.sources} />
    </>
  );
}
export function TermPageView({ data }: { data: TermPageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Term</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{data.term}</h1>
        {data.pronunciation || data.originalLanguage || data.literalMeaning ? (
          <dl className="mt-4 space-y-1 rounded-xl border border-stone-line bg-white/70 p-4 text-sm">
            {data.pronunciation ? <div className="flex gap-2"><dt className="w-24 shrink-0 font-medium text-ink-soft">발음</dt><dd>{data.pronunciation}</dd></div> : null}
            {data.originalLanguage ? <div className="flex gap-2"><dt className="w-24 shrink-0 font-medium text-ink-soft">원어</dt><dd>{data.originalLanguage}</dd></div> : null}
            {data.literalMeaning ? <div className="flex gap-2"><dt className="w-24 shrink-0 font-medium text-ink-soft">직역</dt><dd>{data.literalMeaning}</dd></div> : null}
          </dl>
        ) : null}
      </header>
      <p className="mt-6 border-l-4 border-accent bg-accent/5 p-4 text-lg leading-relaxed">{data.simpleDefinition}</p>
      {data._id === "term-registration" ? (
        <figure className="mt-8">
          <Image src="/images/moulin-rouge-color.jpg" alt="앙리 드 툴루즈로트렉, 물랑루즈: 라 굴루(1891) — 노란빛 스커트, 검은 실루엣, 빨간 글씨가 겹쳐진 컬러 다색 석판화 포스터" width={1200} height={1606} className="h-auto w-full rounded-2xl border border-stone-line object-cover" />
          <figcaption className="mt-2 text-xs text-ink-soft">Moulin Rouge: La Goulue (1891) — 네 개의 색판을 겹쳐 찍은 컬러 석판화. 색이 많아질수록 정합은 더 어려워진다. Henri de Toulouse-Lautrec, The Metropolitan Museum of Art, 32.88.12 (Public Domain, via Wikimedia Commons)</figcaption>
        </figure>
      ) : null}
      {data._id === "term-registration" ? (
        <figure className="mt-6">
          <Image src="/images/registration-marks.jpg" alt="인쇄판 모서리의 레지스터 마크 — 십자와 원형 표식이 겹쳐 색판이 정확히 맞았는지 확인한다" width={1200} height={800} className="h-auto w-full rounded-2xl border border-stone-line object-cover" />
          <figcaption className="mt-2 text-xs text-ink-soft">인쇄 판의 레지스터 마크 — 십자 표식이 겹치면 색판이 정확히 맞은 것이다. Wikimedia Commons (Public Domain)</figcaption>
        </figure>
      ) : null}
      {data._id === "term-kento" ? (
        <figure className="mt-8">
          <Image src="/images/kento-woodblock.jpg" alt="일본 우키요에 목판 실물 — 판의 가장자리에 파인 겐토(눈금) 홈이 보인다. 종이를 이 홈에 걸어 매번 같은 자리에 놓는다" width={1200} height={900} className="h-auto w-full rounded-2xl border border-stone-line object-cover" />
          <figcaption className="mt-2 text-xs text-ink-soft">우키요에 목판 실물 — 판 가장자리의 겐토 홈이 종이의 위치를 고정한다. Rijksmuseum (CC0)</figcaption>
        </figure>
      ) : null}
      {data.etymology ? <section aria-labelledby="etymology-heading" className="mt-10"><h2 id="etymology-heading" className="text-xl font-bold">{data.etymology.heading}</h2><div className="mt-3"><RichText value={data.etymology.body} /></div></section> : null}
      {data.contextDefinition ? <section aria-labelledby="context-heading" className="mt-10"><h2 id="context-heading" className="text-xl font-bold">{data.contextDefinition.heading}</h2><div className="mt-3"><RichText value={data.contextDefinition.body} /></div></section> : null}
      <SourceList sources={data.sources} />
    </>
  );
}
export function SciencePageView({ data }: { data: SciencePageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Science</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{data.title}</h1>
        <p className="mt-5 border-l-4 border-water bg-water/5 p-4 text-lg leading-relaxed">{data.oneSentence}</p>
        {data._id === "science-hydrophilic-oleophilic-surface" ? (
          <figure className="mt-8">
            <Image src="/images/water-drops.jpg" alt="발수 코팅 위에 구슬처럼 맺힌 물방울 매크로 사진" width={1200} height={800} className="h-auto w-full rounded-2xl border border-stone-line object-cover" />
            <figcaption className="mt-2 text-xs text-ink-soft">물은 친수성 면 위에 막으로 퍼지고, 소수성 면 위에서는 구슬로 맺힌다 — Wikimedia Commons, CC BY 2.0</figcaption>
          </figure>
        ) : null}
      </header>
      <div className="mt-8 space-y-4 text-base leading-relaxed"><RichText value={data.standardExplanation} /></div>
      {data.deepExplanation ? <details className="mt-8 rounded-xl border border-stone-line bg-white/70 p-5"><summary className="cursor-pointer select-none text-lg font-bold">더 깊이</summary><div className="mt-3 text-sm leading-relaxed"><RichText value={data.deepExplanation} /></div></details> : null}
      <SourceList sources={data.sources} />
    </>
  );
}
