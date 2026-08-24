"use client";

import { PostHogProvider as PHProvider } from "posthog-js/react";
import type { ReactNode } from "react";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

/**
 * §5.3 Privacy
 * - 실명·이메일 등 직접식별정보 수집 없음 (identify 미사용)
 * - Source of Truth는 PostHog event stream
 */
export function AnalyticsProvider({ children }: { children: ReactNode }) {
  if (!key) {
    return <>{children}</>;
  }
  return (
    <PHProvider
      apiKey={key}
      options={{
        api_host: host,
        autocapture: false,
        capture_pageview: false,
        persistence: "sessionStorage",
      }}
    >
      {children}
    </PHProvider>
  );
}
