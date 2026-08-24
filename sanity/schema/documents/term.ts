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

/** §2.3 term - "Registration · 색판을 맞추는 기술" */
export const term = defineType({
  name: "term",
  title: "Term",
  type: "document",
  groups: FIELD_GROUPS,
  fields: [
    defineField({
      name: "term",
      title: "Term",
      type: "string",
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    slugField("term"),
    defineField({
      name: "originalLanguage",
      title: "원어",
      description: "예: registre(프랑스어), registrum(라틴어)",
      type: "string",
      group: "editorial",
    }),
    defineField({
      name: "pronunciation",
      title: "발음",
      type: "string",
      group: "editorial",
    }),
    defineField({
      name: "literalMeaning",
      title: "Literal Meaning",
      type: "string",
      group: "editorial",
    }),
    defineField({
      name: "etymology",
      title: "Etymology",
      type: "richTextSection",
      group: "editorial",
    }),
    defineField({
      name: "simpleDefinition",
      title: "Simple Definition",
      description: "전문용어를 숨기지 않되 바로 일상 비유를 붙인다 (§1.3)",
      type: "text",
      rows: 3,
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contextDefinition",
      title: "Context Definition",
      description: "석판화 같은 특정 맥락에서의 정의 (§1.2)",
      type: "richTextSection",
      group: "editorial",
    }),
    shortDescriptionField,
    domainField,
    statusField(),
    defineField({
      name: "relatedTerms",
      title: "Related Terms",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "term" }] }],
    }),
    sourcesField,
    publishedAtField,
    updatedAtEditorialField,
    seoGroupField,
  ],
  preview: {
    select: { term: "term", domain: "domain", status: "status" },
    prepare(value) {
      return {
        title: value.term ?? "(용어 없음)",
        subtitle: value.domain ?? undefined,
        description: value.status ?? undefined,
      };
    },
  },
});
