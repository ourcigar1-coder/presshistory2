import Image from "next/image";
import type { StaticDiagramProjection } from "@/lib/pageTypes";
import { checkVisualRecord } from "@/lib/visuals";
import { VisualProvenanceNote } from "./VisualProvenanceNote";

/**
 * §4.3 StaticDiagram — Sanity SVG + alt/longDescription 렌더링.
 * LLM 생성 설명 이미지는 provenance/검수 상태에 따라 게이트된다 (§7.4).
 */
export async function StaticDiagram({
  diagram,
  preview = false,
  className = "",
}: {
  diagram: StaticDiagramProjection;
  preview?: boolean;
  className?: string;
}) {
  const gate = checkVisualRecord(diagram.visualRecord, { preview });

  return (
    <figure className={`my-8 ${className}`}>
      <div className="overflow-hidden rounded-xl border border-stone-line bg-white">
        {gate.ok && diagram.url ? (
          <Image
            src={diagram.url}
            alt={diagram.alt}
            width={760}
            height={420}
            className="h-auto w-full"
            unoptimized={diagram.url.endsWith(".svg")}
          />
        ) : (
          <div className="flex min-h-40 flex-col items-center justify-center gap-2 bg-stone-line/40 p-6 text-center">
            {/* fallback: §7.4 텍스트 fallback */}
            <p className="max-w-prose text-sm text-ink-soft">{diagram.alt}</p>
            {!gate.ok ? (
              <p className="text-xs text-ink-soft/80">({gate.reason})</p>
            ) : null}
          </div>
        )}
      </div>
      {gate.ok && gate.badge ? (
        <p className="mt-1 text-xs font-medium text-conceptual">{gate.badge}</p>
      ) : null}
      {diagram.caption ? <figcaption className="mt-2 text-sm text-ink-soft">{diagram.caption}</figcaption> : null}
      {diagram.longDescription ? (
        <details className="mt-2 text-sm text-ink-soft">
          <summary className="cursor-pointer select-none font-medium">이미지 자세한 설명</summary>
          <p className="mt-1 leading-relaxed">{diagram.longDescription}</p>
        </details>
      ) : null}
      <VisualProvenanceNote record={diagram.visualRecord} />
    </figure>
  );
}
