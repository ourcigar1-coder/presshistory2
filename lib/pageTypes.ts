import type { PortableTextBlock } from "next-sanity";
import type { DomainValue } from "./domain";

export type { DomainValue };

/** §2.1 공개 Page document 타입 목록 (클라이언트 공용) */
export const PAGE_TYPE_NAMES = [
  "entry",
  "technique",
  "artwork",
  "story",
  "bridge",
  "term",
  "scienceConcept",
] as const;

export type PageTypeName = (typeof PAGE_TYPE_NAMES)[number];

export const PAGE_TYPE_LABELS: Record<PageTypeName, string> = {
  entry: "Entry",
  technique: "Technique",
  artwork: "Artwork",
  story: "Story",
  bridge: "Bridge",
  term: "Term",
  scienceConcept: "Science Concept",
};

/** 페이지 타입별 URL prefix */
export const PAGE_TYPE_ROUTES: Record<PageTypeName, string> = {
  entry: "/entries",
  technique: "/techniques",
  artwork: "/artworks",
  story: "/stories",
  bridge: "/bridge",
  term: "/terms",
  scienceConcept: "/science",
};

/**
 * §3.2 CARD_PROJECTION
 */
export interface NodeCard {
  _id: string;
  _type: PageTypeName | "material";
  /** coalesce(title, question, term) */
  title?: string;
  slug?: string;
  shortDescription?: string;
  domain: DomainValue;
  thumbnail?: string | null;
}

/** §3.2 SOURCE_PROJECTION */
export interface SourceProjection {
  title: string;
  sourceType: string;
  institution?: string;
  author?: string;
  year?: number;
  url: string;
  accessedAt: string;
  notes?: string;
}

/** 기관 이미지 권리 (§3.2 IMAGE_RIGHTS_PROJECTION) */
export interface ImageRightsProjection {
  originType: "institutional" | "llmGenerated";
  institution?: string;
  sourcePage?: string;
  sourceImage?: string;
  iiifManifest?: string;
  license?: string;
  publicDomain?: boolean;
  creditLine?: string;
  accessionNumber?: string;
  dateVerified?: string;
}

/** LLM 생성 이미지 provenance (§2.7) */
export interface LlmProvenanceProjection {
  generationProvider?: string;
  model?: string;
  generatedAt?: string;
  referenceSources?: { title: string; url: string }[];
  humanReviewed?: boolean;
  accuracyStatus?: "draft" | "reviewed" | "approved";
  explanatoryOnly?: boolean;
  notes?: string;
}

export type VisualRecordProjection = ImageRightsProjection & LlmProvenanceProjection;

/** §2.6 staticDiagram projection */
export interface StaticDiagramProjection {
  title: string;
  alt: string;
  caption?: string;
  longDescription?: string;
  url: string;
  visualRecord?: VisualRecordProjection;
}

/** §3.2 RELATION_TARGET_PROJECTION */
export interface RelationTargetProjection {
  relationType: string;
  relationNature: "historical" | "conceptual";
  evidenceLevel: "documented" | "probable" | "illustrative";
  label: string;
  teaser: string;
  editorialPriority?: number;
  sources?: SourceProjection[];
  target: NodeCard;
}

/** rich text section */
export interface RichSection {
  heading: string;
  body?: PortableTextBlock[];
}

export interface ProcessStepProjection {
  title: string;
  description: string;
  image?: StaticDiagramProjection | null;
}

export interface RecommendedPathItemProjection {
  reason: string;
  target: NodeCard;
}

/** §4.5 interactive registry key */
export const INTERACTIVE_REGISTRY = ["lithography-water-ink", "registration-alignment"] as const;

export type InteractiveRegistryKey = (typeof INTERACTIVE_REGISTRY)[number];

export function isInteractiveKey(key: string): key is InteractiveRegistryKey {
  return (INTERACTIVE_REGISTRY as readonly string[]).includes(key);
}
