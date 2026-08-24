"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { RelationTargetProjection } from "@/lib/pageTypes";
import { nodeHref } from "@/components/common/RelatedContent";
import { capture } from "@/lib/analytics/exploration";
import Link from "next/link";

/**
 * §4.3 SideTrackOverlay / §4.4 Side-track Routing
 *
 * - Simple Side-track: 현재 URL + ?sideTrack={key}. 닫으면 같은 스크롤 위치로 복귀. 공유 가능.
 * - Close policy: overlay로 열렸으면 back. 직접 진입(새로고침/공유 링크)이면 parent route로 replace.
 * - §4.6 키보드 접근: Escape 닫기, focus trap, trigger로 focus 복원.
 */

const OPENED_FLAG = "sidetrack:opened-via-push";

function wasOpenedViaPush(): boolean {
  try {
    return window.sessionStorage.getItem(OPENED_FLAG) === "1";
  } catch {
    return false;
  }
}

export function SideTrackOverlay({
  sideTracks,
  nodeId,
}: {
  sideTracks: RelationTargetProjection[];
  nodeId: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeKey = searchParams.get("sideTrack");

  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const active =
    activeKey != null
      ? sideTracks.find((st) => st.target.slug === activeKey)
      : undefined;

  const close = useCallback(() => {
    if (wasOpenedViaPush()) {
      // push로 열었으므로 back으로 닫는다 → 스크롤 위치 보존
      try {
        window.sessionStorage.removeItem(OPENED_FLAG);
      } catch {}
      router.back();
    } else {
      // 직접 URL 진입: parent route로 replace (외부로 튕기지 않음, §7.3-8)
      router.replace(pathname ?? "/", { scroll: false });
      restoreFocusRef.current?.focus?.();
    }
  }, [pathname, router]);

  useEffect(() => {
    if (!activeKey && wasOpenedViaPush()) {
      // 브라우저 back 등으로 이미 닫힌 경우 플래그 정리
      try {
        window.sessionStorage.removeItem(OPENED_FLAG);
      } catch {}
    }
  }, [activeKey]);

  // focus trap + Escape + focus 복원 (§4.6)
  useEffect(() => {
    if (!active || !dialogRef.current) return;
    const dialog = dialogRef.current;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const first = dialog.querySelector<HTMLElement>("[data-autofocus]") ?? dialog;
    first.focus({ preventScroll: true });

    function onKeydown(event: KeyboardEvent) {
      if (!dialogRef.current) return;
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "Tab") {
        const focusables = dialogRef.current!.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === firstEl) {
          event.preventDefault();
          lastEl.focus();
        } else if (!event.shiftKey && document.activeElement === lastEl) {
          event.preventDefault();
          firstEl.focus();
        }
      }
    }
    dialog.addEventListener("keydown", onKeydown);
    return () => {
      dialog.removeEventListener("keydown", onKeydown);
      restoreFocusRef.current?.focus?.();
    };
  }, [active, close]);

  // side_track_open 이벤트 (§5.1) — 표시당 1회
  const reportedKeyRef = useRef<string | null>(null);
  useEffect(() => {
    if (!active || !activeKey) return;
    const reportKey = `${nodeId}:${activeKey}`;
    if (reportedKeyRef.current === reportKey) return;
    reportedKeyRef.current = reportKey;
    capture("side_track_open", {
      node_id: nodeId,
      target_node_id: active.target._id,
      key: activeKey,
      relation_type: active.relationType,
      relation_nature: active.relationNature,
    });
  }, [active, activeKey, nodeId]);

  if (!activeKey) return null;

  return (
    <div className="fixed inset-0 z-40" role="presentation">
      {/* backdrop */}
      <button aria-label="짤막지식 닫기" className="absolute inset-0 bg-black/30" onClick={close} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className="absolute inset-x-0 bottom-0 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-paper p-6 shadow-xl outline-none md:inset-y-0 md:right-0 md:left-auto md:bottom-auto md:h-full md:max-h-none md:w-[360px] md:rounded-none md:rounded-l-2xl lg:w-[380px]"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">짤막지식</p>
          <button
            onClick={close}
            data-autofocus
            className="-mr-2 rounded-full p-2 text-ink-soft hover:bg-stone-line/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label="닫기"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {!active ? (
          <p className="mt-6 text-sm text-ink-soft">
            이 페이지에 등록되지 않은 side-track key입니다:{" "}
            <code className="rounded bg-stone-line px-1">{activeKey}</code>
          </p>
        ) : (
          <>
            <span className="mt-4 inline-block rounded-full border border-historical/40 bg-historical/10 px-2 py-0.5 text-[11px] font-medium text-historical">
              {active.relationNature === "conceptual" ? "개념적 유사" : "역사적 연결"} ·{" "}
              {active.evidenceLevel}
            </span>
            <h2 className="mt-2 text-lg font-bold leading-snug">{active.label}</h2>
            <p className="mt-3 text-sm leading-relaxed">{active.teaser}</p>

            <div className="mt-5 rounded-xl border border-stone-line bg-white/80 p-4">
              <h3 className="text-base font-semibold">{active.target.title}</h3>
              {active.target.shortDescription ? (
                <p className="mt-1 text-sm text-ink-soft">{active.target.shortDescription}</p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={nodeHref(active.target)}
                  className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper hover:bg-ink/90"
                >
                  자세히 보기
                </Link>
                <button
                  onClick={close}
                  className="rounded-full border border-stone-line px-4 py-1.5 text-sm font-medium hover:border-accent hover:text-accent"
                >
                  계속 읽기 (닫기)
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/** Side-track 트리거 링크. push 탐색으로 열림을 기록해 close policy를 판단한다. */
export function SideTrackLink({
  targetSlug,
  children,
  className,
}: {
  targetSlug: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}?sideTrack=${targetSlug}`}
      scroll={false}
      className={
        className ??
        "font-medium text-accent underline decoration-dotted underline-offset-4 hover:underline"
      }
      onClick={() => {
        try {
          window.sessionStorage.setItem(OPENED_FLAG, "1");
        } catch {}
      }}
    >
      {children}
    </Link>
  );
}
