import { defineField, defineType } from "sanity";
import { domainField } from "../objects/domain";
import { statusField } from "../objects/status";
import {
  FIELD_GROUPS,
  publishedAtField,
  seoGroupField,
  shortDescriptionField,
  slugField,
  sourcesField,
  updatedAtEditorialField,
} from "../lib/fields";
import { pagePreview } from "../objects/status";

/** §2.3 entry - "거리의 포스터에서 시작하기" */
export const entry = defineType({
  name: "entry",
  title: "Entry",
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
    slugField("entry"),
    defineField({
      name: "introQuestion",
      title: "Hero Question",
      description:
        "첫 화면을 정의가 아니라 질문이나 놀라운 관찰로 시작한다 (§0.2). 예: 왜 19세기 도시는 갑자기 포스터로 가득 찼을까?",
      type: "text",
      rows: 2,
      group: "editorial",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "simpleExplanation",
      title: "30초 이야기",
      description: "최대 3문장 수준의 강한 서사 (§1.2)",
      type: "text",
      rows: 5,
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    shortDescriptionField,
    domainField,
    statusField(),
    defineField({
      name: "heroImage",
      title: "대표 이미지",
      description: "실제 작품/역사 이미지는 반드시 visualRecord에 기관 권리 기록을 연결한다.",
      type: "image",
      options: { hotspot: true },
      group: "visual",
      fields: [
        defineField({ name: "alt", title: "alt", type: "string", validation: (rule) => rule.required() }),
        defineField({
          name: "visualRecord",
          title: "Visual Record",
          type: "reference",
          to: [{ type: "imageAssetRecord" }],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "optionalDiagram",
      title: "Optional Diagram",
      type: "staticDiagram",
      group: "visual",
    }),
    defineField({
      name: "connections",
      title: "Connections",
      description: "필수 연결: lithography, moulin-rouge-la-goulue (§1.1)",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "relation" }] }],
    }),
    defineField({
      name: "recommendedPath",
      title: "Recommended Path",
      description: "'다음에 무엇을 볼까?' 최대 3개 (§4.3)",
      type: "array",
      group: "connections",
      of: [{ type: "recommendedPathItem" }],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: "relatedEntries",
      title: "Related Entries",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "entry" }] }],
    }),
    sourcesField,
    publishedAtField,
    updatedAtEditorialField,
    seoGroupField,
  ],
  preview: pagePreview({ title: "title" }),
});
