/** @type {import('next').NextConfig} */
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig = isExport
  ? {
      output: "export",
      images: { unoptimized: true },
      trailingSlash: true
    }
  : {
      turbopack: {
        root: import.meta.dirname
      },
      images: {
        remotePatterns: [
          { protocol: "https", hostname: "images.unsplash.com" },
          { protocol: "https", hostname: "plus.unsplash.com" }
        ]
      }
    };

export default nextConfig;
