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
        {(() => {
          const hero = data.heroImage?.url
            ? data.heroImage
            : data._id === "entry-poster"
              ? {
                  url: "/images/cheret-esclave.jpg",
                  alt: "쥘 셰레의 석판화 포스터 ‘L'Esclave blanche’(Bnf Gallica 소장) — 거리 벽을 장식하던 대형 색채 포스터의 대표 사례.",
                }
              : null;
          return hero?.url ? (
            <figure className="mt-6">
              <div className="overflow-hidden rounded-2xl border border-stone-line">
                <Image src={hero.url} alt={hero.alt} width={1200} height={800} className="h-auto w-full" unoptimized={hero.url.endsWith(".svg")} fetchPriority="high" />
              </div>
              <figcaption className="mt-2 text-xs text-ink-soft">
                Jules Chéret, L&apos;Esclave blanche — Bibliothèque nationale de France, Gallica. Public Domain ·{" "}
                <a href="https://gallica.bnf.fr/ark:/12148/btv1b9015469h" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  소장처 바로가기
                </a>
              </figcaption>
            </figure>
          ) : (
            <div className="mt-6 flex h-56 items-center justify-center rounded-2xl border border-dashed border-stone-line bg-stone-line/30 px-8 text-center">
              <p className="text-sm text-ink-soft">대표 이미지는 기관 자산 검증 후 연결됩니다 (§6.3)</p>
            </div>
          );
        })()}
      </header>
      <section className="mt-10 space-y-4 text-lg leading-relaxed">
        <RichText value={[{ _type: "block", _key: "simple", style: "normal", markDefs: [], children: [{ _type: "span", _key: "simple1", text: data.simpleExplanation }] }]} />
      </section>
      {data.optionalDiagram ? <StaticDiagram diagram={data.optionalDiagram} preview={preview} /> : null}
      <SideTrackChips relations={data.connections ?? []} />
      <SourceList sources={data.sources} />
    </>
  );
}
