import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { getSanityLive } from "@/lib/sanity/client";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "복제의 문명",
    template: "%s · 복제의 문명",
  },
  description:
    "좋은 작품과 기술 하나가 과학·재료·언어·역사·사회·산업으로 계속 이어지는 탐험. 포스터에서 시작해 석판화의 원리를 지나 현대 패터닝까지.",
};

const SanityLive = getSanityLive();

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  // §7.6 Definition of Done: Draft Mode + Visual Editing + SanityLive
  const { isEnabled } = await draftMode();
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AnalyticsProvider>{children}</AnalyticsProvider>
        {SanityLive ? <SanityLive /> : null}
        {isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
}
