import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // §6.3 기관 이미지: Met/Wikimedia Open Access 자산을 우선한다
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "commons.wikimedia.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "images.metmuseum.org" },
      { protocol: "https", hostname: "www.artic.edu" },
    ],
  },
};

export default nextConfig;
