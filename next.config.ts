import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  async redirects() {
    return [
      {
        source: "/bio",
        destination: "/bio/professional",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
