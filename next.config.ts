import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
