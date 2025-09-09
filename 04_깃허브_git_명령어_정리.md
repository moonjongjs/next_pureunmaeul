# 09 깃허브 git 명령어 정리

# 1. 디렉토리 & SSH 키 관리
# 디렉토리 목록
```BASH
ls
ls -al
```

# 디렉토리 & SSH 키 관리 &  ssh 키목록 : 현재 사용자 계정의 SSH 키 파일 목록 확인
```BASH
ls -al ~/.ssh
```

# ssh 키삭제
# ls -al ~/.ssh/키이름  => 특정 키 삭제 (개인키와 공개키 둘 다 삭제 가능)
```BASH
rm -f ~/.ssh/id_rsa ~/.ssh/moonjong
rm -f ~/.ssh/id_rsa ~/.ssh/id_rsa.pub
rm -f ~/.ssh/id_rsa ~/.ssh/moonjong.pub
```




# 2. Git 기초
# git 설정 => 새 Git 저장소 초기화
```BASH
git init
```

# git 변경된 파일 상태 확인 
```BASH
git status
```

# 브랜치와 커밋 기록 간단히 보기
```BASH
git log --oneline --graph --all
```




# 3. 스테이징 & 캐시 관리
# 스테이징 & 캐시 관리
- 모든 파일 추가
```BASH
git add .
```

- git add 파일명 : 특정 파일만 스테이징
```BASH
git add abc.jpg
```

- out 폴더 강제로 추가 => .gitignore에 있어도 강제로 추가
```BASH
    git add -f out  
```

- 불필요 캐시 제거 (이미 올라간 내역 청소) node_modules .next build
  이미 커밋된 불필요 파일들을 Git 인덱스에서만 제거 (실제 파일은 남음)
```BASH
git rm -r --cached node_modules .next build
```




# 4. 커밋
# git 커밋
```BASH
git commit -m "first commit"
git commit -m "메시지" : 커밋 메시지 남기기
git commit --amend : 방금 커밋 수정
git reset --soft HEAD~1 : 마지막 커밋 취소(파일은 유지)
git reset --hard HEAD~1 : 마지막 커밋과 파일 변경사항까지 제거

```






# 5. 브랜치
# git 브랜치 설정
- Tip: main/master 외에도 작업 단위별로 브랜치를 나눠 쓰면 협업/실험이 편해집니다.
```BASH
git branch -M main : 현재 브랜치를 main으로 강제 변경
git checkout -b feature/login : 새로운 브랜치 생성 후 이동
git merge feature/login : feature/login 브랜치를 현재 브랜치에 병합
git branch -M master
git branch -M main

# 브랜치 추가
git checkout -b next

git add .
git commit -m "Active Branches Commit using our Git connections."
git push origin test-preview
```




# 6. 원격 저장소(Remote) 관리
# 원격 오리진 이름변경  
```BASH
git remote rename github origin
```

# 원격 오리진 이름삭제  
```BASH
git remote remove cafe24
```

# 원격 오리진 모두삭제  
```BASH
git remote remove origin
```

# 원격 오리진 목록확인  
```BASH
git remote -v
```

# 원격 오리진 이름추가  
```BASH
git remote add origin https://github.com/moonjongjs/next_pureunmaeul.git

```



# 7. 푸시(push) & 풀(pull)
# git 푸쉬 방법
```BASH
git push -u github master: 원격(main)에 처음 푸시 (upstream 연결)
git push -u origin main : 원격(main)에 처음 푸시 (upstream 연결)
git push : 이후부터는 간단히 푸시 가능

git push github master
git push github main

# git pull = git fetch + git merge
git pull origin master : 원격에서 가져오기 & 병합
git pull origin main : 원격에서 가져오기 & 병합
git fetch : 원격 저장소에서 변경사항만 가져오기 (병합은 직접)
```




# 8. 태그(Tag) & 릴리즈
- 보통 배포 시점마다 태그를 걸어두면 추후 롤백하기 편합니다.
```BASH
git tag v1.0.0 : 특정 버전에 태그 달기
git push origin v1.0.0 : 원격으로 태그 푸시
git tag -d v1.0.0 : 로컬 태그 삭제
```



# SSH Public Key 만들기(완전 가이드) 
# 새 키 발급
# 1. 키 생성 (권장: 전용 파일명 사용)
```BASH
ssh-keygen -t rsa -b 4096 -C "nextjs_project" -f ~/.ssh/next
ssh-keygen -t rsa -b 4096 -C "nextapp_project" -f ~/.ssh/nextapp
ssh-keygen -t rsa -b 4096 -C "moonjong_ssh_key" -f ~/.ssh/moonjong
```
# 자세한 설명
ssh-keygen          ? SSH 키 생성 명령어
-t rsa              ? RSA 알고리즘 사용 (권장: ed25519)
-b 4096             ? 키 길이 (4096bit → 더 안전)
-C "nextjs_project" ? 키에 붙는 주석 (보통 프로젝트 이름/이메일)
-f ~/.ssh/next      ? 저장할 파일 이름(키이름) 지정

# 퍼블릭 키 구분(개인키, 공개키)
next            ← 개인키 (private key) (절대 공유 X)
next.pub        ← 공개키 (public key, 카페24에 등록한 것) 공개키 (서버나 GitHub에 등록)

nextapp         ← 개인키 (private key) (절대 공유 X)
nextapp.pub     ← 공개키 (public key, 카페24에 등록한 것) 공개키 (서버나 GitHub에 등록)

moonjong        ← 개인키 (private key) (절대 공유 X)
moonjong.pub    ← 공개키 (public key, 카페24에 등록한 것) 공개키 (서버나 GitHub에 등록)


# 2. 키 목록 
```BASH
$ ls -al ~/.ssh
drwxr-xr-x 1 user 197121    0  9월  9 00:50 ./
drwxr-xr-x 1 user 197121    0  9월  8 21:47 ../
-rw-r--r-- 1 user 197121  100  9월  9 00:06 config
-rw-r--r-- 1 user 197121 3389  9월  8 21:27 id_rsa
-rw-r--r-- 1 user 197121  752  9월  8 21:27 id_rsa.pub
-rw-r--r-- 1 user 197121 1230  9월  8 23:59 known_hosts
-rw-r--r-- 1 user 197121  939  9월  8 10:07 known_hosts.old
-rw-r--r-- 1 user 197121 3381  9월  9 00:50 next
-rw-r--r-- 1 user 197121  740  9월  9 00:50 next.pub
-rw-r--r-- 1 user 197121 3381  9월  9 00:52 nextapp
-rw-r--r-- 1 user 197121  741  9월  9 00:52 nextapp.pub    
-rw-r--r-- 1 user 197121 3381  9월  9 00:53 moonjong
-rw-r--r-- 1 user 197121  742  9월  9 00:53 moonjong.pub
```

# 3. 공개키 (public key) 확인
```BASH
$ cat ~/.ssh/next.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDfRE1z2oxpTVw6t5N+egymOX0IC+wn2QCMOWVQzIptsgSCRyy+hC8KgDKucNRx3JqvSQoPq7VqmTPjSHxl/608GU4lab6RBKMrFE1whKlRuRH4XFdDgGvio9GOqWEu44EgkTw2TH4nvaHG9y7ah9IGUabBBSxc7lm+YiN5M7QGPR/tiRXFS1/RPIWZEyYss+QpaJHDJ4lYwOtqt0USXwWaGPhA8HqjpPeXdFN06YpyiENxF6ysVFhKrVlJDcSpmBS8IlA6aDDW5sClJFfFBM2Ah7d/yWXdx6Yew2J+oE4oWuWRJYiUu2Fsy/K4GXozvjjXZepzHa69TbZpWLRBmK5tbj/r+sxc1GgN5tKf4GSWJbp8RV3Wm2pGBZCXCh5xfR4xAzgwMgW6y62SE5EDy2+eu5iDNjdTk351eG0uZdBA6LP8wkpZl9oj8EeFHKhXFS8jnKaiYF17gbKxmaMHq4JnenGDLpMB42j14eZmG99Y9S36e+qXriRDWNVqKrXeeAM+ugo2xEIbsW89g61bbeWGloJI1/KseS9Jm2go9Aq0DEWRqdQBTpRyqI2ok9LT9b8xdTrfuGArmqhNWcqDtdJ4XLmFZqowj5DqsUYnrVAmBOJGDq7jAYVtYSRQ5T5FmJ8UY9Od1TbHiT8MgoNVc2oAeVrueFBiAUo89sHkQeuAiQ== nextjs_project

$ cat ~/.ssh/nextapp.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDXIT/Rc7FYm2WvJlW4YCV45MBPMzjsVoRIO67oz4ipoHrqvRwE7OdPQuLegHMe5QNtCEWs0FtjIX8z8nmmFQCJe4W1F2/xJ2TlzMCstVC8kkH7Nu/zXA87ZuzQpbKbG988ZR/kx3WMoBZ/CalmCE3p4l+f9aiTVdwbxJf/fi23upG+VEMmUNSnjR5vWdCFjlwsaA0qd3udnHwTPWHEr/ds0bP7Lh1Y636wyVechipJSaz3tbTCBHaOwg6MOEmdAA9+10uIjVmPMBn4nUwwFtlaY72hTU0yNB5h3vwnled3aZ7H9xZ35xKvZRBoWmoxYBH0QEIpDOkoH2U62vWArrak90+3dB+iUkzzWDuNIn4ZjRAVwDoC6SqZOZyf/jqFwIvvbYK2XD1EKrjiHRzMnLEnKAmhBBqaF4mLysZPneoeT84PfujpYoINmO4ZsYOhDRyI/UgVxtRGvJOIf8/ez94HhmL7YJ6eaCB61hHLLDdoRc+W/P66uD5r5EBRJxY5mO+2VWlHWeirt/qTbMJYLxzlb51S7I2kllzHSruJusu0XFo9l0yPAHs0yciq9sJEdGuvtqvoBkt2uO340NHJSlA6Yfzk4koFrskrubOapOvtsJNp3ygXOPVeiBvQqfayFdPkLHzTMyf9//CwcxAlXd+9EC8FpdbjeEW+ygVR9QNhtQ== nextapp_project

$ cat ~/.ssh/moonjong.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC55bMuhfp6ExFghaypie3puf8ji4Tc3OoNdBfLzdHGZe4i2NziiyWakBue7S8+om8dYyozg7vZcULxKA6j/MRdjpI3yoQeDk9QThKrET+/Mzglv8fe3Pzd5DSh7u2mUk0z5oxKmPxzZznxynYMolhIFOG+u2hMn3HRAWYD/5QuFQqlXEu5hRv46GhWwxYcmbkjJUtYcQI4FQ+hQPNlvhO+cbl1GlLoJmQy9H76t/U6A3hOmcLbHAgwK7l9+PSupDWOGnD/7v+Z/GYZsIYJDmigKkvvgYSjA97ssKm8p5ewujr7qrnnbEnzjpYVlNbXCg+Kxfu63WWxaVdxEozoyLE6tIFsMJW4aJnjRowouFOzWTV/FtZUDC5fp0WeSqQqAnukOFGGxfK18eXVxLFBlqP/78Wp0PkQ/VbpwWsyGSHih+Gu4ujBffBHDO9AwEV+6Xq0hxWXhaUKtD0aSmYL8rAEFNMgbQMi4hniV6h20u53lRKrvrMf8iS3V1Peg7KH/nEK4/GDLj6lmev3Vu8+KA4J4IVayfJERsD7K7mdR4ln+12IiUjMGB8fmxpJviT+rx2AJIX4AM929DV7+NKOYr9fwMRjgZNRiFwmRFVX2hOqxSyxgMngOFIfBqCr+yaY/o3Ql0DNbGciNv+Bf21m1kxlhBE4wQndS6sC2MoxB434dQ== moonjong_ssh_key

```

# 4. ssh-agent에 비밀키 올리기
# 4-1 (Windows Git Bash) 에이전트 구동
```BASH
eval $(ssh-agent -s)
```
# 4-2 방금 만든 비밀키 추가
```BASH
ssh-add ~/.ssh/nextapp
```

# SSH Config (~/.ssh/config) 예시
- moonjong 키이름
```BASH
$ nano ~/.ssh/config

Host github
    HostName github.com
    User git
    IdentityFile ~/.ssh/moonjong
```

- nextapp 키이름
```BASH
$ nano ~/.ssh/config

Host cafe24
    HostName next.cafe24app.com
    User moonjong22
    Port 22
    IdentityFile ~/.ssh/nextapp
```

# 5. SSH 접속 별칭 설정 (~/.ssh/config)
# 파일 열기: nano ~/.ssh/config (또는 메모장/VSCode 등)
```BASH
nano ~/.ssh/config

Host cafe24
    HostName next.cafe24app.com   # ← 앱 도메인 (예: next.cafe24app.com)
    User moonjong22               # ← 카페24 아이디
    Port 22
    IdentityFile ~/.ssh/nextapp   # ← 방금 만든 전용 키
```

# GitHub 접속
```BASH
ssh -T github → GitHub 접속
```

# 카페24 접속
```BASH
ssh -T cafe24 → 카페24 접속
```


# 6 카페24에 Public Key 등록
- 호스팅관리 → Public key 관리 이동
- Public Key 이름: 예) next_key_2025_09
- Public Key 입력: 공개키 파일 내용을 복사해 붙여넣기
```BASH
cat ~/.ssh/nextapp.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDXIT/Rc7FYm2WvJlW4YCV45MBPMzjsVoRIO67oz4ipoHrqvRwE7OdPQuLegHMe5QNtCEWs0FtjIX8z8nmmFQCJe4W1F2/xJ2TlzMCstVC8kkH7Nu/zXA87ZuzQpbKbG988ZR/kx3WMoBZ/CalmCE3p4l+f9aiTVdwbxJf/fi23upG+VEMmUNSnjR5vWdCFjlwsaA0qd3udnHwTPWHEr/ds0bP7Lh1Y636wyVechipJSaz3tbTCBHaOwg6MOEmdAA9+10uIjVmPMBn4nUwwFtlaY72hTU0yNB5h3vwnled3aZ7H9xZ35xKvZRBoWmoxYBH0QEIpDOkoH2U62vWArrak90+3dB+iUkzzWDuNIn4ZjRAVwDoC6SqZOZyf/jqFwIvvbYK2XD1EKrjiHRzMnLEnKAmhBBqaF4mLysZPneoeT84PfujpYoINmO4ZsYOhDRyI/UgVxtRGvJOIf8/ez94HhmL7YJ6eaCB61hHLLDdoRc+W/P66uD5r5EBRJxY5mO+2VWlHWeirt/qTbMJYLxzlb51S7I2kllzHSruJusu0XFo9l0yPAHs0yciq9sJEdGuvtqvoBkt2uO340NHJSlA6Yfzk4koFrskrubOapOvtsJNp3ygXOPVeiBvQqfayFdPkLHzTMyf9//CwcxAlXd+9EC8FpdbjeEW+ygVR9QNhtQ== nextapp_project
```


# 7 앱에 키 “할당”
- 호스팅관리 → 앱 생성/관리 → (앱 선택)
- 상단 버튼 중 [key 할당] 클릭
- 왼쪽(사용 가능한 키)에서 방금 등록한 키를 선택 → ▶ 버튼으로 오른쪽(사용중인) 으로 이동
- 확인(저장)
- 키를 “등록”만 하고 “할당”하지 않으면 push가 무조건 DENIED 됩니다


# 8 연결 테스트
```BASH
ssh -T cafe24
```


# 9 Git 원격(remote) 등록 & 푸시
- 카페24 앱 리스트의 저장소 형식을 그대로 사용합니다. (보통 .git 확장자 없이)
```BASH
git remote remove cafe24 2>/dev/null
git remote add cafe24 moonjong22@next.cafe24app.com:moonjong22_next
git remote -v
# cafe24  moonjong22@next.cafe24app.com:moonjong22_next (fetch)
# cafe24  moonjong22@next.cafe24app.com:moonjong22_next (push)

# 첫 푸시
git push cafe24 master
```


# 10. Git 문제 해결 자주 쓰는 명령
```BASH
git reflog : 모든 커밋/리셋/체크아웃 이력 보기 (복구 가능)
git stash : 현재 작업중인 변경사항 임시 저장
git stash pop : 임시 저장된 변경사항 복원
git diff : 변경된 부분 비교
git blame 파일명 : 특정 파일의 각 줄을 누가, 언제 수정했는지 확인
```


# 정리
```BASH
Git 기본 워크플로우 : init → add → commit → remote add → push
SSH 키 관리 : 여러 키를 발급해서 config로 구분 관리
실무 필수 : .gitignore, 브랜치 전략, 태그/릴리즈, stash, reflog
```

