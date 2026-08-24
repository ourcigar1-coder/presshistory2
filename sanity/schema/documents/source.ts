import { defineField, defineType } from "sanity";

/** §2.4 source - Tier 전략(§6.2)에 따라 sourceType을 구분한다. */
export const SOURCE_TYPE_VALUES = [
  "institution",
  "primary",
  "academic",
  "openCollection",
  "encyclopedia",
  "other",
] as const;

export type SourceTypeValue = (typeof SOURCE_TYPE_VALUES)[number];

export const SOURCE_TYPE_LABELS: Record<SourceTypeValue, string> = {
  institution: "기관 (A · Primary Institution)",
  primary: "원전 (A · Primary)",
  academic: "학술/전문 자료 (D)",
  openCollection: "오픈 컬렉션/Commons (B)",
  encyclopedia: "백과사전/위키 (C)",
  other: "기타",
};

export const source = defineType({
  name: "source",
  title: "Source",
  type: "document",
  groups: [
    { name: "reference", title: "Reference", default: true },
    { name: "meta", title: "Meta" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "자료명",
      type: "string",
      group: "reference",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sourceType",
      title: "Source Type",
      description:
        "Wikipedia(C)는 탐색 지도로만 쓰고, 최초/발명/직접 영향 같은 strong claim의 유일한 최종 근거가 되어서는 안 됩니다 (§6.2).",
      type: "string",
      group: "reference",
      options: {
        list: SOURCE_TYPE_VALUES.map((value) => ({ value, title: SOURCE_TYPE_LABELS[value] })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "institution",
      title: "기관",
      type: "string",
      group: "reference",
    }),
    defineField({
      name: "author",
      title: "저자",
      type: "string",
      group: "reference",
    }),
    defineField({
      name: "year",
      title: "제작/발행 연도",
      type: "number",
      group: "reference",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      group: "reference",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "accessedAt",
      title: "접근일",
      type: "date",
      group: "reference",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "language",
      title: "언어",
      type: "string",
      group: "meta",
    }),
    defineField({
      name: "notes",
      title: "Notes",
      description: "이 출처가 뒷받침하는 주장이나 주의 사항 (§6.7 Source Card)",
      type: "text",
      rows: 3,
      group: "meta",
    }),
  ],
  preview: {
    select: { title: "title", institution: "institution", type: "sourceType" },
    prepare(value) {
      return {
        title: value.title,
        subtitle: `${SOURCE_TYPE_LABELS[value.type as SourceTypeValue] ?? ""}${value.institution ? ` · ${String(value.institution)}` : ""}`,
      };
    },
  },
});
