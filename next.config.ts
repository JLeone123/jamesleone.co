import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Put the CSS straight into the HTML instead of a separate, render-blocking
    // stylesheet request. Worth it while the stylesheet stays small.
    inlineCss: true,
  },
};

export default nextConfig;
