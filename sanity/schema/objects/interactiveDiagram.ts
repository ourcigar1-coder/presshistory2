import { defineField, defineType } from "sanity";

/**
 * §2.6 interactiveDiagram
 * interactiveKey는 registry allowlist만 선택 가능. 새 상호작용은 코드 작업으로만 추가한다.
 */
export const INTERACTIVE_KEYS = ["lithography-water-ink", "registration-alignment"] as const;

export type InteractiveKey = (typeof INTERACTIVE_KEYS)[number];

export const INTERACTIVE_LABELS: Record<InteractiveKey, string> = {
  "lithography-water-ink": "석판화 물/잉크 선택적 부착",
  "registration-alignment": "Registration 색판 정합",
};

export const interactiveDiagram = defineType({
  name: "interactiveDiagram",
  title: "Interactive Diagram",
  type: "object",
  fields: [
    defineField({
      name: "interactiveKey",
      title: "Interactive Key",
      description: `구현된 인터랙션 registry에서만 선택 가능: ${INTERACTIVE_KEYS.join(", ")}`,
      type: "string",
      options: {
        list: INTERACTIVE_KEYS.map((value) => ({ value, title: INTERACTIVE_LABELS[value] })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "제목",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      title: "도입 설명",
      description: "인터랙션을 시작하기 전 사용자가 무엇을 관찰해야 하는지 안내",
      type: "text",
      rows: 3,
    }),
    /**
     * §4.5 Interaction Budget / §7.4 Production Guard
     * interactive key 오류 시 fallback으로 보여줄 static/fallback 설명.
     */
    defineField({
      name: "fallbackExplanation",
      title: "Fallback 설명",
      description:
        "interactive key 오류 또는 reduced-motion 환경에서 대신 표시할 텍스트 설명. 반드시 입력한다.",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fallbackDiagram",
      title: "Fallback 다이어그램",
      description: "선택: 인터랙션을 쓸 수 없을 때 함께 보여줄 static diagram",
      type: "staticDiagram",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "interactiveKey" },
  },
});
