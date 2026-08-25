import Link from "next/link";
import { SLICE_CARDS, WOODCUT_CARDS, INTAGLIO_CARDS, SCREENPRINT_CARDS } from "@/lib/fixtures";
import { nodeHref } from "@/components/common/RelatedContent";
import { DepthCounter } from "./DepthCounter";

/**
 * §4.1 좌측 탐험 지도 (240~280px)
 * 현재 기법 지식 트리 + 진입 경로. 모바일에서는 숨겨지고 상단 compact nav로 대체.
 */
export function LeftSidebar({ currentSlug }: { currentSlug?: string }) {
  return (
    <nav aria-label="탐험 지도" className="hidden w-[260px] shrink-0 lg:block">
      <div className="sticky top-8 space-y-6">
        <Link href="/" className="block text-lg font-black tracking-tight hover:text-accent">
          복제의 문명
        </Link>

        <form action="/search" role="search" className="px-0.5">
          <label htmlFor="sidebar-search" className="sr-only">
            검색
          </label>
          <input
            id="sidebar-search"
            type="search"
            name="q"
            placeholder="궁금한 것을 검색"
            className="w-full rounded-full border border-stone-line bg-white px-4 py-1.5 text-sm outline-none placeholder:text-ink-soft/70 focus:border-accent"
          />
        </form>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            첫 번째 탐험 경로
          </h2>
          <ol className="mt-3 space-y-1">
            {SLICE_CARDS.map((card, i) => {
              const href = nodeHref(card);
              const isCurrent = card.slug === currentSlug;
              return (
                <li key={card._id}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      "flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm leading-snug " +
                      (isCurrent
                        ? "bg-accent/10 font-semibold text-accent"
                        : "text-ink/85 hover:bg-stone-line/50")
                    }
                  >
                    <span className={"mt-0.5 text-[11px] font-bold " + (isCurrent ? "text-accent" : "text-ink-soft")}>
                      {i + 1}
                    </span>
                    {card.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            두 번째 탐험 · 목판화
          </h2>
          <ol className="mt-3 space-y-1" start={SLICE_CARDS.length + 1}>
            {WOODCUT_CARDS.map((card, i) => {
              const href = nodeHref(card);
              const isCurrent = card.slug === currentSlug;
              return (
                <li key={card._id}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      "flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm leading-snug " +
                      (isCurrent
                        ? "bg-accent/10 font-semibold text-accent"
                        : "text-ink/85 hover:bg-stone-line/50")
                    }
                  >
                    <span className={"mt-0.5 text-[11px] font-bold " + (isCurrent ? "text-accent" : "text-ink-soft")}>
                      {SLICE_CARDS.length + i + 1}
                    </span>
                    {card.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            세 번째 탐험 · 동판화
          </h2>
          <ol className="mt-3 space-y-1" start={SLICE_CARDS.length + WOODCUT_CARDS.length + 1}>
            {INTAGLIO_CARDS.map((card, i) => {
              const href = nodeHref(card);
              const isCurrent = card.slug === currentSlug;
              return (
                <li key={card._id}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      "flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm leading-snug " +
                      (isCurrent
                        ? "bg-accent/10 font-semibold text-accent"
                        : "text-ink/85 hover:bg-stone-line/50")
                    }
                  >
                    <span className={"mt-0.5 text-[11px] font-bold " + (isCurrent ? "text-accent" : "text-ink-soft")}>
                      {SLICE_CARDS.length + WOODCUT_CARDS.length + i + 1}
                    </span>
                    {card.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            네 번째 탐험 · 스크린 인쇄
          </h2>
          <ol className="mt-3 space-y-1" start={SLICE_CARDS.length + WOODCUT_CARDS.length + INTAGLIO_CARDS.length + 1}>
            {SCREENPRINT_CARDS.map((card, i) => {
              const href = nodeHref(card);
              const isCurrent = card.slug === currentSlug;
              return (
                <li key={card._id}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      "flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm leading-snug " +
                      (isCurrent
                        ? "bg-accent/10 font-semibold text-accent"
                        : "text-ink/85 hover:bg-stone-line/50")
                    }
                  >
                    <span className={"mt-0.5 text-[11px] font-bold " + (isCurrent ? "text-accent" : "text-ink-soft")}>
                      {SLICE_CARDS.length + WOODCUT_CARDS.length + INTAGLIO_CARDS.length + i + 1}
                    </span>
                    {card.title}
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <a
          href="/compare"
          className="block rounded-xl border border-accent/30 bg-accent/5 px-3 py-2 text-sm font-semibold text-accent hover:bg-accent/10"
        >
          네 가지 기법 비교 →
        </a>

        <DepthCounter />
      </div>
    </nav>
  );
}

/** <768px 상단 compact navigation (§4.2) */
export function CompactNav() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stone-line bg-paper/90 px-4 py-3 backdrop-blur lg:hidden">
      <Link href="/" className="text-base font-black tracking-tight">
        복제의 문명
      </Link>
      <Link
        href="/search"
        className="rounded-full border border-stone-line bg-white px-3 py-1 text-sm"
      >
        검색
      </Link>
    </header>
  );
}
