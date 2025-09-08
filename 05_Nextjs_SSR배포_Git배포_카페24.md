# 05 Nextjs SSR배포 카페24
1. .env.production 생성
```js
NEXT_PUBLIC_BASE_PATH=/next_pureunmaeul
```

2. next.config.js 생성
```js
const nextConfig = {
  basePath: '/next_pureunmaeul'   // 서브폴더 배포
};

module.exports = nextConfig;
```
3. cross-env 설치

```
npm i cross-env --save-dev
```

4. package.json 수정

"start": "cross-env NODE_ENV=production node web.js",

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",

    "start": "cross-env NODE_ENV=production node web.js",

    "lint": "next lint"
  },
```

5. 프로덕션 빌드 및 SSR 실행 테스트

```bash
# 깨끗한 설치
# node_modules 삭제
rm -rf node_modules

# package.json 생성
# package-lock.json 생성
npm i


# 선택
# package-lock.json 생성안함
npm ci 

# 프로덕션 빌드
npm run build
```

6. 프로덕션 빌드 후 SSR 실행 테스트 => 노드.js 서버 실행 => cross-env NODE_ENV=production node web.js 
```bash
npm run start

#또는 

npm start
```

7. 배포 폴더 경로 실행 /next_pureunmaeul 

SSR 웹배포주소 테스트 http://localhost:3000/next_pureunmaeul

웹페이지 확인 => OK





# 개인키/퍼블릭키 생성 → Git 원격 연결 → push 순서를 차례대

8. 로컬에서 SSH Key 생성

# 1. 개인키/퍼블릭키 생성
# 1-1. 먼저, 기존 키가 있는지 확인
ls -al ~/.ssh

```bash
$ ls -al ~/.ssh
total 20
drwxr-xr-x 1 user 197121 0  9월  8 06:17 ./
drwxr-xr-x 1 user 197121 0  9월  7 23:07 ../
```

# 1-2. SSH 키 생성 (이름·비밀번호 포함)

ssh-keygen -t rsa -C "moonjong"  => 키 길이 기본 2048비트
ssh-keygen -t rsa -b 4096 -C "cafe24 (moonjong)" -f ~/.ssh/moonjong  =>  키 길이 요즘 4096비트

```
1) 가장 간단한 방법 (짧고 기본값 사용)
ssh-keygen -t rsa -C "moonjong"

키 길이: 기본 2048비트 (안전하긴 하지만 요즘은 4096 권장)
파일 이름: ~/.ssh/id_rsa / id_rsa.pub
주석(comment): moonjong
👉 GitHub, 카페24 둘 다 사용 가능하지만, 여러 키를 관리할 땐 파일 이름이 겹칠 수 있어 헷갈릴 수 있습니다.

2) 보안 + 관리 최적화 방법 (추천)
ssh-keygen -t rsa -b 4096 -C "cafe24 (moonjong)" -f ~/.ssh/moonjong

키 길이: 4096비트 (더 강력)
파일 이름: ~/.ssh/moonjong / moonjong.pub
주석(comment): cafe24 (moonjong) → 카페24 용 키라는 걸 알기 쉽게 표시
여러 키(GitHub, 카페24 등)를 충돌 없이 구분할 수 있음
👉 나중에 ~/.ssh/config에서 IdentityFile ~/.ssh/moonjong으로 지정해 주면, 카페24 전용 키로만 접속하게 됩니다.
✅ 정리:
간단하게 하고 싶다 → 방법 ①
보안·관리 깔끔하게 → 방법 ② (추천)

```

키 이름 "moonjong"
키 비밀번호 "moonjong1234"

```bash
ssh-keygen -t rsa -b 4096 -C "cafe24 (nextpureunmaeul)" -f ~/.ssh/moonjong
Generating public/private rsa key pair.
Enter passphrase (empty for no passphrase): moonjong1234
Enter same passphrase again: moonjong1234
```

git commit -m "node_modules for Cafe24"

moonjong1234

```
$ ssh-keygen -t rsa -b 4096 -C "cafe24 (nextpureunmaeul)" -f ~/.ssh/moonjong
Generating public/private rsa key pair.
Enter passphrase for "/c/Users/user/.ssh/moonjong" (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /c/Users/user/.ssh/moonjong
Your public key has been saved in /c/Users/user/.ssh/moonjong.pub
The key fingerprint is:
SHA256:h2pVD+ePBFvSJwssDB2jbBjs2NT3w7E2TZ9ZHB5GQGs cafe24 (nextpureunmaeul)
The key's randomart image is:
+---[RSA 4096]----+
|   .....o.  .oo*.|
|    o+.+oo... + +|
|   =. +.ooB==E.= |
|  . o.   +B@o++  |
|        S.oo=    |
|       o . . o   |
|      o     . .  |
|     .           |
|                 |
+----[SHA256]-----+
```

결과:
개인키: ~/.ssh/moonjong
퍼블릭키: ~/.ssh/moonjong.pub


#9. 퍼블릭키 등록
```bash
cat ~/.ssh/moonjong.pub
```

결과:
```
$ cat ~/.ssh/moonjong.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDFJPOPAsZaE2v4UCWThIH9LZ6vSOMU59/ijxsiA7yxQpP93lH0ULhTb586ybYdUWJKUK1FPevIPQAkHvK8PHXOCvOLOWQLxtSS5sBrpdz32xOy23+nNoTWwMAdeWoCxkp5j6xHm9bnF6LczoULyEAn+MWcdQCAaYofoILbi2b7O8krCIEPAf+lJD/PZHgOp6OZtlFvHuQ7u2kigeBFXljr23iPthlUyR4ub/1j6xudVE+UPysLqLolaa1NZFJ3mrWe9iZIrxvQZOyWr2Ty9eJimxjdVQQRX3w+5dnJ0tBKTT9mf/fbH/wv3nb4sFlotawYbiOyZJV8B3+TQXQYTb8NbZCKse9CmxEh+ALnRluevce/Z7V6oVNDSEVC90zv4AxaGjAJZGE655tqtQKgGFHgAgQ3/WxKyc9uyJJMmAaBPTGLhLKLUGWZdO/17Q2i+4MoWg+1fX0GEgkNlikpJQ7xb8Fb3QLGm5Qx6sNulxqppqaSDUJd8W+t/H8puDxhMMep9K79mfsZdKlOSwffkASlpljrJGFO4aP8YlG7l2PM60+h242g1yjxLmwnkMhLn05EHeCy3k+y1qsDwJWygOt1ZGnsKX+cajHkgndQMXKlcDNaNyyNtzRgTYg2H6Kr0ToGjSRk2HGtFDMIF6C9okdMiFyJssBgASRIC3h94jHffw== cafe24 (nextpureunmaeul)
```

9. SSH Config 설정
```bash
nano ~/.ssh/config
```

```
Host cafe24
    HostName moonjong22.cafe24app.com   # 카페24 앱 저장소 화면에 보이는 HostName으로 교체
    User git
    IdentityFile ~/.ssh/moonjong
    IdentitiesOnly yes
```



10.  GitHub 리포지토리 생성 => next_pureunmaeul

https://github.com/moonjongjs/next_pureunmaeul.git

moon0108#
11. GitHub에 SSH 키 등록
    1) GitHub 로그인 → 오른쪽 상단 프로필 → Settings
    2) 왼쪽 메뉴 → SSH and GPG keys
    3) New SSH key 클릭
    4) 입력:
    Title: moonjong (local PC) 같은 설명 (자유롭게)
    Key type: Authentication Key 그대로 두기
    Key: 아까 복사한 퍼블릭 키(moonjong.pub 내용) 붙여넣기
    5) Add SSH key 버튼 클릭

    6) SSH 연결 테스트

       GitHub 접속 테스트
       
       ssh -T git@github.com

```bash  
        # 정상 접속 상태
        $ ssh -T git@github.com
        Hi moonjongjs! You've successfully authenticated, but GitHub does not provide shell access.

```
       
       # 오류가 있는경우

```bash
        # 오류가 있는경우
        $ ssh -T git@github.com
        The authenticity of host 'github.com (20.200.245.247)' can't be established.
        ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
        This key is not known by any other names.
        Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
        Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
        git@github.com: Permission denied (publickey).
```

        # ssh-agent가 실행되지 않아서 ssh-add가 키를 등록 못 하는 상황이에요.
          Windows (특히 Git Bash, PowerShell)에서 자주 나옵니다.
          차례대로 해결

            1) Git Bash에서 ssh-agent 실행
            터미널에 입력:
            eval "$(ssh-agent -s)"
            정상 출력 예:
            Agent pid 12345

            2) 키 추가
            ssh-add ~/.ssh/moonjong
            여기서 패스프레이즈 (moonjong1234) 입력하면 캐싱됩니다.

            확인:
            ssh-add -l

            결과 예:
            4096 SHA256:xxxxx cafe24 (moonjong) (RSA)



```
    ssh -T git@github.com

```


11. 로컬 프로젝트 Git 초기화 & 원격 연결

git init
git config user.name 'moonjongjs'
git config user.email 'moonseonjong@naver.com'

# SSH 키 없는경우
git remote add origin 'https://github.com/moonjongjs/next_pureunmaeul.git'

# SSH 키 있는경우
git remote add origin git@github.com:moonjongjs/next_pureunmaeul.git


```
# 이미 origin을 HTTPS로 추가했다면, 아래처럼 SSH 주소로 바꾸면 됩니다.

1) 현재 원격 확인
git remote -v


# 예시 출력 (HTTPS로 되어있을 때):
origin  https://github.com/moonjongjs/next_pureunmaeul.git (fetch)
origin  https://github.com/moonjongjs/next_pureunmaeul.git (push)

2) 원격 주소를 SSH로 교체
git remote set-url origin git@github.com:moonjongjs/next_pureunmaeul.git

3) 다시 확인
git remote -v

결과:
origin  git@github.com:moonjongjs/next_pureunmaeul.git (fetch)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (push)

```

git add .
git commit -m 'Next Deploy'
git push -u origin master

# "내 로컬 master 브랜치를 원격 origin/master에 푸시하고, 
# 앞으로 기본 upstream 브랜치로 설정해라"
# -u = --set-upstream

# git push origin master
# git push origin master

# -u 옵션 편리함
#  git push
#  git pull





12. 카페24 배포 => 카페24 앱 생성 (이름: nextpureunmaeul)
```
![alt text](image.png)

git moonjong22@nextpureunmaeul.cafe24app.com:moonjong22_nextpureunmaeul

```

13. Public Key 등록 → Key 할당 (이미 moonjong.pub을 등록하셨다면, 앱에 할당 필요)

![alt text](image-1.png)

키 이름 : nextpureunmaeulkey

키할당
![alt text](image-2.png)


14. 앱 화면에서 저장소 주소 확인 (예: git@moonjong22.cafe24app.com:nextpureunmaeul.git)



15. 로컬 프로젝트에서 카페24 원격 추가:
```BASH

git remote add cafe24 ssh://moonjong22@nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul


$ git remote -v
cafe24  ssh://moonjong22@nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul (fetch)
cafe24  ssh://moonjong22@nextpureunmaeul.cafe24app.com/moonjong22_nextpureunmaeul (push)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (fetch)
origin  git@github.com:moonjongjs/next_pureunmaeul.git (push)
```

# 브랜치 확인
$ git branch
* master
로컬이 master라면:
git push -u cafe24 master

16. 푸시 (카페24는 기본 master 브랜치 사용):
```BASH
git push -u cafe24 master

```
17. 카페24 관리자에서 → 앱 실행 클릭

18. 브라우저에서 https://nextpureunmaeul.cafe24app.com 접속 → SSR 페이지 확인
                https://nextpureunmaeul.cafe24app.com/next_pureunmaeul


1. 원격 내용을 무시하고 강제로 덮어쓰기 (저장소를 깨끗이 새로 올릴 때)
⚠️ GitHub에 있는 기존 내용이 다 사라집니다.
git push -u origin master --force

