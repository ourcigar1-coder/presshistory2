"use client";

import { useEffect, useRef } from "react";
import { trackNodeView } from "@/lib/analytics/exploration";
import type { DomainValue } from "@/lib/domain";

/**
 * §5.1 knowledge_node_view — 고유 Knowledge Node가 의미 있게 렌더링될 때 1회 발행.
 * Strict mode/재렌더 중복 방지.
 */
export function NodeViewTracker({
  nodeId,
  nodeType,
  domain,
  slug,
  entryOrigin,
}: {
  nodeId: string;
  nodeType: string;
  domain: DomainValue | string;
  slug: string;
  entryOrigin?: string;
}) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    trackNodeView({ nodeId, nodeType, domain, slug, entryOrigin });
  }, [nodeId, nodeType, domain, slug, entryOrigin]);

  return null;
}

/** §5.1 bridge_enter / bridge_complete */
export function BridgeTracker({ nodeId }: { nodeId: string }) {
  const enterFired = useRef(false);
  const completeFired = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (enterFired.current) return;
    enterFired.current = true;
    import("@/lib/analytics/exploration").then(({ capture }) =>
      capture("bridge_enter", { node_id: nodeId }),
    );
  }, [nodeId]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || completeFired.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          completeFired.current = true;
          import("@/lib/analytics/exploration").then(({ capture }) =>
            capture("bridge_complete", { node_id: nodeId }),
          );
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [nodeId]);

  return <div ref={sentinelRef} aria-hidden className="h-px" />;
}
