import { defineField, defineType } from "sanity";
import { PAGE_TYPE_NAMES } from "../lib/pageTypes";

/** §2.1 Object: recommendedPathItem - "다음에 무엇을 볼까?" (최대 3개, §4.3) */
export const recommendedPathItem = defineType({
  name: "recommendedPathItem",
  title: "Recommended Path Item",
  type: "object",
  fields: [
    defineField({
      name: "target",
      title: "대상 노드",
      type: "reference",
      to: PAGE_TYPE_NAMES.map((type) => ({ type })),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "reason",
      title: "추천 이유",
      description:
        "다음에 무엇이 궁금해져야 하는가에 대한 한 문장. '관련 글' 같은 무의미한 표현 금지.",
      type: "string",
      validation: (rule) => rule.required().max(140),
    }),
  ],
  preview: {
    select: { title: "target.title", subtitle: "reason", question: "target.question" },
    prepare(value) {
      return {
        title: value.title ?? value.question ?? "(노드)",
        subtitle: value.subtitle,
      };
    },
  },
});
