import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/landing-page-dev",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
