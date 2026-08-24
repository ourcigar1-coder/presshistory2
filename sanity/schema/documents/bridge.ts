import { defineField, defineType } from "sanity";
import { domainField } from "../objects/domain";
import { pagePreview, statusField } from "../objects/status";
import {
  FIELD_GROUPS,
  publishedAtField,
  seoGroupField,
  shortDescriptionField,
  slugField,
  sourcesField,
  updatedAtEditorialField,
} from "../lib/fields";

/** §1.2 Bridge - "새기는 것에서 패터닝으로" */
export const bridgeTimelineItem = defineType({
  name: "bridgeTimelineItem",
  title: "Timeline Item",
  type: "object",
  fields: [
    defineField({
      name: "periodLabel",
      title: "시기 라벨",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "markerType",
      title: "표시 유형",
      description:
        "역사적 사실(historical)과 개념적 유사성(conceptual)을 시각적으로 구분한다 (§0.2). 단선적 서술 금지.",
      type: "string",
      options: {
        list: [
          { value: "historical", title: "Historical" },
          { value: "conceptual", title: "Conceptual" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "periodLabel", marker: "markerType" },
    prepare(value) {
      return {
        title: value.title,
        subtitle: `${value.subtitle ?? ""} · ${String(value.marker ?? "")}`,
      };
    },
  },
});

export const bridgeComparisonRow = defineType({
  name: "bridgeComparisonRow",
  title: "Comparison Row",
  type: "object",
  fields: [
    defineField({ name: "aspect", title: "비교 항목", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "printing",
      title: "인쇄 쪽",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "patterning",
      title: "패터닝 쪽",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "aspect" },
  },
});

export const bridgeKeyDifference = defineType({
  name: "bridgeKeyDifference",
  title: "Key Difference",
  type: "object",
  fields: [
    defineField({ name: "difference", title: "차이", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "explanation",
      title: "설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "difference" },
  },
});

/** §2.3 bridge */
export const bridge = defineType({
  name: "bridge",
  title: "Bridge",
  type: "document",
  groups: FIELD_GROUPS,
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    slugField("bridge"),
    defineField({
      name: "introQuestion",
      title: "Intro Question",
      description:
        "예: 인쇄의 정합과 현대 패터닝의 alignment는 무엇이 같고 무엇이 다른가? (§0.1 단계 6)",
      type: "text",
      rows: 2,
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    shortDescriptionField,
    domainField,
    statusField(),
    defineField({
      name: "timeline",
      title: "Comparison Timeline",
      type: "array",
      group: "editorial",
      of: [{ type: "bridgeTimelineItem" }],
    }),
    defineField({
      name: "commonProblem",
      title: "Common Problem",
      description: "'여러 층을 어긋나지 않게 겹치는 문제'처럼 두 세계가 함께 마주한 공통 과제.",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "comparisonTable",
      title: "Comparison Table",
      type: "array",
      group: "editorial",
      of: [{ type: "bridgeComparisonRow" }],
    }),
    defineField({
      name: "keyDifferences",
      title: "Key Differences",
      description:
        "'판화가 발전해서 반도체가 되었다' 같은 단선적 서술을 하지 않고, 무엇이 다른지 명확히 구분한다 (§1.3).",
      type: "array",
      group: "editorial",
      of: [{ type: "bridgeKeyDifference" }],
    }),
    defineField({
      name: "relatedNodes",
      title: "Modern Node Cards",
      description:
        "photolithography/PCB 등 현대 노드 연결. relation nature/evidence 라벨이 payload에 포함된다 (§3.3).",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "relation" }] }],
    }),
    defineField({
      name: "closingQuestion",
      title: "Closing Question",
      description: "마지막에 남겨둘 다음 질문 (§0.2)",
      type: "text",
      rows: 2,
      group: "connections",
    }),
    sourcesField,
    publishedAtField,
    updatedAtEditorialField,
    seoGroupField,
  ],
  preview: pagePreview({ title: "title" }),
});
