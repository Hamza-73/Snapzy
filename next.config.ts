import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Turbopack experimental configuration
    turbo: {
      resolveAlias: {
        '@uploadthing/mime-types': { type: 'ignore' },
        '@uploadthing/react': { type: 'ignore' }
      }
    }
  }
};

export default nextConfig;