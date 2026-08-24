import { defineField, defineType } from "sanity";
import { PAGE_TYPE_NAMES } from "../lib/pageTypes";

/** §2.5 Relation - 노드 사이의 관계. historical과 conceptual을 절대 섞지 않는다 (§0.2, §6.5). */
export const RELATION_TYPES = [
  "relatedTo",
  "madeWith",
  "usesMaterial",
  "explains",
  "appearsIn",
  "historicallyLedTo",
  "conceptuallySimilarTo",
  "influenced",
  "locatedIn",
] as const;

export type RelationType = (typeof RELATION_TYPES)[number];

export const RELATION_TYPE_LABELS: Record<RelationType, string> = {
  relatedTo: "관련됨 (relatedTo)",
  madeWith: "만들어짐 (madeWith)",
  usesMaterial: "재료를 사용 (usesMaterial)",
  explains: "설명함 (explains)",
  appearsIn: "등장함 (appearsIn)",
  historicallyLedTo: "역사적으로 이어짐 (historicallyLedTo)",
  conceptuallySimilarTo: "개념적으로 유사 (conceptuallySimilarTo)",
  influenced: "영향을 줌 (influenced)",
  locatedIn: "위치함 (locatedIn)",
};

export const relation = defineType({
  name: "relation",
  title: "Relation",
  type: "document",
  groups: [
    { name: "editorial", title: "Editorial", default: true },
    { name: "evidence", title: "Evidence" },
    { name: "sources", title: "Sources & Rights" },
  ],
  fields: [
    defineField({
      name: "source",
      title: "Source Node",
      type: "reference",
      group: "editorial",
      to: PAGE_TYPE_NAMES.map((type) => ({ type })),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "target",
      title: "Target Node",
      description: "동일 문서로의 self-link는 금지 (§2.5)",
      type: "reference",
      group: "editorial",
      to: PAGE_TYPE_NAMES.map((type) => ({ type })),
      validation: (rule) =>
        rule.required().custom(async (value, context) => {
          const sourceRef = context.document?.source as { _ref?: string } | undefined;
          const targetRef = value as { _ref?: string } | undefined;
          if (!sourceRef?._ref || !targetRef?._ref) return true;
          if (sourceRef._ref === targetRef._ref) {
            return "self-link 금지: source와 target이 동일한 문서입니다.";
          }
          return true;
        }),
    }),
    defineField({
      name: "relationType",
      title: "Relation Type",
      type: "string",
      group: "editorial",
      options: {
        list: RELATION_TYPES.map((value) => ({ value, title: RELATION_TYPE_LABELS[value] })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "relationNature",
      title: "Relation Nature",
      description:
        "historicallyLedTo → 반드시 historical / conceptuallySimilarTo → 반드시 conceptual (§2.5 Validation)",
      type: "string",
      group: "editorial",
      options: {
        list: [
          { value: "historical", title: "Historical - 실제 역사적 인과/계보" },
          { value: "conceptual", title: "Conceptual - 개념적 유사성" },
        ],
      },
      validation: (rule) =>
        rule.required().custom((nature, context) => {
          const relationType = context.document?.relationType;
          if (relationType === "historicallyLedTo" && nature !== "historical") {
            return "historicallyLedTo 관계는 relationNature=historical만 허용됩니다.";
          }
          if (relationType === "conceptuallySimilarTo" && nature !== "conceptual") {
            return "conceptuallySimilarTo 관계는 relationNature=conceptual만 허용됩니다.";
          }
          return true;
        }),
    }),
    defineField({
      name: "label",
      title: "Label",
      description:
        "카드에 보이는 짧은 연결 이유. '관련 있음' 같은 무의미한 표현 금지 (§2.5)",
      type: "string",
      group: "editorial",
      validation: (rule) => [
        rule.required(),
        rule.custom((label) => {
          const banned = ["관련 있음", "related", "참고"];
          if (typeof label === "string" && banned.some((b) => label.trim() === b)) {
            return "무의미한 라벨입니다. 구체적인 연결 이유를 적어주세요.";
          }
          return true;
        }),
      ],
    }),
    defineField({
      name: "teaser",
      title: "Teaser",
      description: "Related 카드에서 호기심을 자극하는 한 문장 (§4.3 RelatedContent)",
      type: "string",
      group: "editorial",
      validation: (rule) => rule.required().max(140),
    }),
    defineField({
      name: "evidenceLevel",
      title: "Evidence Level",
      description: "historical + illustrative 조합은 Studio warning이 발생합니다 (§2.5)",
      type: "string",
      group: "evidence",
      options: {
        list: [
          { value: "documented", title: "Documented - 문서로 증명됨" },
          { value: "probable", title: "Probable - 개연성 높음" },
          { value: "illustrative", title: "Illustrative - 설명을 위한 예시" },
        ],
      },
      validation: (rule) =>
        rule
          .required()
          .custom((level, context) => {
            const isHistorical =
              context.document?.relationType === "historicallyLedTo" ||
              context.document?.relationNature === "historical";
            if (isHistorical && level === "illustrative") {
              return "역사적 주장(historical)을 illustrative 근거로 두는 것은 위험합니다. documented/probable로 올리거나 conceptual 관계로 전환하세요.";
            }
            return true;
          })
          .warning(),
    }),
    defineField({
      name: "editorialPriority",
      title: "Editorial Priority",
      description: "1(가장 높음)~5. 같은 노드의 추천 정렬에 사용됩니다 (§2.5)",
      type: "number",
      group: "evidence",
      initialValue: 3,
      options: { list: [1, 2, 3, 4, 5] },
      validation: (rule) => rule.required().min(1).max(5).integer(),
    }),
    defineField({
      name: "sources",
      title: "Sources",
      description: "historical relation은 최소 1개 권장. strong claim은 사실상 필수 (§2.5)",
      type: "array",
      group: "sources",
      of: [{ type: "reference", to: [{ type: "source" }] }],
    }),
  ],
  preview: {
    select: {
      relationType: "relationType",
      nature: "relationNature",
      label: "label",
      sourceTitle: "source.title",
      sourceQuestion: "source.question",
      sourceTerm: "source.term",
      targetTitle: "target.title",
      targetQuestion: "target.question",
      targetTerm: "target.term",
    },
    prepare(value) {
      const sourceTitle = value.sourceTitle ?? value.sourceQuestion ?? value.sourceTerm ?? "?";
      const targetTitle = value.targetTitle ?? value.targetQuestion ?? value.targetTerm ?? "?";
      return {
        title: `${RELATION_TYPE_LABELS[value.relationType as RelationType] ?? value.relationType}: ${String(sourceTitle)} → ${String(targetTitle)}`,
        subtitle: `${String(value.nature ?? "")} · ${String(value.label ?? "")}`,
      };
    },
  },
});
