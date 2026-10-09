import type { NextConfig } from "next";

function getApiRemotePatterns() {
  const patterns: NonNullable<NonNullable<NextConfig["images"]>["remotePatterns"]> = [
    {
      protocol: "http",
      hostname: "127.0.0.1",
      port: "8000",
      pathname: "/storage/**",
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "8000",
      pathname: "/storage/**",
    },
  ];

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (apiUrl) {
    try {
      const url = new URL(apiUrl);
      if (url.hostname !== "localhost" && url.hostname !== "127.0.0.1") {
        patterns.push({
          protocol: url.protocol.replace(":", "") as "http" | "https",
          hostname: url.hostname,
          port: url.port || undefined,
          pathname: "/storage/**",
        });
      }
    } catch {
      // NEXT_PUBLIC_API_URL is not a valid URL; keep defaults.
    }
  }

  return patterns;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},

  serverExternalPackages: ["nodemailer"],

  images: {
    remotePatterns: getApiRemotePatterns(),
  },
};

export default nextConfig;