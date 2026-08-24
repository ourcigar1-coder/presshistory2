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

/** §2.3 scienceConcept - 친수성/친유성 표면 같은 과학 개념 */
export const scienceConcept = defineType({
  name: "scienceConcept",
  title: "Science Concept",
  type: "document",
  groups: FIELD_GROUPS,
  fields: [
    defineField({
      name: "title",
      title: "제목",
      description: "예: 물을 좋아하는 면과 기름을 좋아하는 면 (§4.3 ScienceCallout의 일상 비유 우선)",
      type: "string",
      group: "editorial",
      validation: (rule) => rule.required(),
    }),
    slugField("scienceConcept"),
    defineField({
      name: "oneSentence",
      title: "One Sentence",
      type: "text",
      rows: 2,
      group: "editorial",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "standardExplanation",
      title: "Standard Explanation",
      description: "정확한 용어를 사용하는 표준 설명. 일상 비유 다음에 온다.",
      type: "array",
      group: "editorial",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "deepExplanation",
      title: "Deep Explanation",
      type: "array",
      group: "editorial",
      of: [{ type: "block" }],
    }),
    shortDescriptionField,
    domainField,
    statusField(),
    defineField({
      name: "relatedMaterials",
      title: "Related Materials",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "material" }] }],
    }),
    defineField({
      name: "relatedTechniques",
      title: "Related Techniques",
      type: "array",
      group: "connections",
      of: [{ type: "reference", to: [{ type: "technique" }] }],
    }),
    defineField({
      name: "staticDiagrams",
      title: "Static Diagrams",
      type: "array",
      group: "visual",
      of: [{ type: "staticDiagram" }],
    }),
    sourcesField,
    publishedAtField,
    updatedAtEditorialField,
    seoGroupField,
  ],
  preview: pagePreview({ title: "title" }),
});
