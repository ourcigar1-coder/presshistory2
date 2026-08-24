import type { ReactNode } from "react";
import { CompactNav, LeftSidebar } from "./LeftSidebar";

/**
 * §4.1 Desktop 정보 구조
 * 좌측 탐험 지도 240~280px / 중앙 article 720~820px / 우측 탐험 패널 320~360px
 * Page max-width 1440px, gutter 24px. ≥1200px 3열 고정(좌우 sticky), 중앙만 스크롤.
 */
export function ExploreShell({
  currentSlug,
  sidebar,
  right,
  children,
}: {
  currentSlug?: string;
  sidebar?: ReactNode;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <CompactNav />
      <div className="mx-auto flex w-full max-w-[1440px] gap-6 px-6">
        {sidebar ?? <LeftSidebar currentSlug={currentSlug} />}

        <main className="min-w-0 flex-1 py-8">
          <article className="mx-auto w-full max-w-[780px]">{children}</article>
        </main>

        {right ? (
          <aside className="hidden w-[340px] shrink-0 xl:block" aria-label="탐험 패널">
            <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pb-8">{right}</div>
          </aside>
        ) : (
          <aside className="hidden w-[340px] shrink-0 xl:block" aria-hidden />
        )}
      </div>
    </>
  );
}

export { CompactNav };

/** 우측 패널 헤딩 공통 스타일 */
export function PanelHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{children}</h2>
  );
}
