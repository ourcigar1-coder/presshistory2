import { defineField, defineType } from "sanity";

/** §2.1 Object: richTextSection - 제목 + 본문 반복 구조를 데이터화한다 (§0 목표). */
export const richTextSection = defineType({
  name: "richTextSection",
  title: "Rich Text Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "본문",
      description: "3~4단락마다 이미지·과정도·비교·짧은 카드 중 하나의 시각적 보상을 둘 것 (§0.2)",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "sideTrackTrigger",
                title: "Side-track Trigger",
                description:
                  "본문 흐름을 깨지 않는 inline curiosity link (§4.3). relation target 노드나 side-track key로 연결된다.",
                type: "object",
                fields: [
                  defineField({
                    name: "targetSlug",
                    title: "대상 노드 slug",
                    type: "string",
                    description: "예: why-gum-arabic-likes-water",
                  }),
                  defineField({
                    name: "labelOverride",
                    title: "표시 라벨 (선택)",
                    type: "string",
                  }),
                ],
              },
            ],
          },
        },
        { type: "image" },
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
  },
});
