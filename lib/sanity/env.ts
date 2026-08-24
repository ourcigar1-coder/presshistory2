export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-01-01";

/** Sanity 프로젝트 자격증명이 설정되어 있는지 여부. false면 데이터 레이어가 fixture로 폴백한다 (§3.6). */
export const hasSanityConfig = Boolean(projectId && dataset);
