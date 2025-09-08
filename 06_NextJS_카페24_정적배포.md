# 06_NextJS_카페24_정적배포

git init
git branch -M master
git remote add origin git@github.com:moonjongjs/next_pureunmaeul.git
git add .
git commit -m "init: clean project setup"
git push -u origin master


# 전체 단계 (GitHub → Cafe24)

1. 로컬 깃 초기화
git init
git branch -M master

$ git remote remove origin
$ git remote add origin git@github.com:moonjongjs/next_pureunmaeul.git

$ git remote -v
origin  git@github.com:moonjongjs/next_pureunmaeul.git (fetch)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (push)


$ git remote set-url cafe24 ssh://moonjong22@nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul

ssh-add -l


user@DESKTOP-RFHO592 MINGW64 ~/Downloads/120강_NextJS_프로젝트_생성_설치_실행_구현/03_NextJS_제작_구현_MVC_패턴디자인_네비게이션_캐러셀슬라이드_탭메뉴_공지사항_갤러리_구현완료_카페24_빌드_배포 (master)

$ git remote -v
cafe24  ssh://nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul (fetch)
cafe24  ssh://nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul (push)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (fetch)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (push)

cafe24  ssh://nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul (fetch)
cafe24  ssh://nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul (push)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (fetch)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (push)

git add .
git commit -m "init: clean Next.js project"
git push -u origin master



npm run build
npx next export

moonjong1234

git add -f out
git commit -m "deploy: static export"
git push -u cafe24 master









다음 단계 (정적 배포 준비)

불필요 캐시 제거 (이미 올라간 내역 청소)

git rm -r --cached node_modules .next build
git commit -m "chore: remove heavy build artifacts"


정적 빌드 & export

npm run build
npx next export


→ 이러면 /out 폴더가 생성됩니다.

out 폴더 강제로 추가
.gitignore에 /out이 주석 처리되어 있으니 이제 강제로 커밋 가능:

git add -f out
git commit -m "deploy: static export for Cafe24"


Cafe24로 강제 푸시

git push -u cafe24 master --force


✅ 이렇게 하면 out/ 폴더만 올라가고, 대용량 node_modules 나 .next 때문에 Disk quota exceeded 에러가 발생하지 않습니다.

👉 혹시 원하시면 제가 deploy_cafe24.sh 같은 자동화 스크립트 만들어드릴 수도 있어요. (npm run build → export → git add out → commit → push 한 번에 실행) 원하시나요?




npm run build
npx next export
git add out
git commit -m "deploy: static export"
git push cafe24 master
