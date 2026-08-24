import type { VisualRecordProjection } from "./pageTypes";

/**
 * §7.4 Production Guard
 * - 기관 이미지: license/publicDomain/creditLine/sourcePage 누락 시 발행 차단
 * - LLM 이미지: provenance/검수 누락 시 숨김 + 텍스트 fallback
 * - Preview(draft mode)에서는 검수 전 이미지를 배지와 함께 표시해 QA할 수 있게 한다.
 */
export type VisualGateResult =
  | { ok: true; badge?: string }
  | { ok: false; reason: string };

export function checkVisualRecord(
  record: VisualRecordProjection | null | undefined,
  options?: { preview?: boolean },
): VisualGateResult {
  if (!record) {
    return { ok: false, reason: "visual record 없음" };
  }

  if (record.originType === "institutional") {
    const missing: string[] = [];
    if (!record.institution) missing.push("institution");
    if (!record.sourcePage) missing.push("sourcePage");
    if (!record.license) missing.push("license");
    if (!record.creditLine) missing.push("creditLine");
    if (record.publicDomain !== true && !record.license) missing.push("publicDomain/license");
    if (!record.dateVerified) missing.push("dateVerified");
    if (missing.length > 0) {
      return {
        ok: false,
        reason: `기관 이미지 권리 정보 누락: ${missing.join(", ")}`,
      };
    }
    return { ok: true };
  }

  // llmGenerated (§2.7)
  const missingLlm: string[] = [];
  if (!record.generationProvider) missingLlm.push("generationProvider");
  if (!record.model) missingLlm.push("model");
  if (!record.generatedAt) missingLlm.push("generatedAt");
  if (!record.referenceSources || record.referenceSources.length === 0) missingLlm.push("referenceSources");
  const provenanceIncomplete = missingLlm.length > 0;

  if (provenanceIncomplete) {
    return {
      ok: false,
      reason: `LLM 생성 이미지 provenance 누락: ${missingLlm.join(", ")}`,
    };
  }

  const reviewed = record.humanReviewed === true && record.accuracyStatus !== "draft";
  if (reviewed) {
    return { ok: true };
  }
  if (options?.preview) {
    return {
      ok: true,
      badge: "검수 전 설명 이미지 · AI-generated explanatory visual",
    };
  }
  return {
    ok: false,
    reason: "human review 미완료 — production에서는 텍스트 설명으로 대체됩니다",
  };
}
