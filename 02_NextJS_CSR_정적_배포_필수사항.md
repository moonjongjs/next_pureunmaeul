# 02_NextJS_배포_필수사항

1. package.json => export 추가

```JSON
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next export"
  },
```

2. next.config.js 
```JS
// http://moonjong22.cafe24.com/next_pureunmaeul

const nextConfig = {
  output: 'export',  // 정적 배포
  basePath: '/next_pureunmaeul', // 닷홈 서브폴더 배포 시
  images: {
    unoptimized: true, // 이미지 최적화 기능 끄기 (정적 배포 필수)
  },
  trailingSlash: true,   // SPA 새로고침 404 해결
};

module.exports = nextConfig;

```

3. .env.local 환경변수
```JS

NEXT_PUBLIC_BASE_PATH=/next_pureunmaeul

```

4. HTTP API 절대경로 사용
```JS

    // Section1Componet.jsx
    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/data/section1.json`, {method: 'GET'}) 
        .then((res)=>res.json())
        .then((data)=>{
            setState({
                슬라이드: data.메인슬라이드,
                바로가기: data.바로가기
            })
        })  // 결과 가져오기 상태변수에 저장한기
        .catch((err)=>{
            console.log('fetch 오류!')
        }); // 오류발생시
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    // Section3Componet.jsx
    useEffect(()=>{
        axios({
            url:`${process.env.NEXT_PUBLIC_BASE_PATH}/data/section3.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                공지사항: res.data.공지사항,
                갤러리: res.data.갤러리
            })
        })
        .catch((err)=>{
            console.log( err );
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    // HeaderComponet.jsx
    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/data/header.json`, {method: 'GET'})       
        .then((res)=>res.json())
        .then((data)=>{
            setState({
               네비게이션: data
            })
        })
        .catch((err)=>{
            console.log( err );
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

```
