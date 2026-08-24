"use client";

import posthog from "posthog-js";
import type { DomainValue } from "@/lib/domain";

/**
 * §5 Exploration Depth & Domain Transition
 * 브라우저 storage는 UX 복원 보조용이며 장기 분석의 원본이 아니다 (§5.3).
 * 이벤트 스트림(PostHog)이 Source of Truth다.
 */

const DEPTH_KEY = "exploration:visited-nodes";
const LAST_KEY = "exploration:last-node";

type SessionNode = { id: string; domain: string };

function readVisited(): SessionNode[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(DEPTH_KEY);
    return raw ? (JSON.parse(raw) as SessionNode[]) : [];
  } catch {
    return [];
  }
}

function writeVisited(nodes: SessionNode[]) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(DEPTH_KEY, JSON.stringify(nodes));
  } catch {
    // storage full/unavailable: 분석에는 PostHog가 원본이므로 무시한다
  }
}

function readLast(): SessionNode | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(LAST_KEY);
    return raw ? (JSON.parse(raw) as SessionNode) : null;
  } catch {
    return null;
  }
}

function writeLast(node: SessionNode) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(LAST_KEY, JSON.stringify(node));
  } catch {
    // ignore
  }
}

/** 세션의 Exploration Depth: distinct node_id 수 (§5.2) */
export function getExplorationDepth(): number {
  return new Set(readVisited().map((n) => n.id)).size;
}

export function getExploredNodes(): SessionNode[] {
  const seen = new Set<string>();
  const unique: SessionNode[] = [];
  for (const node of readVisited()) {
    if (!seen.has(node.id)) {
      seen.add(node.id);
      unique.push(node);
    }
  }
  return unique;
}

export function capture(
  event: string,
  properties?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  posthog.capture(event, properties);
}

/**
 * knowledge_node_view 발행 + depth/domain transition 갱신.
 * - 동일 노드 재방문은 depth에 1회로 계산
 * - previous_domain != domain일 때만 domain_transition 발행
 */
export function trackNodeView(params: {
  nodeId: string;
  nodeType: string;
  domain: DomainValue | string;
  slug: string;
  entryOrigin?: string;
}): void {
  const { nodeId, nodeType, domain, slug, entryOrigin } = params;

  const visited = readVisited();
  const isFirstVisitToday = !visited.some((n) => n.id === nodeId);

  capture("knowledge_node_view", {
    node_id: nodeId,
    node_type: nodeType,
    domain,
    slug,
    entry_origin: entryOrigin,
    is_new_node_in_session: isFirstVisitToday,
  });

  if (isFirstVisitToday) {
    writeVisited([...visited, { id: nodeId, domain }]);
  }

  const last = readLast();
  if (last && last.domain !== domain && last.id !== nodeId) {
    capture("domain_transition", {
      previous_node_id: last.id,
      previous_domain: last.domain,
      node_id: nodeId,
      domain,
    });
  }
  writeLast({ id: nodeId, domain });
}

export function trackEntryPathStart(entryOrigin: string, pathType: "recommended" | "direct" | "search"): void {
  capture("entry_path_start", { entry_origin: entryOrigin, path_type: pathType });
}
