/**
 * @format
 * @type {import('next').NextConfig}
 */

import path from "path";
import { Configuration, Compilation } from "webpack";
const JavaScriptObfuscator = require("javascript-obfuscator");

const nextConfig: import("next").NextConfig = {
  reactStrictMode: true,

  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@packages": path.resolve(__dirname, "packages"),
      canvas: false,
      encoding: false,
    };

    if (!config.module) config.module = { rules: [] };
    if (!config.module.rules) config.module.rules = [];

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    if (!isServer) {
      config.optimization = config.optimization || {};
      config.optimization.minimizer = config.optimization.minimizer || [];

      config.optimization.minimizer.push({
        apply: (compiler: any) => {
          compiler.hooks.emit.tapAsync(
            "ObfuscatorPlugin",
            (compilation: Compilation, callback: () => void) => {
              compilation.assets = Object.keys(compilation.assets).reduce(
                (assets: Record<string, any>, assetName: string) => {
                  if (assetName.endsWith(".js")) {
                    const asset = compilation.assets[assetName];
                    const obfuscatedCode = JavaScriptObfuscator.obfuscate(
                      asset.source()
                    ).getObfuscatedCode();
                    assets[assetName] = {
                      source: () => obfuscatedCode,
                      size: () => obfuscatedCode.length,
                    };
                  } else {
                    assets[assetName] = compilation.assets[assetName];
                  }
                  return assets;
                },
                {}
              );
              callback();
            }
          );
        },
      });
    }

    return config;
  },

  // Image Optimization Configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "img.youtube.com",
      "images.unsplash.com",
      "example.com",
      "i.imgur.com",
    ],
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
      },
    ];
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none';",
  //         },
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=31536000; includeSubDomains; preload",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
