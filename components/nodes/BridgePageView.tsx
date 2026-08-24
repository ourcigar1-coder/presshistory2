import type { BridgePageData } from "@/lib/sanity/types";
import { RichText, IntroQuestion } from "@/components/common/RichText";
import { SideTrackChips } from "@/components/layout/RightPanel";
import { SourceList } from "@/components/common/SourceList";

function NatureBadge({ marker }: { marker: "historical" | "conceptual" }) {
  return marker === "conceptual" ? <span className="inline-block rounded-full border border-conceptual/40 bg-conceptual/10 px-2 py-0.5 text-[11px] font-medium text-conceptual">개념적 유사성</span> : <span className="inline-block rounded-full border border-historical/40 bg-historical/10 px-2 py-0.5 text-[11px] font-medium text-historical">역사적 사실</span>;
}
export function BridgePageView({ data }: { data: BridgePageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Bridge</p>
        <h2 className="mt-2 text-sm font-semibold text-ink-soft">{data.title}</h2>
        <div className="mt-3"><IntroQuestion question={data.introQuestion} /></div>
        <p className="mt-4 rounded-xl bg-stone-line/50 p-3 text-sm leading-relaxed text-ink-soft">이 페이지는 <strong>역사적 사실</strong>과 <strong className="text-conceptual">개념적 유사성</strong>을 구분해서 보여줍니다. “판화가 발전해서 반도체가 되었다”는 단선적 서술은 사용하지 않습니다 (§1.3).</p>
      </header>
      {data.timeline && data.timeline.length > 0 ? <ol className="mt-10 space-y-4">{data.timeline.map((item, i) => <li key={`${item.title}-${i}`} className="relative rounded-xl border border-stone-line bg-white/70 p-5"><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold uppercase tracking-wide text-ink-soft">{item.periodLabel}</span><NatureBadge marker={item.markerType} /></div><h3 className="mt-2 font-bold">{item.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-ink/90">{item.description}</p></li>)}</ol> : null}
      {data.commonProblem ? <section aria-labelledby="common-heading" className="mt-12 rounded-2xl border-l-4 border-water bg-water/5 p-5"><h2 id="common-heading" className="text-lg font-bold">{data.commonProblem.heading}</h2><div className="mt-2 text-sm leading-relaxed md:text-base"><RichText value={data.commonProblem.body} /></div></section> : null}
      {data.comparisonTable && data.comparisonTable.length > 0 ? <section aria-labelledby="compare-heading" className="mt-12 overflow-x-auto"><h2 id="compare-heading" className="text-xl font-bold">나란히 놓고 보기</h2><table className="mt-4 w-full min-w-[560px] border-collapse text-sm"><thead><tr className="border-b-2 border-stone-line text-left"><th scope="col" className="py-2 pr-3 font-semibold">항목</th><th scope="col" className="py-2 pr-3 font-semibold text-historical">인쇄 (19세기)</th><th scope="col" className="py-2 pr-3 font-semibold text-conceptual">패터닝 (오늘날)</th></tr></thead><tbody>{data.comparisonTable.map((row) => <tr key={row.aspect} className="border-b border-stone-line align-top"><th scope="row" className="py-3 pr-3 text-left font-medium">{row.aspect}</th><td className="py-3 pr-3 leading-relaxed">{row.printing}</td><td className="py-3 pr-3 leading-relaxed">{row.patterning}</td></tr>)}</tbody></table></section> : null}
      {data.keyDifferences && data.keyDifferences.length > 0 ? <section aria-labelledby="diff-heading" className="mt-12"><h2 id="diff-heading" className="text-xl font-bold">무엇이 다른가</h2><ul className="mt-4 space-y-4">{data.keyDifferences.map((diff) => <li key={diff.difference} className="rounded-xl border border-stone-line bg-white/70 p-5"><h3 className="font-bold text-accent">{diff.difference}</h3><p className="mt-1.5 text-sm leading-relaxed text-ink/90">{diff.explanation}</p></li>)}</ul></section> : null}
      <SideTrackChips relations={data.relatedNodes ?? []} sourceNodeId={data._id} />
      <SourceList sources={data.sources} />
    </>
  );
}
