import { defineField, defineType } from "sanity";

/** §2.4 material */
export const material = defineType({
  name: "material",
  title: "Material",
  type: "document",
  fields: [
    defineField({ name: "name", title: "이름", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "alternateNames",
      title: "다른 이름",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "composition", title: "구성/화학식", type: "string" }),
    defineField({
      name: "simpleDescription",
      title: "간단 설명",
      description: "일상 비유를 먼저 붙인다 (§1.3)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "properties",
      title: "Properties",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "relatedScienceConcepts",
      title: "Related Science Concepts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "scienceConcept" }] }],
    }),
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "source" }] }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "composition" },
  },
});

/** §2.4 person */
export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", title: "이름", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "alternateNames",
      title: "다른 이름",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "birthYear", title: "출생 연도", type: "number" }),
    defineField({ name: "deathYear", title: "사망 연도", type: "number" }),
    defineField({
      name: "roles",
      title: "Roles",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "shortDescription",
      title: "간단 설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "source" }] }],
    }),
  ],
  preview: {
    select: { title: "name", birth: "birthYear", death: "deathYear", roles: "roles" },
    prepare(value) {
      const years =
        value.birth || value.death ? `${value.birth ?? "?"}–${value.death ?? "?"}` : undefined;
      const roles = Array.isArray(value.roles) ? value.roles.join(", ") : undefined;
      return {
        title: value.title,
        subtitle: [roles, years].filter(Boolean).join(" · "),
      };
    },
  },
});

/** §2.4 place */
export const place = defineType({
  name: "place",
  title: "Place",
  type: "document",
  fields: [
    defineField({ name: "name", title: "이름", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "alternateNames",
      title: "다른 이름",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "geo", title: "좌표", type: "geopoint" }),
    defineField({
      name: "shortDescription",
      title: "간단 설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "source" }] }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "shortDescription" },
  },
});

/** §2.4 period */
export const period = defineType({
  name: "period",
  title: "Period",
  type: "document",
  fields: [
    defineField({ name: "name", title: "이름", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "start", title: "시작", type: "string" }),
    defineField({ name: "end", title: "끝", type: "string" }),
    defineField({
      name: "shortDescription",
      title: "간단 설명",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "source" }] }],
    }),
  ],
  preview: {
    select: { title: "name", start: "start", end: "end" },
    prepare(value) {
      return {
        title: value.title,
        subtitle:
          value.start || value.end ? `${value.start ?? "?"} – ${value.end ?? "?"}` : undefined,
      };
    },
  },
});
