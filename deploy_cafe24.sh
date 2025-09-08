#!/bin/bash

echo "📦 [1/4] 기존 node_modules 제거"
rm -rf node_modules

echo "📥 [2/4] 프로덕션 전용 모듈 설치"
npm install --production

echo "🗜️ [3/4] node_modules 압축"
tar -czf node_modules.tar.gz node_modules

echo "🚀 [4/4] Git 커밋 & Cafe24 Push"
git add -f node_modules.tar.gz
git commit -m "deploy: production node_modules for Cafe24"
git push cafe24 master

echo "✅ 배포 완료 (서버에서 압축 해제 필요)"