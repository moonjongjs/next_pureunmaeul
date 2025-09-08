# NextJS_시작하기

1. 프로젝트 생성
```BASH
    npx create-next-app@13.5.11 next_app
```
```BASH


$ npx create-next-app@13.5.11 next_app
Need to install the following packages:
create-next-app@13.5.11
Ok to proceed? (y)

√ Would you like to use TypeScript? ... No
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No
```
2. 프로젝트 폴더 이동
$ cd next_app

3. 프로젝트 실행
$ npm run dev

4. 폴더정리
[public]
    [css]
    [images]
    [script]
    
[src]
    [app]
        layout.js
        page.js
        [sub1]
            page.js
        [sub2]
            page.js
    [components]    
        HeaderComponet.jsx
        [main]
            Section1Componet.jsx
            Section2Componet.jsx
            Section3Componet.jsx
        FooterComponet.jsx


# NextJS  UI 최적화
```
    UI & 최적화 → Link, Image, Script, Head
    라우팅 훅 → useRouter, usePathname, useSearchParams
    코드 스플리팅 → dynamic


    Link → 빠른 페이지 이동
    Image → 이미지 최적화
    useSearchParams → URL 쿼리 읽기
    usePathname → 현재 경로 감지
    Script → 외부 스크립트 관리
    dynamic → 지연 로딩
```
