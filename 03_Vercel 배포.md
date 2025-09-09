# Vercel 배포 특징
무료 요금제 있음 → 개인 프로젝트, 포트폴리오용 충분.
Next.js 공식 지원 → next.config.js, app/ 구조 그대로 인식.
npm install 불필요 → Vercel 서버에서 자동 설치 & 빌드.
자동 CI/CD → GitHub에 push만 하면 Vercel이 알아서 배포.
도메인 제공 → 프로젝트명.vercel.app
커스텀 도메인 연결도 가능 (추후 무료 HTTPS 포함).

git add .
git commit -m "업데이트"
git push origin master

git add .
git commit -m "update"
git push origin master


git add .
git commit -m "fix: fetch & image 경로 절대경로로 수정"
git push origin master


# remote 이름변경  git remote rename github origin
# remote 이름삭제  git remote remove cafe24
# remote 모두삭제  git remote remove origin
# remote 목록확인  git remote -v
# remote 이름추가  git remote add origin https://github.com/moonjongjs/next_pureunmaeul.git


git remote remove cafe24

$ git remote -v
cafe24  moonjong22@next2.cafe24app.com:moonjong22_next2 (fetch)
cafe24  moonjong22@next2.cafe24app.com:moonjong22_next2 (push)
github  https://github.com/moonjongjs/next_pureunmaeul.git (fetch)
github  https://github.com/moonjongjs/next_pureunmaeul.git (push)

user@DESKTOP-RFHO592 MINGW64 ~/Downloads/120강_NextJS_프로젝트_생성_설치_실행_구현/03_NextJS_제작_구현_MVC_패턴디자인_네비게이션_캐러셀슬라이드_탭메뉴_공지사항_갤러리_구현완료_카페24_빌드_배포 (master)

$ git remote rename github origin
Renaming remote references: 100% (1/1), done.

git remote -v

git add .
git commit -m "fix: 이미지 경로 및 fetch 절대경로 수정"



