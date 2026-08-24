import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import {
  dataset,
  projectId,
} from "./lib/sanity/env";
import { schemaTypes } from "./sanity/schema";
import { deskStructure } from "./sanity/desk";

const title = "복제의 문명";

/**
 * Preview origin은 Studio가 실행 중인 배포(localhost / Vercel production / PR preview)를
 * 그대로 따라간다 — 어느 환경의 /studio에서도 Presentation Tool 검수가 가능하다.
 */
const previewOrigin =
  typeof window !== "undefined"
    ? window.location.origin
    : (process.env.SANITY_STUDIO_PREVIEW_ORIGIN ?? "http://localhost:3000");

export default defineConfig({
  name: "default",
  title,
  projectId,
  dataset,
  plugins: [
    structureTool({ structure: deskStructure }),
    presentationTool({
      previewUrl: {
        origin: previewOrigin,
        draftMode: { enable: "/api/draft-mode/enable" },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
