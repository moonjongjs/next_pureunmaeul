/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // ✅ SSR 서버 실행용 번들 생성
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true }
};

module.exports = nextConfig;
