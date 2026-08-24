"use client";

import { useEffect, useState } from "react";
import { getExplorationDepth } from "@/lib/analytics/exploration";

/** UI준비.txt · Exploration Depth Counter — 내가 오늘 탐험한 지식 노드 개수 */
export function DepthCounter() {
  const [depth, setDepth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setDepth(getExplorationDepth());
    update();
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);

  return (
    <p className="mt-4 rounded-lg bg-stone-line/50 px-3 py-2 text-xs text-ink-soft">
      {depth === null || depth === 0
        ? "탐험을 시작해 보세요"
        : `오늘 탐험한 지식 노드 ${depth}개`}
    </p>
  );
}
