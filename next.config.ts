import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["10.11.12.10"],
  pageExtensions: ["mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
