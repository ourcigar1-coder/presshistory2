import { defineField, defineType } from "sanity";

/** §2.1 Object: processStep - 3~7 단계 공정 설명 (§4.3 ProcessSteps) */
export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "단계 제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "설명",
      description: "한 문단, 하나의 핵심 주장만 (§1.3)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "참고 이미지 (선택)",
      type: "staticDiagram",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
