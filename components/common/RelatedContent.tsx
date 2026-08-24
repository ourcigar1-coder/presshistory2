import type { NodeCard, RelationTargetProjection } from "@/lib/pageTypes";
import { PAGE_TYPE_LABELS, PAGE_TYPE_ROUTES, type PageTypeName } from "@/lib/pageTypes";
import { DOMAIN_LABELS } from "@/lib/domain";
import Link from "next/link";
import { SideTrackLink } from "@/components/sidetrack/SideTrackOverlay";
import { TrackedRelationLink } from "@/components/analytics/TrackedRelationLink";

/** 노드 카드 URL */
export function nodeHref(card: Pick<NodeCard, "_type" | "slug">): string {
  const route = PAGE_TYPE_ROUTES[card._type as PageTypeName];
  if (!route || !card.slug) return "/";
  return `${route}/${card.slug}`;
}

function RelationBadge({ nature }: { nature: "historical" | "conceptual" }) {
  if (nature === "conceptual") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-conceptual/40 bg-conceptual/10 px-2 py-0.5 text-[11px] font-medium text-conceptual">
        개념적 유사
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-historical/40 bg-historical/10 px-2 py-0.5 text-[11px] font-medium text-historical">
      역사적 연결
    </span>
  );
}

/**
 * 짤막지식 — 통일된 용어. 모든 연결은 '짤막지식'로만 표현한다.
 * 큰 카드는 쓰지 않고 칩 내부에서만 짤막지식 링크를 노출한다.
 */
export function RelatedContent({
  relation,
  onOpenSideTrack,
  sourceNodeId,
}: {
  relation: RelationTargetProjection;
  onOpenSideTrack?: boolean;
  sourceNodeId?: string;
}) {
  const target = relation.target;
  const href = nodeHref(target);

  return (
    <article className="group rounded-xl border border-stone-line bg-white/70 p-4 transition-colors hover:border-accent/50">
      <div className="flex items-center justify-between gap-2">
        <RelationBadge nature={relation.relationNature} />
        <span className="text-[11px] uppercase tracking-wide text-ink-soft">
          {DOMAIN_LABELS[target.domain]} ·{" "}
          {PAGE_TYPE_LABELS[target._type as PageTypeName] ?? target._type}
        </span>
      </div>
      <h3 className="mt-2 text-base font-semibold leading-snug">
        <TrackedRelationLink
          href={href}
          nodeId={sourceNodeId ?? "unknown"}
          targetNodeId={target._id}
          relationType={relation.relationType}
          relationNature={relation.relationNature}
          evidenceLevel={relation.evidenceLevel}
        >
          {target.title}
        </TrackedRelationLink>
      </h3>
      <p className="mt-1 text-sm text-ink-soft">
        <span className="font-medium text-ink">{relation.label}</span> — {relation.teaser}
      </p>
      <div className="mt-3 flex items-center gap-3 text-sm">
        {onOpenSideTrack && target.slug ? (
          <SideTrackLink
            targetSlug={target.slug}
            className="rounded-full border border-stone-line px-3 py-1 text-xs font-medium hover:border-accent hover:text-accent"
          >
            짤막지식
          </SideTrackLink>
        ) : null}
        <TrackedRelationLink
          href={href}
          nodeId={sourceNodeId ?? "unknown"}
          targetNodeId={target._id}
          relationType={relation.relationType}
          relationNature={relation.relationNature}
          evidenceLevel={relation.evidenceLevel}
          className="text-xs font-medium text-accent underline-offset-4 hover:underline"
        >
          자세히 보기 →
        </TrackedRelationLink>
      </div>
    </article>
  );
}

export function CardTile({ card }: { card: NodeCard }) {
  const href = nodeHref(card);
  return (
    <Link
      href={href}
      className="flex flex-col overflow-hidden rounded-xl border border-stone-line bg-white/70 transition-colors hover:border-accent/60"
    >
      {card.thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={card.thumbnail} alt="" className="h-36 w-full object-cover" loading="lazy" />
      ) : null}
      <div className="p-4">
        <span className="text-[11px] uppercase tracking-wide text-ink-soft">
          {PAGE_TYPE_LABELS[card._type as PageTypeName] ?? card._type} ·{" "}
          {DOMAIN_LABELS[card.domain]}
        </span>
        <h3 className="mt-1 text-base font-semibold leading-snug">{card.title}</h3>
        {card.shortDescription ? (
          <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{card.shortDescription}</p>
        ) : null}
      </div>
    </Link>
  );
}
