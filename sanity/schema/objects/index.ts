import { seoObject } from "./status";
import { staticDiagram } from "./staticDiagram";
import { interactiveDiagram } from "./interactiveDiagram";
import { processStep } from "./processStep";
import { richTextSection } from "./richTextSection";
import { recommendedPathItem } from "./recommendedPathItem";

export const schemaTypes = [
  seoObject,
  staticDiagram,
  interactiveDiagram,
  processStep,
  richTextSection,
  recommendedPathItem,
];

export {
  DOMAIN_LABELS,
  DOMAIN_VALUES,
  type DomainValue,
} from "@/lib/domain";
export {
  statusField,
  STATUS_LABELS,
  STATUS_VALUES,
  type StatusValue,
} from "./status";
export { INTERACTIVE_KEYS, INTERACTIVE_LABELS, type InteractiveKey } from "./interactiveDiagram";
