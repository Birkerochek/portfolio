import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  cacheLife: {
    base: {
      stale: 300,
      revalidate: 900,
      expire: 3600,
    },
  },
  allowedDevOrigins: ['localhost', '127.0.0.1',],
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowLocalIP: process.env.NODE_ENV === 'development',
     remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port:     '1337',
        pathname: '/uploads/**/*',
        search: '',
        
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port:     '1337',
        
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**/*',
        search: "",
      },
     
      
    ],
    
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src')],
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),

      '@app': path.resolve(__dirname, 'src/1_app'),
      '@features': path.resolve(__dirname, 'src/4_features'),
      '@entities': path.resolve(__dirname, 'src/5_entities'),
      '@shared': path.resolve(__dirname, 'src/6_shared'),
      '@widgets': path.resolve(__dirname, 'src/3_widgets'),

      '@pages': path.resolve(__dirname, 'src/2_pages'),

      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },

  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },

    // resolveAlias работает только для JS/TS, не для SCSS
    resolveAlias: {
      '@shared': path.resolve(__dirname, 'src/6_shared'),
    },
  },
};

export default nextConfig;
