import {
  defineField,
  type FieldGroupDefinition,
  type SlugRule,
} from "sanity";
import { PAGE_TYPE_NAMES } from "./pageTypes";

/**
 * §2.2 공통 필드 계약
 * slug는 같은 페이지 타입 안에서 unique, maxLength 96.
 */
export function slugField(typeName: (typeof PAGE_TYPE_NAMES)[number]) {
  return defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    description: "URL 경로에 사용됩니다. 페이지 타입 내에서 고유해야 합니다.",
    options: { maxLength: 96 },
    validation: (rule: SlugRule) =>
      [
        rule.required().error("slug는 필수입니다."),
        rule.custom((value) => {
          if (!value?.current) return true;
          if (value.current.length > 96) return "slug는 96자 이하여야 합니다.";
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current)) {
            return "소문자, 숫자, 하이픈(-)만 사용하세요. 예: moulin-rouge-la-goulue";
          }
          return true;
        }),
        rule.custom(async (value: { current?: string } | undefined, context) => {
          const current = value?.current;
          if (!current) return true;
          const client = context.getClient({ apiVersion: "2026-01-01" });
          const params = { type: typeName, slug: current, id: context.document?._id ?? "" };
          const query = /* groq */ `count(*[_type == $type && slug.current == $slug && !(_id in [$id, "drafts." + $id])])`;
          const count = await client.fetch<number>(query, params);
          if (count > 0) {
            return `'${current}' 슬러그가 이미 ${typeName} 문서에서 사용 중입니다.`;
          }
          return true;
        }),      ],
  });
}

export const shortDescriptionField = defineField({
  name: "shortDescription",
  title: "Short Description",
  description: "카드 2~3줄. 정의보다 호기심을 자극하는 문장으로 (§0.2)",
  type: "text",
  rows: 3,
  validation: (rule) => [
    rule.max(200),
    rule.custom(requireWhenPublishedRule("published 상태에는 short description이 필요합니다.")),
  ],
});

export const sourcesField = defineField({
  name: "sources",
  title: "Sources",
  description:
    "published는 최소 1개. 강한 역사 주장이 포함된 노드는 institution/primary 수준 출처를 권장합니다 (§2.2).",
  type: "array",
  group: "sources",
  of: [{ type: "reference", to: [{ type: "source" }] }],
  validation: (rule) =>
    rule.custom((value, context) => requireWhenPublished(value, context, "published 상태에는 최소 1개의 source가 필요합니다.")),
});

export const publishedAtField = defineField({
  name: "publishedAt",
  title: "Published At",
  type: "datetime",
  group: "sources",
  validation: (rule) =>
    rule.custom((value, context) =>
      requireWhenPublished(value, context, "published 상태에는 발행 시각이 필요합니다."),
    ),
});

export const updatedAtEditorialField = defineField({
  name: "updatedAtEditorial",
  title: "Editorial Updated At",
  description: "콘텐츠 검증 갱신일 (§2.2)",
  type: "datetime",
  group: "sources",
});

export function requireWhenPublishedRule(message: string) {
  return (value: unknown, context: { document?: Record<string, unknown> | null }) =>
    requireWhenPublishedValue(value, context, message);
}

export function requireWhenPublished(
  value: unknown,
  context: { document?: Record<string, unknown> | null },
  message: string,
): true | string {
  return requireWhenPublishedValue(value, context, message);
}

function requireWhenPublishedValue(
  value: unknown,
  context: { document?: Record<string, unknown> | null },
  message: string,
): true | string {
  const status = context.document?.status;
  if (status !== "published") return true;
  if (value === null || value === undefined) return message;
  if (typeof value === "string" && value.trim() === "") return message;
  if (Array.isArray(value) && value.length === 0) return message;
  if (typeof value === "object" && Object.keys(value).length === 0) return message;
  return true;
}

/** §2.8 필드 그룹 */
export const FIELD_GROUPS: FieldGroupDefinition[] = [
  { name: "editorial", title: "Editorial", default: true },
  { name: "connections", title: "Connections" },
  { name: "visual", title: "Visual" },
  { name: "sources", title: "Sources & Rights" },
  { name: "seo", title: "SEO" },
];

export const seoGroupField = defineField({
  name: "seo",
  title: "SEO",
  description: "미입력 시 기본 projection이 생성됩니다 (§2.2)",
  type: "seo",
  group: "seo",
});
