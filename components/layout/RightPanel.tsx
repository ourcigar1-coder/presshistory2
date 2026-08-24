import Link from "next/link";
import type { RecommendedPathItemProjection, RelationTargetProjection } from "@/lib/pageTypes";
import { nodeHref } from "@/components/common/RelatedContent";
import { DOMAIN_LABELS } from "@/lib/domain";
import { PAGE_TYPE_LABELS, type PageTypeName } from "@/lib/pageTypes";
import { SideTrackLink } from "@/components/sidetrack/SideTrackOverlay";

/**
 * §4.3 RecommendedPath — "다음에 무엇을 볼까?" 최대 3개.
 * §0.2 각 페이지 마지막에는 '다음에 무엇이 궁금해져야 하는가'를 명시하고 연결한다.
 */
export function RecommendedPath({
  items,
  closingQuestion,
}: {
  items: RecommendedPathItemProjection[];
  closingQuestion?: string;
}) {
  if (items.length === 0 && !closingQuestion) return null;

  return (
    <section className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-6">
      <h2 className="text-lg font-bold">다음에 무엇이 궁금해져야 할까?</h2>
      {closingQuestion ? (
        <p className="mt-2 text-base leading-relaxed text-ink/90">{closingQuestion}</p>
      ) : null}
      <ul className="mt-4 space-y-3">
        {items.slice(0, 3).map((item) => {
          const target = item.target;
          return (
            <li key={target._id}>
              <Link
                href={nodeHref(target)}
                className="group block rounded-xl border border-stone-line bg-white/80 p-4 transition-colors hover:border-accent/60"
              >
                <span className="text-[11px] uppercase tracking-wide text-ink-soft">
                  {PAGE_TYPE_LABELS[target._type as PageTypeName] ?? target._type} ·{" "}
                  {DOMAIN_LABELS[target.domain]}
                </span>
                <h3 className="mt-1 font-semibold group-hover:text-accent">{target.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.reason}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** 우측 탐험 패널의 Related 목록 */
export function RelatedPanel({
  relations,
}: {
  relations: RelationTargetProjection[];
}) {
  if (relations.length === 0) return null;
  return (
    <section aria-label="이어서 보기" className="space-y-3">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
        옆길 · 이어서
      </h2>
      <ul className="space-y-3">
        {relations.map((relation) => {
          const target = relation.target;
          const slug = target.slug;
          return (
            <li key={`${relation.relationType}-${target._id}`} className="rounded-xl border border-stone-line bg-white/70 p-4">
              <span className="inline-block rounded-full border border-historical/40 bg-historical/10 px-2 py-0.5 text-[10px] font-medium text-historical">
                {relation.relationNature === "conceptual" ? "개념적 유사" : "역사적"}
              </span>
              <h3 className="mt-1.5 text-sm font-semibold leading-snug">{relation.label}</h3>
              <p className="mt-1 text-sm text-ink-soft">{relation.teaser}</p>
              <div className="mt-2 flex gap-3 text-sm">
                {slug ? (
                  <SideTrackLink targetSlug={slug} className="font-medium text-accent hover:underline">
                    카드로 보기
                  </SideTrackLink>
                ) : null}
                <Link href={nodeHref(target)} className="font-medium text-ink underline-offset-4 hover:underline">
                  전체 읽기
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
