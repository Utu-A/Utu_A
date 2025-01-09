// next.config.ts
import type { NextConfig } from "next";
import type { ImageLoaderProps } from "next/image";

// Custom image loader configuration if needed
const customImageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// Define the configuration with proper TypeScript types
const nextConfig: NextConfig = {
  // Image configuration with proper typing
  images: {
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      'avatars.githubusercontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
    // Optional: Use custom loader if needed
    loader: 'default',
  },

  // Server configuration
  experimental: {
    // Properly typed experimental features
    serverActions: {
      // Specific configuration for server actions
      bodySizeLimit: '2mb',
      allowedOrigins: ['localhost:3000']
    }
  },

  // Proper typing for redirects
  async redirects() {
    return [];
  },

  // Environment configuration
  env: {
    // Add your environment variables here
  },

  // Webpack configuration with punycode warning suppression
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Suppress punycode deprecation warnings
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      {
        module: /node_modules\/punycode/,
      }
    ];

    // Warning suppression for Node.js modules
    if (isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve?.fallback,
          punycode: false,
        },
      };
    }

    // Add any other custom webpack configuration here if needed
    
    return config;
  },

  // Additional TypeScript specific options
  typescript: {
    // Optionally enable type checking during build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;