import { SideTrackLink } from "@/components/sidetrack/SideTrackOverlay";
import { nodeHref } from "@/components/common/RelatedContent";
import type { RelationTargetProjection } from "@/lib/pageTypes";
import Link from "next/link";

/** 아주 작은 옆길 칩 — 본문 흐름을 끊지 않음 */
export function SideTrackChips({
  relations,
  sourceNodeId,
}: {
  relations: RelationTargetProjection[];
  sourceNodeId?: string;
}) {
  if (!relations || relations.length === 0) return null;
  return (
    <section aria-label="옆길" className="mt-10 border-t border-stone-line pt-5">
      <p className="text-xs font-medium tracking-wide text-ink-soft">옆길</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {relations.map((r) => (
          <li key={r.target._id}>
            <SideTrackLink
              targetSlug={r.target.slug!}
              className="inline-flex max-w-[260px] truncate rounded-full border border-stone-line bg-white px-3 py-1 text-xs hover:border-accent hover:text-accent"
            >
              {r.label}
            </SideTrackLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

// 이전 RecommendedPath / RelatedPanel은 삭제됨 — PRD의 '다음에 무엇이 궁금해져야 할까?' 섹션 제거 요청 반영
