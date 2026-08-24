import { defineField, defineType } from "sanity";

/**
 * §2.4 / §2.7 imageAssetRecord
 * institutional(기관 자산)과 llmGenerated(LLM 설명 이미지)를 분리해 기록한다.
 * LLM 생성 이미지는 역사적 원본처럼 제시하지 않으며, provenance와 검수 상태가 필수다.
 */
export const imageAssetRecord = defineType({
  name: "imageAssetRecord",
  title: "Image Asset Record",
  type: "document",
  groups: [
    { name: "origin", title: "Origin", default: true },
    { name: "institutional", title: "Institutional Rights" },
    { name: "llm", title: "LLM Provenance" },
    { name: "review", title: "Review & Notes" },
  ],
  fields: [
    defineField({
      name: "originType",
      title: "Origin Type",
      type: "string",
      group: "origin",
      options: {
        list: [
          { value: "institutional", title: "Institutional - 기관 소장 자산" },
          { value: "llmGenerated", title: "LLM Generated - 설명용 생성 이미지" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    // ---------- institutional ----------
    defineField({
      name: "institution",
      title: "소장 기관",
      type: "string",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "institutional", "기관 이미지에는 소장 기관 표기가 필요합니다."),
        ),
    }),
    defineField({
      name: "sourcePage",
      title: "Source Page URL",
      type: "url",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "institutional", "기관 이미지에는 collection page URL이 필요합니다."),
        ),
    }),
    defineField({
      name: "sourceImage",
      title: "Source Image URL",
      type: "url",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
    }),
    defineField({
      name: "iiifManifest",
      title: "IIIF Manifest",
      type: "url",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
    }),
    defineField({
      name: "license",
      title: "License",
      description: "예: Public Domain, CC0, CC BY 4.0, Open Access",
      type: "string",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "institutional", "기관 이미지에는 license 정보가 필요합니다."),
        ),
    }),
    defineField({
      name: "publicDomain",
      title: "Public Domain 여부",
      type: "boolean",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(
            value,
            context,
            "institutional",
            "public domain 여부를 확인하고 표시하세요. 불분명하면 해당 이미지를 사용하지 않습니다 (§6.3).",
          ),
        ),
    }),
    defineField({
      name: "creditLine",
      title: "Credit Line",
      description: "예: The Metropolitan Museum of Art, New York. Purchase, 1929 (29.100.129)",
      type: "string",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "institutional", "credit line이 필요합니다."),
        ),
    }),
    defineField({
      name: "accessionNumber",
      title: "Accession Number",
      type: "string",
      group: "institutional",
      hidden: ({ parent }) => parent?.originType !== "institutional",
    }),
    // ---------- llmGenerated ----------
    defineField({
      name: "generationProvider",
      title: "Generation Provider",
      description: "사용한 이미지 생성 서비스/도구 (§2.7)",
      type: "string",
      group: "llm",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "llmGenerated", "생성 도구/서비스를 기록하세요."),
        ),
    }),
    defineField({
      name: "model",
      title: "Model",
      type: "string",
      group: "llm",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "llmGenerated", "생성 모델명을 기록하세요."),
        ),
    }),
    defineField({
      name: "prompt",
      title: "Prompt",
      description: "재현·수정 가능하도록 최종 프롬프트를 저장합니다.",
      type: "text",
      rows: 5,
      group: "llm",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "llmGenerated", "생성 프롬프트를 저장하세요."),
        ),
    }),
    defineField({
      name: "promptVersion",
      title: "Prompt Version",
      type: "string",
      group: "llm",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
    }),
    defineField({
      name: "generatedAt",
      title: "Generated At",
      type: "datetime",
      group: "llm",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(value, context, "llmGenerated", "생성 시점을 기록하세요."),
        ),
    }),
    defineField({
      name: "referenceSources",
      title: "Reference Sources",
      description:
        "원리·공정을 검증한 source 최소 1개. LLM은 사실의 출처가 아닙니다 (§0.2, §2.7).",
      type: "array",
      group: "llm",
      of: [{ type: "reference", to: [{ type: "source" }] }],
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(
            value,
            context,
            "llmGenerated",
            "사실 검증용 reference source가 최소 1개 필요합니다.",
          ),
        ),
    }),
    defineField({
      name: "humanReviewed",
      title: "Human Reviewed",
      description:
        "사람이 시각적 오류(잘못된 도구, 거꾸로 된 공정 순서 등)와 오해 가능성을 검토했는지 (§2.7)",
      type: "boolean",
      initialValue: false,
      group: "llm",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
      validation: (rule) =>
        rule.custom((value, context) =>
          requireOrigin(
            value,
            context,
            "llmGenerated",
            "검수 여부를 표시하세요. 검수 전이라면 false로 둡니다.",
          ),
        ),
    }),
    defineField({
      name: "accuracyStatus",
      title: "Accuracy Status",
      type: "string",
      group: "llm",
      options: {
        list: [
          { value: "draft", title: "Draft - 검수 전" },
          { value: "reviewed", title: "Reviewed - 검수 완료" },
          { value: "approved", title: "Approved - 승인" },
        ],
      },
      initialValue: "draft",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
      validation: (rule) =>
        rule
          .custom((status, context) => {
            if ((context.document as Record<string, unknown> | undefined)?.originType !== "llmGenerated") {
              return true;
            }
            if (status === undefined) return "accuracy status를 선택하세요.";
            if (status !== "draft" && context.document?.humanReviewed !== true) {
              return "humanReviewed=true인 경우에만 reviewed/approved로 설정할 수 있습니다.";
            }
            return true;
          })
          .error(),
    }),
    defineField({
      name: "explanatoryOnly",
      title: "Explanatory Only",
      description: "항상 true. 실제 역사 이미지/실물 사진으로 오인시키지 않습니다 (§2.7).",
      type: "boolean",
      initialValue: true,
      readOnly: () => true,
      group: "llm",
      hidden: ({ parent }) => parent?.originType !== "llmGenerated",
    }),
    // ---------- review ----------
    defineField({
      name: "notes",
      title: "Notes · 단순화 기록",
      description:
        "의도적 단순화, 비율 과장, 생략 요소를 기록합니다 (§2.7 생성 이미지 편집 원칙).",
      type: "text",
      rows: 3,
      group: "review",
    }),
    defineField({
      name: "dateVerified",
      title: "Date Verified",
      type: "date",
      group: "review",
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.document as Record<string, unknown> | undefined)?.originType === "institutional") {
            return value ? true : "기관 이미지 권리 정보의 검증일이 필요합니다.";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      originType: "originType",
      institution: "institution",
      provider: "generationProvider",
      accuracy: "accuracyStatus",
    },
    prepare(value) {
      const subject =
        value.originType === "llmGenerated"
          ? `LLM (${String(value.provider ?? "?")})`
          : `Institutional (${String(value.institution ?? "?")})`;
      return {
        title: `Image Record · ${subject}`,
        subtitle: value.accuracy ? `accuracy: ${String(value.accuracy)}` : undefined,
      };
    },
  },
});

function requireOrigin(
  value: unknown,
  context: { document?: Record<string, unknown> | null },
  originType: string,
  message: string,
): true | string {
  if ((context.document as Record<string, unknown> | undefined)?.originType !== originType) {
    return true;
  }
  if (value === null || value === undefined) return message;
  if (typeof value === "string" && value.trim() === "") return message;
  if (Array.isArray(value) && value.length === 0) return message;
  return true;
}
