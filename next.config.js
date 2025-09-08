/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ SSR 동적 배포용 (정적 export 사용 X)
  output: "standalone", // 서버 실행에 필요한 최소 파일만 묶음
  // output: "export" ❌ (이건 정적 배포 전용)

  // ✅ 이미지 최적화 비활성화 (카페24는 sharp 같은 네이티브 모듈 설치가 제한적)
  images: {
    unoptimized: true,
  },

  // ✅ 카페24는 서브폴더 배포가 필요 없으므로 basePath/trailingSlash 안 써도 됨
  // basePath: '/next',       // (정적 배포용일 때만 필요)
  // trailingSlash: true,     // (SPA fallback용, SSR에서는 불필요)

  // ✅ 빌드 시 ESLint 오류 무시 (호스팅 환경에서 실패 방지)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;