import { defineField } from "sanity";
import { DOMAIN_LABELS, DOMAIN_VALUES } from "@/lib/domain";

/** §2.2 공통 필드 계약 - domain */
export { DOMAIN_LABELS, DOMAIN_VALUES };
export type { DomainValue } from "@/lib/domain";

export const domainField = defineField({
  name: "domain",
  title: "Domain",
  description: "노드가 속한 지식 영역. Domain Transition 분석(§5.1)에 사용된다.",
  type: "string",
  options: {
    list: DOMAIN_VALUES.map((value) => ({ value, title: DOMAIN_LABELS[value] })),
  },
  validation: (rule) => rule.required(),
});
