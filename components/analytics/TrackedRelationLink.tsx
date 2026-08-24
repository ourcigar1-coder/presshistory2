"use client";

import Link from "next/link";
import { capture } from "@/lib/analytics/exploration";

/**
 * §5.1 related_content_click
 * Related 카드 클릭 시 relation 정보를 실어 발행한다.
 */
export function TrackedRelationLink({
  href,
  className,
  nodeId,
  targetNodeId,
  relationType,
  relationNature,
  evidenceLevel,
  children,
}: {
  href: string;
  className?: string;
  nodeId: string;
  targetNodeId: string;
  relationType: string;
  relationNature: string;
  evidenceLevel?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        capture("related_content_click", {
          node_id: nodeId,
          target_node_id: targetNodeId,
          relation_type: relationType,
          relation_nature: relationNature,
          evidence_level: evidenceLevel,
        })
      }
    >
      {children}
    </Link>
  );
}
