import { defineField, defineType } from "sanity";
import { DOMAIN_LABELS, type DomainValue } from "./domain";

/** §6.1 Workflow 순서 */
export const STATUS_VALUES = [
  "idea",
  "researching",
  "readyForDraft",
  "draft",
  "factCheck",
  "editorialReview",
  "visualProduction",
  "ready",
  "published",
] as const;

export type StatusValue = (typeof STATUS_VALUES)[number];

export const STATUS_LABELS: Record<StatusValue, string> = {
  idea: "Idea",
  researching: "Researching",
  readyForDraft: "Ready for Draft",
  draft: "Draft",
  factCheck: "Fact Check",
  editorialReview: "Editorial Review",
  visualProduction: "Visual Production",
  ready: "Ready to Publish",
  published: "Published",
};

const statusList = STATUS_VALUES.map((value) => ({ value, title: STATUS_LABELS[value] }));

export function statusField() {
  return defineField({
    name: "status",
    title: "Status",
    description:
      "Idea → Researching → Ready for Draft → Draft → Fact Check → Editorial Review → Visual Production → Ready → Published (§6.1)",
    type: "string",
    options: { list: statusList },
    initialValue: "idea",
    validation: (rule) => rule.required(),
  });
}

/** status가 published일 때만 필수인 공통 검증 */
export function requireWhenPublished(
  value: unknown,
  context: { document?: Record<string, unknown> | null },
  message: string,
): true | string {
  const status = context.document?.status;
  if (status !== "published") return true;
  if (value === null || value === undefined) return message;
  if (typeof value === "string" && value.trim() === "") return message;
  if (Array.isArray(value) && value.length === 0) return message;
  return true;
}

/** preview에서 title/question/term + status 표시 (§2.8) */
export function pagePreview(select: {
  title: string;
  subtitle?: string;
}) {
  const selectEntries: Record<string, string> = {
    title: select.title,
    domain: "domain",
    status: "status",
  };
  if (select.subtitle) selectEntries.subtitle = select.subtitle;
  return {
    select: selectEntries,
    prepare(value: {
      title?: string;
      subtitle?: string;
      domain?: DomainValue;
      status?: StatusValue;
    }) {
      const domainLabel = value.domain ? (DOMAIN_LABELS[value.domain] ?? value.domain) : "";
      return {
        title: value.title ?? "(제목 없음)",
        subtitle: [domainLabel, value.subtitle].filter(Boolean).join(" · "),
        description: value.status ? STATUS_LABELS[value.status] : undefined,
      };
    },
  };
}

export const seoObject = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "title",
      title: "SEO Title",
      type: "string",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
