import type { DomainValue } from "@/lib/domain";

/**
 * §5.1 Core Events 계약.
 * 이벤트 이름과 필수 properties를 여기서만 정의한다.
 */
export type KnowledgeNodeViewProps = {
  node_id: string;
  node_type: string;
  domain: DomainValue | string;
  slug: string;
  entry_origin?: string;
};

export type SideTrackOpenProps = {
  node_id: string;
  target_node_id?: string;
  key?: string;
  relation_type?: string;
  relation_nature?: string;
};

export type RelatedContentClickProps = {
  node_id: string;
  target_node_id: string;
  relation_type: string;
  relation_nature: string;
  evidence_level?: string;
};

export type EntryPathStartProps = {
  entry_origin: string;
  path_type: "recommended" | "direct" | "search";
};

export type DomainTransitionProps = {
  previous_node_id: string;
  previous_domain: string;
  node_id: string;
  domain: string;
};

export type BridgeEnterProps = { node_id: string; previous_node_id?: string };
export type BridgeCompleteProps = { node_id: string };
export type SearchPerformedProps = { query_length: number; result_count: number };
export type SearchResultClickProps = {
  result_type: string;
  result_slug: string;
  position: number;
};
