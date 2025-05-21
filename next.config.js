const path = require("path");

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  output: process.env.NEXT_OUTPUT_MODE || undefined,

  experimental: {
    outputFileTracingRoot: __dirname,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
    domains: [
      "upload.wikimedia.org",
      "cdn.motor1.com",
      "media.ed.edmunds-media.com",
      "wallup.net",
      "autodiscoveries.com",
      "i.iheart.com",
      "vehix.pl",
    ],
  },

  // ✅ Security headers только в production
  ...(isProd && {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value:
                "default-src 'self'; img-src * data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src *",
            },
            {
              key: "X-Frame-Options",
              value: "DENY",
            },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin",
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
          ],
        },
      ];
    },
  }),
};

module.exports = nextConfig;
