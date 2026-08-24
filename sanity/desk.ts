import type { StructureResolver } from "sanity/structure";
import { PAGE_TYPE_LABELS, PAGE_TYPE_NAMES } from "./schema/lib/pageTypes";

const PAGE_FILTER = `_type in [${PAGE_TYPE_NAMES.map((t) => `"${t}"`).join(", ")}]`;

/** §2.8 Sanity Studio 구조 */
export const deskStructure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("복제의 문명")
    .items([
      S.listItem()
        .id("ready-to-publish")
        .title("Ready to Publish")
        .child(
          S.documentList()
            .id("ready-to-publish-list")
            .title("Ready to Publish")
            .filter(`${PAGE_FILTER} && status == "ready"`)
            .defaultOrdering([{ field: "updatedAtEditorial", direction: "desc" }]),
        ),
      S.listItem()
        .id("needs-fact-check")
        .title("Needs Fact Check")
        .child(
          S.documentList()
            .id("needs-fact-check-list")
            .title("Needs Fact Check & Editorial Review")
            .filter(`${PAGE_FILTER} && status in ["factCheck", "editorialReview"]`),
        ),
      S.listItem()
        .id("needs-visual")
        .title("Needs Visual")
        .child(
          S.documentList()
            .id("needs-visual-list")
            .title("Needs Visual Production")
            .filter(`${PAGE_FILTER} && status == "visualProduction"`),
        ),
      S.listItem()
        .id("published")
        .title("Published")
        .child(
          S.documentList()
            .id("published-list")
            .title("Published")
            .filter(`${PAGE_FILTER} && status == "published"`)
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),
      S.divider(),
      S.listItem()
        .id("by-type")
        .title("By Type")
        .child(
          S.list()
            .id("by-type-list")
            .title("By Type")
            .items(
              PAGE_TYPE_NAMES.map((typeName) =>
                S.listItem()
                  .id(`type-${typeName}`)
                  .title(PAGE_TYPE_LABELS[typeName])
                  .child(
                    S.documentList()
                      .id(`type-${typeName}-list`)
                      .title(PAGE_TYPE_LABELS[typeName])
                      .filter(`_type == "${typeName}"`)
                      .defaultOrdering([{ field: "_createdAt", direction: "desc" }]),
                  ),
              ),
            ),
        ),
      S.divider(),
      S.listItem()
        .id("sources-rights")
        .title("Sources & Rights")
        .child(
          S.list()
            .id("sources-rights-list")
            .title("Sources & Rights")
            .items([
              S.documentTypeListItem("source").title("Sources"),
              S.documentTypeListItem("imageAssetRecord").title("Image Asset Records"),
              S.documentTypeListItem("relation").title("Relations"),
            ]),
        ),
      S.divider(),
      // 비 page entity
      S.documentTypeListItem("material").title("Materials"),
      S.documentTypeListItem("person").title("People"),
      S.documentTypeListItem("place").title("Places"),
      S.documentTypeListItem("period").title("Periods"),
    ]);
