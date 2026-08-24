"use client";

import { useEffect, useRef } from "react";
import { capture } from "@/lib/analytics/exploration";

/** §5.1 search_performed — 검색 실행 시 1회 */
export function SearchTracker({ query, resultCount }: { query: string; resultCount: number }) {
  const firedRef = useRef<string | null>(null);

  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) return;
    if (firedRef.current === q) return;
    firedRef.current = q;
    capture("search_performed", { query_length: q.length, result_count: resultCount });
  }, [query, resultCount]);

  return null;
}

/** §5.1 search_result_click */
export function trackSearchResultClick(
  resultType: string,
  resultSlug: string,
  position: number,
) {
  capture("search_result_click", { result_type: resultType, result_slug: resultSlug, position });
}
