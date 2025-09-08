const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false; // 항상 배포 모드
const port = process.env.PORT || 8001; // 카페24에서 할당해주는 포트 사용
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`✅ Next.js running on http://localhost:${port}`);
  });
});
