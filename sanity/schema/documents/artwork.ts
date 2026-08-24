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

/** §2.3 artwork - "Moulin Rouge: La Goulue" */
export const artwork = defineType({
  name: "artwork",
  title: "Artwork",
  type: "document",
  groups: FIELD_GROUPS,
  fields: [
    defineField({
      name: "title",
      title: "작품명",
      type: "string",
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    slugField("artwork"),
    defineField({
      name: "artist",
      title: "작가",
      type: "reference",
      group: "editorial",
      to: [{ type: "person" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technique",
      title: "제작 기법",
      type: "reference",
      group: "editorial",
      to: [{ type: "technique" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "제작 연도",
      type: "number",
      group: "editorial",
    }),
    defineField({
      name: "heroImage",
      title: "대표 이미지",
      description:
        "기관 자산만 사용. rights record(imageAssetRecord originType=institutional)가 없으면 발행 차단 (§6.3).",
      type: "image",
      options: { hotspot: true },
      group: "visual",
      fields: [
        defineField({ name: "alt", title: "alt", type: "string", validation: (rule) => rule.required() }),
        defineField({
          name: "visualRecord",
          title: "Visual Record",
          description: "institution / license / creditLine 등이 기록된 imageAssetRecord",
          type: "reference",
          to: [{ type: "imageAssetRecord" }],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "thirtySecondExplanation",
      title: "30초 설명",
      description: "'왜 이 포스터는 멀리서도 눈에 들어오고 대량으로 퍼질 수 있었을까?'에 대한 첫 답 (§0.1 단계 3)",
      type: "text",
      rows: 5,
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    shortDescriptionField,
    domainField,
    statusField(),
    defineField({
      name: "materials",
      title: "Materials",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "material" }] }],
    }),
    defineField({
      name: "scienceConcepts",
      title: "Science Concepts",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "scienceConcept" }] }],
    }),
    defineField({
      name: "howItWasMade",
      title: "How It Was Made",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "historicalContext",
      title: "Historical Context",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "whyItMatters",
      title: "Why It Matters",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "unexpectedConnections",
      title: "Unexpected Connections",
      description: "다른 도메인으로 이어지는 놀라운 연결. teaser 필수.",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "relation" }] }],
    }),
    sourcesField,
    publishedAtField,
    updatedAtEditorialField,
    seoGroupField,
  ],
  preview: pagePreview({ title: "title" }),
});
