import Image from "next/image";
import type { EntryPageData } from "@/lib/sanity/types";
import { IntroQuestion, RichText } from "@/components/common/RichText";
import { SourceList } from "@/components/common/SourceList";
import { StaticDiagram } from "@/components/common/StaticDiagram";
import { SideTrackChips } from "@/components/layout/RightPanel";

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
            <Image src={data.heroImage.url} alt={data.heroImage.alt} width={1200} height={800} className="h-auto w-full" unoptimized={data.heroImage.url.endsWith(".svg")} fetchPriority="high" />
          </div>
        ) : (
          <div className="mt-6 flex h-56 items-center justify-center rounded-2xl border border-dashed border-stone-line bg-stone-line/30 px-8 text-center">
            <p className="text-sm text-ink-soft">대표 이미지는 기관 자산 검증 후 연결됩니다 (§6.3)</p>
          </div>
        )}
      </header>
      <section className="mt-10 space-y-4 text-lg leading-relaxed">
        <RichText value={[{ _type: "block", _key: "simple", style: "normal", markDefs: [], children: [{ _type: "span", _key: "simple1", text: data.simpleExplanation }] }]} />
      </section>
      {data.optionalDiagram ? <StaticDiagram diagram={data.optionalDiagram} preview={preview} /> : null}
      <SideTrackChips relations={data.connections ?? []} sourceNodeId={data._id} />
      <SourceList sources={data.sources} />
    </>
  );
}
