import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    useLightningcss: false,
  },
};

export default nextConfig;
