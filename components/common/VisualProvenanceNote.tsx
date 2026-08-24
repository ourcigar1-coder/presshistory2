import type { VisualRecordProjection } from "@/lib/pageTypes";

/**
 * §6.7 LLM Generated Visual Provenance 표시
 * 생성 도구/모델, reference sources, 검수 상태를 명시한다.
 */
export function VisualProvenanceNote({
  record,
}: {
  record?: VisualRecordProjection;
}) {
  if (!record || record.originType !== "llmGenerated") {
    if (record?.originType === "institutional") {
      return (
        <p className="mt-1 text-xs text-ink-soft">
          {[
            record.institution,
            record.accessionNumber ? `No. ${record.accessionNumber}` : null,
            record.license,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
      );
    }
    return null;
  }

  const status =
    record.accuracyStatus === "approved"
      ? "승인됨"
      : record.accuracyStatus === "reviewed"
        ? "검수 완료"
        : "검수 전";

  return (
    <div className="mt-2 rounded-lg bg-stone-line/40 p-3 text-xs leading-relaxed text-ink-soft">
      <span className="font-semibold text-ink">AI-generated explanatory visual</span>
      {" — "}
      {record.generationProvider} / {record.model} · 생성 {record.generatedAt?.slice(0, 10)} ·{" "}
      {status}
      {record.notes ? ` · 단순화: ${record.notes}` : null}
      {record.referenceSources && record.referenceSources.length > 0 ? (
        <>
          {" · 사실 검증: "}
          {record.referenceSources.map((s, i) => (
            <span key={i}>
              {i > 0 ? ", " : ""}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                {s.title}
              </a>
            </span>
          ))}
        </>
      ) : null}
    </div>
  );
}
