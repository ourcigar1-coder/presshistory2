import type { TechniquePageData } from "@/lib/sanity/types";
import { RichText, ScienceCallout, ProcessSteps } from "@/components/common/RichText";
import { StaticDiagram } from "@/components/common/StaticDiagram";
import { SideTrackChips } from "@/components/layout/RightPanel";
import { SourceList } from "@/components/common/SourceList";
import { InteractiveDiagram } from "@/components/interactive/InteractiveDiagram";

export function TechniquePageView({ data, preview }: { data: TechniquePageData; preview?: boolean }) {
  const firstScience = data.scienceConcepts?.[0];
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Technique · {data.family}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{data.title}</h1>
        <p className="mt-5 border-l-4 border-accent bg-accent/5 p-4 text-lg leading-relaxed">{data.tenSecondExplanation}</p>
      </header>
      {data.process && data.process.length > 0 ? (
        <section aria-labelledby="process-heading" className="mt-12">
          <h2 id="process-heading" className="text-xl font-bold">과정</h2>
          <ProcessSteps steps={data.process} />
          {data.process.find((s) => s.image) ? <StaticDiagram diagram={data.process.find((s) => s.image)!.image!} preview={preview} /> : null}
        </section>
      ) : null}
      {data.interactiveDiagram ? <InteractiveDiagram diagram={data.interactiveDiagram} preview={preview} /> : null}
      {firstScience?.oneSentence ? <ScienceCallout analogy="기름은 기름끼리, 물은 물끼리 — 석판화 전체가 이 한 줄의 성질 위에 서 있다." term={firstScience.title ?? "친수성/친유성 표면"} definition={firstScience.oneSentence} /> : null}
      {data.whyItAppeared ? <section aria-labelledby="why-heading" className="mt-12"><h2 id="why-heading" className="text-xl font-bold">{data.whyItAppeared.heading}</h2><div className="mt-3"><RichText value={data.whyItAppeared.body} /></div></section> : null}
      {data.historicalContext ? <section aria-labelledby="history-heading" className="mt-12"><h2 id="history-heading" className="text-xl font-bold">{data.historicalContext.heading}</h2><div className="mt-3"><RichText value={data.historicalContext.body} /></div></section> : null}
      <SideTrackChips relations={data.sideTracks ?? []} />
      {data.howToIdentify ? <section aria-labelledby="identify-heading" className="mt-12 rounded-xl border border-stone-line bg-white/70 p-6"><h2 id="identify-heading" className="text-lg font-bold">{data.howToIdentify.heading}</h2><div className="mt-3 text-sm leading-relaxed"><RichText value={data.howToIdentify.body} /></div></section> : null}
      {data.efficacy ? <section aria-labelledby="efficacy-heading" className="mt-12"><h2 id="efficacy-heading" className="text-xl font-bold">{data.efficacy.heading}</h2><div className="mt-3"><RichText value={data.efficacy.body} /></div></section> : null}
      <SourceList sources={data.sources} />
    </>
  );
}
