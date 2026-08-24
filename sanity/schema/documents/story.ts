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

/** §2.3 story - "아라비아고무는 왜 물을 좋아할까?" */
export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  groups: FIELD_GROUPS,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      description: "페이지의 주 필드. 질문이 재미있어야 발행 자격이 있다 (§10).",
      type: "string",
      group: "editorial",
      validation: (rule) => rule.required().max(200),
    }),
    slugField("story"),
    defineField({
      name: "shortAnswer",
      title: "Short Answer",
      description: "일상 언어로 이해시키는 짧은 답 (§0.1 단계 4)",
      type: "text",
      rows: 3,
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "storyBody",
      title: "Story",
      type: "array",
      group: "editorial",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    shortDescriptionField,
    domainField,
    statusField(),
    defineField({
      name: "evidence",
      title: "Evidence or Example",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "whatChanged",
      title: "What Changed?",
      description: "이 이해가 무엇을 바꾸었는지 (§1.2)",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "connections",
      title: "Connections",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "relation" }] }],
    }),
    defineField({
      name: "furtherReading",
      title: "Further Reading",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "source" }] }],
    }),
    sourcesField,
    publishedAtField,
    updatedAtEditorialField,
    seoGroupField,
  ],
  preview: {
    select: {
      question: "question",
      domain: "domain",
      status: "status",
    },
    prepare(value) {
      return {
        title: value.question ?? "(질문 없음)",
        subtitle: value.domain ?? undefined,
        description: value.status ?? undefined,
      };
    },
  },
});
