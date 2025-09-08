# http://localhost:3000/next_pureunmaeul
# http://moonjong22.cafe24.com/next_pureunmaeul

# 배포 절차 (정리)
moon0108@!

1. 로컬에서 먼저 빌드 확인
```
   cross-env 패키지 사용 (추천)
   환경변수 설정을 Windows/Linux 모두 호환되게 해줍니다.

   - 정리
   Windows 개발 PC에서 테스트하려면 → cross-env 설치가 가장 안전
   카페24 서버(Linux)에서는 NODE_ENV=production 그대로 써도 문제 없음
   최소한으로는 "start": "node server.js" 만 둬도 됩니다
```

```bash
npm install cross-env --save-dev
npm run build
npm start
```
→ 로컬에서 SSR 정상 동작 확인

2. FTP 업로드

package.json, server.js, .next/, public/, pages/, app/ 등 Next.js 프로젝트 전체 올림

node_modules는 빼고 올림 (용량 문제)

서버에서 설치

cd ~/apps/앱이름
npm install --production
npm run build


앱 실행

npm start


카페24 관리 콘솔 → 앱 포트 매핑

내부 포트(3000) → 외부 URL(https://moonjong22.cafe24app.com) 매핑

✅ 이렇게 하면

https://moonjong22.cafe24app.com


에서 Next.js SSR이 실행됩니다.



