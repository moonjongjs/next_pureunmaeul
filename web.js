const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 8001;
const app = next({ dev: false, dir: "." }); // 현재 디렉토리 기준 실행
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`✅ Next.js SSR running on port ${port}`);
  });
});
