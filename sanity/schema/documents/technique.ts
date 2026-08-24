import { defineField, defineType } from "sanity";
import { domainField } from "../objects/domain";
import { statusField, pagePreview } from "../objects/status";
import {
  FIELD_GROUPS,
  publishedAtField,
  seoGroupField,
  shortDescriptionField,
  slugField,
  sourcesField,
  updatedAtEditorialField,
} from "../lib/fields";

/** §2.3 technique - "돌을 파지 않는 판화, 석판화" */
export const technique = defineType({
  name: "technique",
  title: "Technique",
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
    slugField("technique"),
    defineField({
      name: "family",
      title: "기법 계열",
      description: "예: 평판 인쇄(planographic), 요판(intaglio), 볼록(relief), 공공(stencil)",
      type: "string",
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tenSecondExplanation",
      title: "10초 설명",
      description:
        "최대 3문장. '돌을 파지 않는데 어떻게 같은 그림이 반복해서 찍힐까?'에 대한 첫 답 (§0.1 단계 2)",
      type: "text",
      rows: 4,
      group: "editorial",
      validation: (rule) => rule.required().max(500),
    }),
    shortDescriptionField,
    domainField,
    statusField(),
    defineField({
      name: "process",
      title: "Process",
      description: "3~7단계. 모바일 세로 / 데스크톱 유연 배치 (§4.3)",
      type: "array",
      group: "editorial",
      of: [{ type: "processStep" }],
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.document as Record<string, unknown> | undefined)?.status !== "published") return true;
          if (!Array.isArray(value) || value.length < 3 || value.length > 7) {
            return "published 상태의 process는 3~7단계여야 합니다.";
          }
          return true;
        }),
    }),
    defineField({
      name: "whyItAppeared",
      title: "Why It Appeared",
      description: "시대의 필요와 물질 조건을 서사로. 영웅담보다 조건을 보여준다 (§1.3).",
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
      name: "howToIdentify",
      title: "How to Identify",
      description:
        "Audubon식 감별법: 평판=단면/판흔 없음, 현미경 입자감 vs offset 규칙 점 패턴 없음 등",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "efficacy",
      title: "Efficacy & Practicality",
      description: "재사용성·경제성·민주성. Griffiths 인용 등 권위 출처 포함",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "scienceConcepts",
      title: "Science Concepts",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "scienceConcept" }] }],
    }),
    defineField({
      name: "representativeArtwork",
      title: "Representative Artwork",
      type: "reference",
      group: "connections",
      to: [{ type: "artwork" }],
    }),
    defineField({
      name: "sideTracks",
      title: "Side-tracks",
      description:
        "Primary Node는 최소 2개의 Side-track 훅을 가진다. '이게 왜?'를 누를 이유가 없으면 발행하지 않는다 (§0.2).",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "relation" }] }],
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.document as Record<string, unknown> | undefined)?.status !== "published") return true;
          if (!Array.isArray(value) || value.length < 2) {
            return "published 상태의 primary node에는 side-track 훅이 최소 2개 필요합니다 (§0.2).";
          }
          return true;
        }),
    }),
    defineField({
      name: "staticDiagrams",
      title: "Static Diagrams",
      description:
        "원리·단면·공정 다이어그램은 기본적으로 LLM 생성 자산 + provenance/검수 기록 (§2.6, §6.6).",
      type: "array",
      group: "visual",
      of: [{ type: "staticDiagram" }],
    }),
    defineField({
      name: "interactiveDiagram",
      title: "Interactive Diagram",
      description: "Interaction Budget 내에서만 (§4.5)",
      type: "interactiveDiagram",
      group: "visual",
    }),
    sourcesField,
    publishedAtField,
    updatedAtEditorialField,
    seoGroupField,
  ],
  preview: pagePreview({ title: "title" }),
});
