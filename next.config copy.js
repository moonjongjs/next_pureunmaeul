/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,  // ✅ env와 일치
  trailingSlash: true,                          // 새로고침 404 방지
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;