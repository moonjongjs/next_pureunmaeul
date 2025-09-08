const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;