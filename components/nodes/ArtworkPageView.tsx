import Image from "next/image";
import type { ArtworkPageData } from "@/lib/sanity/types";
import { RichText, ImageCredit } from "@/components/common/RichText";
import { SideTrackChips } from "@/components/layout/RightPanel";
import { SourceList } from "@/components/common/SourceList";
import { VisualProvenanceNote } from "@/components/common/VisualProvenanceNote";

export function ArtworkPageView({ data }: { data: ArtworkPageData }) {
  return (
    <>
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Artwork{data.year ? ` · ${data.year}` : ""}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{data.title}</h1>
        <p className="mt-2 text-sm text-ink-soft">{[data.artist?.name, data.year, data.techniqueCard?.title].filter(Boolean).join(" · ")}</p>
        {(() => {
          const hero = data.heroImage?.url
            ? data.heroImage
            : data._id === "artwork-moulin-rouge-la-goulue"
              ? { url: "/images/moulin-rouge-la-goulue.jpg", alt: "툴루즈 로트렉, 물랑루즈: 라 굴루(1891) — 하얀 스커트를 부풀린 라 굴루와 검은 실루엣의 발렌탱이 노란 불빛 속에 대비된다." }
              : null;
          return hero?.url ? (
            <figure className="mt-6">
              <div className="overflow-hidden rounded-2xl border border-stone-line bg-white">
                <Image src={hero.url} alt={hero.alt} width={1200} height={1600} className="h-auto w-full object-contain" fetchPriority="high" />
              </div>
              <figcaption className="mt-2 space-y-1">
                <p className="text-sm text-ink/90">{hero.alt}</p>
                {data.heroImage?.visualRecord ? <><ImageCredit credit={data.heroImage.visualRecord} /><VisualProvenanceNote record={data.heroImage.visualRecord} /></> : null}
              </figcaption>
            </figure>
          ) : null;
        })()}
      </header>
      <p className="mt-8 border-l-4 border-accent bg-accent/5 p-4 text-lg leading-relaxed">{data.thirtySecondExplanation}</p>
      {data.howItWasMade ? <section aria-labelledby="made-heading" className="mt-12"><h2 id="made-heading" className="text-xl font-bold">{data.howItWasMade.heading}</h2><div className="mt-3"><RichText value={data.howItWasMade.body} /></div></section> : null}
      {data.materials && data.materials.length > 0 ? <section aria-label="재료" className="mt-10 grid gap-3 sm:grid-cols-2">{data.materials.filter((m) => m?.name).map((m) => <div key={m.name} className="rounded-xl border border-stone-line bg-white/70 p-4 text-sm"><span className="font-semibold">{m.name}</span>{m.simpleDescription ? <p className="mt-1 text-ink-soft">{m.simpleDescription}</p> : null}</div>)}</section> : null}
      {data.historicalContext ? <section aria-labelledby="art-history-heading" className="mt-12"><h2 id="art-history-heading" className="text-xl font-bold">{data.historicalContext.heading}</h2><div className="mt-3"><RichText value={data.historicalContext.body} /></div></section> : null}
      {data.whyItMatters ? <section aria-labelledby="matter-heading" className="mt-12"><h2 id="matter-heading" className="text-xl font-bold">{data.whyItMatters.heading}</h2><div className="mt-3"><RichText value={data.whyItMatters.body} /></div></section> : null}
      <SideTrackChips relations={data.unexpectedConnections ?? []} />
      <SourceList sources={data.sources} />
    </>
  );
}
