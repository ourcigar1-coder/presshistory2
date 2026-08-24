"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

/**
 * Embedded Sanity Studio.
 * 'use client'로 유지해 sanity.config가 RSC 그래프에서 평가되지 않게 한다
 * (sanity/swr react-server 조건 충돌 방지).
 */
export default function StudioPage() {
  return <NextStudio config={config} />;
}
