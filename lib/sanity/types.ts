import type { PortableTextBlock } from "next-sanity";
import type {
  DomainValue,
  InteractiveRegistryKey,
  NodeCard,
  ProcessStepProjection,
  RecommendedPathItemProjection,
  RelationTargetProjection,
  RichSection,
  SourceProjection,
  StaticDiagramProjection,
  VisualRecordProjection,
} from "@/lib/pageTypes";

export type {
  DomainValue,
  NodeCard,
  SourceProjection,
  ImageRightsProjection,
  LlmProvenanceProjection,
  VisualRecordProjection,
  StaticDiagramProjection,
  RelationTargetProjection,
  RichSection,
  ProcessStepProjection,
  RecommendedPathItemProjection,
} from "@/lib/pageTypes";

/** §3.3 각 Page Query의 반환 shape 계약 */

export interface EntryPageData {
  _id: string;
  _type: "entry";
  title: string;
  introQuestion: string;
  simpleExplanation: string;
  shortDescription?: string;
  domain: DomainValue;
  heroImage?: { url?: string | null; alt: string } | null;
  optionalDiagram?: StaticDiagramProjection | null;
  connections?: RelationTargetProjection[];
  recommendedPath?: RecommendedPathItemProjection[];
  relatedEntries?: NodeCard[];
  sources?: SourceProjection[];
}

export interface ScienceConceptCard extends NodeCard {
  oneSentence?: string;
}

export interface TechniqueInteractiveDiagram {
  interactiveKey: InteractiveRegistryKey;
  title: string;
  intro?: string;
  fallbackExplanation: string;
  fallbackDiagram?: StaticDiagramProjection | null;
}

export interface TechniquePageData {
  _id: string;
  _type: "technique";
  title: string;
  family: string;
  tenSecondExplanation: string;
  shortDescription?: string;
  domain: DomainValue;
  process?: ProcessStepProjection[];
  whyItAppeared?: RichSection;
  historicalContext?: RichSection;
  scienceConcepts?: ScienceConceptCard[];
  representativeArtwork?: NodeCard | null;
  sideTracks?: RelationTargetProjection[];
  staticDiagrams?: StaticDiagramProjection[];
  interactiveDiagram?: TechniqueInteractiveDiagram | null;
  sources?: SourceProjection[];
}

export interface ArtworkPageData {
  _id: string;
  _type: "artwork";
  title: string;
  year?: number;
  thirtySecondExplanation: string;
  shortDescription?: string;
  domain: DomainValue;
  artist?: { name: string; slug?: string } | null;
  techniqueCard?: NodeCard | null;
  heroImage?: {
    url?: string | null;
    alt: string;
    visualRecord?: VisualRecordProjection | null;
  } | null;
  materials?: { name: string; simpleDescription?: string; slug?: string }[];
  scienceConcepts?: NodeCard[];
  howItWasMade?: RichSection;
  historicalContext?: RichSection;
  whyItMatters?: RichSection;
  unexpectedConnections?: RelationTargetProjection[];
  sources?: SourceProjection[];
}

export interface StoryPageData {
  _id: string;
  _type: "story";
  question: string;
  shortAnswer: string;
  storyBody?: PortableTextBlock[];
  shortDescription?: string;
  domain: DomainValue;
  evidence?: RichSection;
  whatChanged?: RichSection;
  connections?: RelationTargetProjection[];
  furtherReading?: SourceProjection[];
  sources?: SourceProjection[];
}

export interface RelatedTermCard {
  _id: string;
  _type: "term";
  term: string;
  slug: string;
  simpleDefinition?: string;
  shortDescription?: string;
  domain: DomainValue;
}

export interface TermPageData {
  _id: string;
  _type: "term";
  term: string;
  originalLanguage?: string;
  pronunciation?: string;
  literalMeaning?: string;
  simpleDefinition: string;
  contextDefinition?: RichSection;
  etymology?: RichSection;
  shortDescription?: string;
  domain: DomainValue;
  relatedTerms?: RelatedTermCard[];
  sources?: SourceProjection[];
}

export interface SciencePageData {
  _id: string;
  _type: "scienceConcept";
  title: string;
  oneSentence: string;
  standardExplanation?: PortableTextBlock[];
  deepExplanation?: PortableTextBlock[];
  shortDescription?: string;
  domain: DomainValue;
  relatedMaterials?: { name: string; slug?: string; simpleDescription?: string }[];
  relatedTechniques?: NodeCard[];
  staticDiagrams?: StaticDiagramProjection[];
  sources?: SourceProjection[];
}

export interface BridgeTimelineItemProjection {
  periodLabel: string;
  title: string;
  description: string;
  markerType: "historical" | "conceptual";
}

export interface BridgePageData {
  _id: string;
  _type: "bridge";
  title: string;
  introQuestion: string;
  shortDescription?: string;
  domain: DomainValue;
  timeline?: BridgeTimelineItemProjection[];
  commonProblem?: RichSection;
  comparisonTable?: { aspect: string; printing: string; patterning: string }[];
  keyDifferences?: { difference: string; explanation: string }[];
  relatedNodes?: RelationTargetProjection[];
  closingQuestion?: string;
  sources?: SourceProjection[];
}

/** §3.1 Metadata Projection */
export interface MetadataProjection {
  title: string;
  description?: string;
  ogImage?: string | null;
  canonicalPath: string;
}
