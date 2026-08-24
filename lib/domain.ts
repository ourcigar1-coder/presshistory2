/** §2.2 공통 필드 계약 - domain 값. 클라이언트/스키마 공용. */
export const DOMAIN_VALUES = [
  "art",
  "technique",
  "science",
  "history",
  "society",
  "technology",
  "language",
  "material",
] as const;

export type DomainValue = (typeof DOMAIN_VALUES)[number];

export const DOMAIN_LABELS: Record<DomainValue, string> = {
  art: "예술",
  technique: "기술",
  science: "과학",
  history: "역사",
  society: "사회",
  technology: "산업·공학",
  language: "언어",
  material: "재료",
};

export function isDomainValue(value: string): value is DomainValue {
  return (DOMAIN_VALUES as readonly string[]).includes(value);
}
