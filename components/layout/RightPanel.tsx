import { SideTrackLink } from "@/components/sidetrack/SideTrackOverlay";
import type { RelationTargetProjection } from "@/lib/pageTypes";

/** 본문 하단 — 모바일용 아주 작은 짤막지식 칩 */
export function SideTrackChips({
  relations,
}: {
  relations: RelationTargetProjection[];
}) {
  if (!relations || relations.length === 0) return null;
  return (
    <section aria-label="짤막지식" className="mt-10 border-t border-stone-line pt-5">
      <p className="text-xs font-medium tracking-wide text-ink-soft">짤막지식</p>
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

/** 우측 패널 — 짤막지식. 이미지·명화 포함, 데스크톱 전용. */
export function RightPanelChips({
  relations,
}: {
  relations: RelationTargetProjection[];
}) {
  if (!relations || relations.length === 0) return null;
  return (
    <section aria-label="짤막지식" className="space-y-3">
      <h2 className="text-xs font-semibold tracking-wide text-ink-soft">짤막지식</h2>
      <ul className="space-y-3">
        {relations.map((r) => (
          <li key={r.target._id} className="overflow-hidden rounded-xl border border-stone-line bg-white">
            {r.target.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={r.target.thumbnail} alt="" className="h-28 w-full object-cover" loading="lazy" />
            ) : null}
            <div className="p-3">
              <p className="text-xs font-semibold leading-snug">{r.label}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-soft">{r.teaser}</p>
              <SideTrackLink
                targetSlug={r.target.slug!}
                className="mt-2 inline-flex rounded-full bg-ink px-3 py-1 text-xs font-medium text-white hover:bg-ink/90"
              >
                보기
              </SideTrackLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
