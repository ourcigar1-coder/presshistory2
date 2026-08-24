import type { TechniqueInteractiveDiagram } from "@/lib/sanity/types";
import { isInteractiveKey } from "@/lib/pageTypes";
import { LithographyWaterInk } from "./LithographyWaterInk";
import { RegistrationAlignment } from "./RegistrationAlignment";
import { StaticDiagram } from "@/components/common/StaticDiagram";

/**
 * §4.3 InteractiveDiagram — registry key 기반 렌더. fallback 반드시 존재 (§4.5).
 * key 오류 시 static/fallback explanation으로 대체한다 (§7.4).
 */
export function InteractiveDiagram({
  diagram,
  preview = false,
}: {
  diagram: TechniqueInteractiveDiagram;
  preview?: boolean;
}) {
  if (!isInteractiveKey(diagram.interactiveKey)) {
    // invalid key: warning 상황 → fallback 설명
    return (
      <aside className="my-10 rounded-2xl border border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold text-amber-900">
          알 수 없는 interactive key: {diagram.interactiveKey}
        </p>
        <p className="mt-2 text-sm leading-relaxed">{diagram.fallbackExplanation}</p>
        {diagram.fallbackDiagram ? (
          <StaticDiagram diagram={diagram.fallbackDiagram} preview={preview} />
        ) : null}
      </aside>
    );
  }

  return (
    <>
      {diagram.interactiveKey === "lithography-water-ink" ? (
        <LithographyWaterInk intro={diagram.intro} />
      ) : (
        <RegistrationAlignment intro={diagram.intro} />
      )}
    </>
  );
}
