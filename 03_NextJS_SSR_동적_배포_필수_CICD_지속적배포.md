# 03 NextJS SSR 동적 배포 필수 깃허브 & 버셀 CICD 지속적 배포

1. package.json.js  설정  
```JS  
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "node web.js"
  }
```

2. next.config.js  설정
```JS
    const nextConfig = {
        reactStrictMode: true,
        output: "standalone",
        images: { unoptimized: true },
        eslint: { ignoreDuringBuilds: true }
    };
    module.exports = nextConfig;
```

3. API 경로 & 이미지 경로 => / 절대경로 사용

```JSX
    fetch(`/data/section1.json`, {method: 'GET'}) 

    axios({
        url:`/data/section3.json`,
        method: 'GET'
    })

    <img src={`/images/${item.이미지}`} alt={item.코멘트}/>
```
