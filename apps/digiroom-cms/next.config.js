/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    domains: ['astradigitaldigiroomstg.blob.core.windows.net', 'tsoimageprod.azureedge.net'],
  },
};

module.exports = nextConfig;
