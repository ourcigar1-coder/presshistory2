import { defineField, defineType } from "sanity";

/**
 * §2.6 staticDiagram
 * 판화 원리·단면·공정 설명용 다이어그램. 기본적으로 LLM 생성 자산(§2.7)을 연결한다.
 */
export const staticDiagram = defineType({
  name: "staticDiagram",
  title: "Static Diagram",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "asset",
      title: "이미지 (SVG/PNG/WebP)",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "대체 텍스트 (alt)",
      description: "이미지를 볼 수 없는 사용자를 위한 필수 설명 (§4.6)",
      type: "string",
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "caption",
      title: "캡션",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "longDescription",
      title: "긴 설명 (SVG long description)",
      description: "스크린 리더와 reduced-motion 환경에서 애니메이션 없이 동일하게 이해할 수 있는 설명 (§4.6)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "visualRecord",
      title: "Visual Record",
      description:
        "이 자산의 출처 기록. LLM 생성 이미지는 imageAssetRecord(originType=llmGenerated)에 generation provenance와 검수 상태를 반드시 연결한다 (§2.7).",
      type: "reference",
      to: [{ type: "imageAssetRecord" }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", media: "asset" },
  },
});
