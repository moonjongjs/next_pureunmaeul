# 08_Nextjs_카페24_동적배포_.md
GitHub: https://github.com/moonjongjs/next_pureunmaeul.git 생성 완료

git init
git add .
git commit -m "first commit"

git branch -M master

nextpureunmaeulpublic

git remote add github https://github.com/moonjongjs/next_pureunmaeul.git
git push -u github master

1) 로컬 프로젝트에서 카페24 원격 저장소 등록
git remote add cafe24 ssh://moonjong22@nextpureunmaeul.cafe24app.com:22/home/hosting_users/moonjong22/git/moonjong22_nextpureunmaeul

git remote add cafe24 ssh://moonjong22@nextpureunmaeul.cafe24app.com:22/home/hosting_users/moonjong22/git/moonjong22_nextpureunmaeul


# SSH Key 발급 & 등록 절차
1) 기존 키 확인 / 삭제

ls -al ~/.ssh


# id_rsa, id_rsa.pub 같은 파일이 보이면 백업 후 삭제하거나 이름을 바꿔주세요.
(안 지우면 충돌할 수 있음)

rm -f ~/.ssh/id_rsa ~/.ssh/id_rsa.pub
rm -f ~/.ssh/id_rsa ~/.ssh/moonjong.pub
rm -f ~/.ssh/id_rsa ~/.ssh/moonjong
$ ls -al ~/.ssh
total 37
drwxr-xr-x 1 user 197121    0  9월  8 21:20 ./
drwxr-xr-x 1 user 197121    0  9월  8 17:55 ../
-rw-r--r-- 1 user 197121  188  9월  8 08:55 config
-rw-r--r-- 1 user 197121 1130  9월  8 10:07 known_hosts
-rw-r--r-- 1 user 197121  939  9월  8 10:07 known_hosts.old
-rw-r--r-- 1 user 197121 3434  9월  8 08:44 moonjong
-rw-r--r-- 1 user 197121  750  9월  8 08:44 moonjong.pub

2) 새 키 발급
ssh-keygen -t rsa -b 4096 -C "nextpureunmaeulkey@cafe24.com"

id_rsa        ← 개인키 (private key)
id_rsa.pub    ← 공개키 (public key, 카페24에 등록한 것)



# 퍼블릭키 생성  ssh-keygen -t rsa -b 4096 -C "nextcafe24.com"
- 키이름 nextcafe24
- 키생성 ssh-keygen -t rsa -b 4096 -C "nextcafe24.com"

# 퍼블릭키 목록 확인
  ls -al ~/.ssh

    $ ls -al ~/.ssh
    total 37
    drwxr-xr-x 1 user 197121    0  9월  8 22:22 ./
    drwxr-xr-x 1 user 197121    0  9월  8 21:47 ../
    -rw-r--r-- 1 user 197121  100  9월  9 00:06 config
    -rw-r--r-- 1 user 197121 3389  9월  8 21:27 id_rsa
    -rw-r--r-- 1 user 197121  752  9월  8 21:27 id_rsa.pub
    -rw-r--r-- 1 user 197121 1230  9월  8 23:59 known_hosts
    -rw-r--r-- 1 user 197121  939  9월  8 10:07 known_hosts.old


    # SSH Public Key 만들기(완전 가이드) 

    # 1. 키 생성 (권장: 전용 파일명 사용)
    ssh-keygen -t rsa -b 4096 -C "nextjs_project" -f ~/.ssh/next
    ssh-keygen -t rsa -b 4096 -C "nextapp_project" -f ~/.ssh/nextapp
    ssh-keygen -t rsa -b 4096 -C "moonjong_ssh_key" -f ~/.ssh/moonjong

    # 2. 키 목록 
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

    # 3. 퍼블릭키 확인
        $ cat ~/.ssh/next.pub
        ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDfRE1z2oxpTVw6t5N+egymOX0IC+wn2QCMOWVQzIptsgSCRyy+hC8KgDKucNRx3JqvSQoPq7VqmTPjSHxl/608GU4lab6RBKMrFE1whKlRuRH4XFdDgGvio9GOqWEu44EgkTw2TH4nvaHG9y7ah9IGUabBBSxc7lm+YiN5M7QGPR/tiRXFS1/RPIWZEyYss+QpaJHDJ4lYwOtqt0USXwWaGPhA8HqjpPeXdFN06YpyiENxF6ysVFhKrVlJDcSpmBS8IlA6aDDW5sClJFfFBM2Ah7d/yWXdx6Yew2J+oE4oWuWRJYiUu2Fsy/K4GXozvjjXZepzHa69TbZpWLRBmK5tbj/r+sxc1GgN5tKf4GSWJbp8RV3Wm2pGBZCXCh5xfR4xAzgwMgW6y62SE5EDy2+eu5iDNjdTk351eG0uZdBA6LP8wkpZl9oj8EeFHKhXFS8jnKaiYF17gbKxmaMHq4JnenGDLpMB42j14eZmG99Y9S36e+qXriRDWNVqKrXeeAM+ugo2xEIbsW89g61bbeWGloJI1/KseS9Jm2go9Aq0DEWRqdQBTpRyqI2ok9LT9b8xdTrfuGArmqhNWcqDtdJ4XLmFZqowj5DqsUYnrVAmBOJGDq7jAYVtYSRQ5T5FmJ8UY9Od1TbHiT8MgoNVc2oAeVrueFBiAUo89sHkQeuAiQ== nextjs_project

        $ cat ~/.ssh/nextapp.pub
        ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDXIT/Rc7FYm2WvJlW4YCV45MBPMzjsVoRIO67oz4ipoHrqvRwE7OdPQuLegHMe5QNtCEWs0FtjIX8z8nmmFQCJe4W1F2/xJ2TlzMCstVC8kkH7Nu/zXA87ZuzQpbKbG988ZR/kx3WMoBZ/CalmCE3p4l+f9aiTVdwbxJf/fi23upG+VEMmUNSnjR5vWdCFjlwsaA0qd3udnHwTPWHEr/ds0bP7Lh1Y636wyVechipJSaz3tbTCBHaOwg6MOEmdAA9+10uIjVmPMBn4nUwwFtlaY72hTU0yNB5h3vwnled3aZ7H9xZ35xKvZRBoWmoxYBH0QEIpDOkoH2U62vWArrak90+3dB+iUkzzWDuNIn4ZjRAVwDoC6SqZOZyf/jqFwIvvbYK2XD1EKrjiHRzMnLEnKAmhBBqaF4mLysZPneoeT84PfujpYoINmO4ZsYOhDRyI/UgVxtRGvJOIf8/ez94HhmL7YJ6eaCB61hHLLDdoRc+W/P66uD5r5EBRJxY5mO+2VWlHWeirt/qTbMJYLxzlb51S7I2kllzHSruJusu0XFo9l0yPAHs0yciq9sJEdGuvtqvoBkt2uO340NHJSlA6Yfzk4koFrskrubOapOvtsJNp3ygXOPVeiBvQqfayFdPkLHzTMyf9//CwcxAlXd+9EC8FpdbjeEW+ygVR9QNhtQ== nextapp_project

        $ cat ~/.ssh/moonjong.pub
        ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC55bMuhfp6ExFghaypie3puf8ji4Tc3OoNdBfLzdHGZe4i2NziiyWakBue7S8+om8dYyozg7vZcULxKA6j/MRdjpI3yoQeDk9QThKrET+/Mzglv8fe3Pzd5DSh7u2mUk0z5oxKmPxzZznxynYMolhIFOG+u2hMn3HRAWYD/5QuFQqlXEu5hRv46GhWwxYcmbkjJUtYcQI4FQ+hQPNlvhO+cbl1GlLoJmQy9H76t/U6A3hOmcLbHAgwK7l9+PSupDWOGnD/7v+Z/GYZsIYJDmigKkvvgYSjA97ssKm8p5ewujr7qrnnbEnzjpYVlNbXCg+Kxfu63WWxaVdxEozoyLE6tIFsMJW4aJnjRowouFOzWTV/FtZUDC5fp0WeSqQqAnukOFGGxfK18eXVxLFBlqP/78Wp0PkQ/VbpwWsyGSHih+Gu4ujBffBHDO9AwEV+6Xq0hxWXhaUKtD0aSmYL8rAEFNMgbQMi4hniV6h20u53lRKrvrMf8iS3V1Peg7KH/nEK4/GDLj6lmev3Vu8+KA4J4IVayfJERsD7K7mdR4ln+12IiUjMGB8fmxpJviT+rx2AJIX4AM929DV7+NKOYr9fwMRjgZNRiFwmRFVX2hOqxSyxgMngOFIfBqCr+yaY/o3Ql0DNbGciNv+Bf21m1kxlhBE4wQndS6sC2MoxB434dQ== moonjong_ssh_key


    # 4. ssh-agent에 비밀키 올리기
        # 4-1 (Windows Git Bash) 에이전트 구동
        eval $(ssh-agent -s)

        # 4-2 방금 만든 비밀키 추가
        ssh-add ~/.ssh/nextapp

    # 5. SSH 접속 별칭 설정 (~/.ssh/config)

    # 파일 열기:  
    # nano ~/.ssh/config   (또는 메모장/VSCode 등)

    Host cafe24
        HostName next.cafe24app.com   # ← 앱 도메인 (예: next.cafe24app.com)
        User moonjong22               # ← 카페24 아이디
        Port 22
        IdentityFile ~/.ssh/nextapp   # ← 방금 만든 전용 키


    # 6 카페24에 Public Key 등록
        - 호스팅관리 → Public key 관리 이동
        - Public Key 이름: 예) next_key_2025_09
        - Public Key 입력: 공개키 파일 내용을 복사해 붙여넣기
```
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
```
        ssh -T cafe24
```


    # 9 Git 원격(remote) 등록 & 푸시
        - 카페24 앱 리스트의 저장소 형식을 그대로 사용합니다. (보통 .git 확장자 없이)
```
        git remote remove cafe24 2>/dev/null  # 있으면 제거(무시해도 됨)
        git remote add cafe24 moonjong22@next.cafe24app.com:moonjong22_next
        git remote -v
        # cafe24  moonjong22@next.cafe24app.com:moonjong22_next (fetch)
        # cafe24  moonjong22@next.cafe24app.com:moonjong22_next (push)

        # 첫 푸시
        git push cafe24 master
```





저장 위치 물어보면 그냥 Enter (기본값 ~/.ssh/id_rsa)

Passphrase: (비워도 되지만, 보안상 입력 권장 → 기억해 두세요)

3) Public Key 확인
cat ~/.ssh/id_rsa.pub


👉 ssh-rsa AAAAB3Nza... 로 시작하는 한 줄이 출력됩니다.

4) 카페24에 Public Key 등록

콘솔 → 호스팅관리 > 기본관리 > Public Key 관리

등록 버튼 클릭 → id_rsa.pub 내용 전체 붙여넣기

Key 이름: nextpureunmaeulkey (추천)

5) 앱에 Key 할당

호스팅관리 > 기본관리 > 앱 생성/관리

nextpureunmaeul 앱 선택 → 상단 Key 할당 클릭

등록한 Key (nextpureunmaeulkey) 선택 후 → 확인

6) 연결 테스트
ssh -T moonjong22@nextpureunmaeul.cafe24app.com -p 22


👉 정상 연결되면 Welcome 메시지 출력됨

7) 다시 push
git push cafe24 master



1) 새 SSH 키 생성
ssh-keygen -t rsa -b 4096 -C "nextpureunmaeul@cafe24.com"


nextpureunmaeul

cat ~/.ssh/id_rsa.pub

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCPGzhNTzmqCsx/WgqnkKlZoU77wuJ9d84CKRMsKJXEOYyfeSoT8HTHyy2zVdsa/wPfFlfXUQdHwpKuWHcgnl3kaQCnkUjcJAGf+Z19fpvjqhZWfhCN4wEdVn1XLPZn8VZdZNGqxTwChw3dhRHCoPnLePtUSvLS1xcanbuf5TYpE4FKJ+u5+aoL9sq4xUJ5PD6VQBj8PaeVSLr2B4QYsEZEytDJXc5VTdteaeEsMGZ6i6gKkw+e/ieYRnnetI/HwpRwisx+gc8bFa5ZTbQkYlVIeZyKX77d8+EXAFqT3DLnTt687IRDvLJuMZJMxh0vKi9R6e/ubA01G91i9cAD4SQe70mtnk/jhcVqeyf/6iqfUkOVjFWprA94j6KyMDaSQFHsfgvhO3w2iSB6dnuXFrwuutaFRVZFsvya0opPUT1BOUr/3Tb7eeHF/I5Gw9uj2Awc4H+GrDhDSNPPhqO24BqQcRUUUmnJ3L+yBixG5goFALql8+ccCq3TBaDwIIqfpUVVE1sKifSq4OGoonDjAtE/E0dkTlUK3eTU+IBWxP6f/tQ5okK34C5Gr+7iHwfFKoZDWmh8h+BbisrFIUwWDdBRM/dG/MiMyef9/a53Lm/Loo6zzcuGGBoMPEVe0AAYUyKFqt8WjmnTDVPxC10sEw/J5Kr72duYLSyvw6+zFfWHeQ== nextpureunmaeul@cafe24.com

ssh -T moonjong22@nextpureunmaeul.cafe24app.com -p 22

git push cafe24 master


moonjong22@nextpureunmaeul.cafe24app.com:moonjong22_nextpureunmaeul


git remote remove cafe24
git remote add cafe24 moonjong22@nextpureunmaeul.cafe24app.com:moonjong22_nextpureunmaeul.git

git ssh moonjong22@nextpureunmaeul.cafe24app.com -p 22 "mkdir -p ~/git/moonjong22_nextpureunmaeul && cd ~/git/moonjong22_nextpureunmaeul && git init --bare"




9. SSH Config 설정
```bash
nano ~/.ssh/config
```

```
Host cafe24
  HostName next.cafe24app.com
  User moonjong22
  Port 22
  IdentityFile ~/.ssh/id_rsa

```

ssh -T cafe24

hello nextpureunmaeulkey, this is gitolite v2.3-35-gd59bc35 running on git 2.17.1
the gitolite config gives you the following access:



$ git push cafe24 master
W access for moonjong22_next DENIED to nextpureunmaeulkey
(Or there may be no repository at the given path. Did you spell it correctly?)
fatal: Could not read from remote repository.




