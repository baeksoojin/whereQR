# whereQR
Description : Web service for stickers for dealing with loss

## 1. 실행방법

#### 서버 실행방법
###### backend
- manage.py와 동일한 위치에서 진행
``` c
python manage.py runserver
```
###### frontend
- src와 동일한 위치에서 진행
 ``` c
run start
```

###### 데이터베이스 모델 저장 및 적용
- manage.py와 동일한 위치에서 진행
``` c
python manage.py makemigrations
python manage.py migrate
```

## 2. 진행현황
### 2-1. 홈페이지
<img width="1512" alt="스크린샷 2022-05-23 오전 3 03 36" src="https://user-images.githubusercontent.com/74058047/169709566-76b8f9f9-687c-43d9-9db3-088ee2e6a859.png">

### 2-2. 회원관리
- 회원가입 페이지
<img width="900" alt="스크린샷 2022-05-23 오전 3 30 37" src="https://user-images.githubusercontent.com/74058047/169710311-26527525-a299-46ca-99e1-7b95f1e1d72f.png">
- 회원가입 api
<img width="900" alt="스크린샷 2022-05-23 오전 2 44 58" src="https://user-images.githubusercontent.com/74058047/169709253-ec47c9dd-17e8-47a2-9302-51447593b314.png">
- 로그인 페이지
<img width="900" alt="스크린샷 2022-05-23 오전 3 03 41" src="https://user-images.githubusercontent.com/74058047/169709572-78b73a97-5bf4-461b-bd9b-b70bbf2f9200.png">
- 로그인 api
<img width="900" alt="스크린샷 2022-05-23 오전 2 45 44" src="https://user-images.githubusercontent.com/74058047/169709103-c804bec3-09b2-4e13-a260-4026a780e900.png">
- 유저정보확인 api
<img width="900" alt="스크린샷 2022-05-23 오전 2 47 07" src="https://user-images.githubusercontent.com/74058047/169709119-6def9395-ebb1-469b-82ab-27ff0cd7073d.png">
- 로그아웃 api
<img width="900" alt="스크린샷 2022-05-23 오전 3 32 56" src="https://user-images.githubusercontent.com/74058047/169710375-9e8b740f-acf1-4cae-bab5-7835908fa8da.png">

### 2-3. QRcode관리
#### 사용자
- qrcode 등록하기 
<img width="900" src="https://user-images.githubusercontent.com/74058047/169710009-85330a84-bcaa-4701-82c4-bfd2cb88ad2a.gif">

- 등록양식
<img width="900" alt="스크린샷 2022-05-23 오전 3 08 04" src="https://user-images.githubusercontent.com/74058047/169709794-d8a57abf-b2f6-43b4-a89f-6018851b2f3a.png">

- qrcode 등록 api
<img width="900" alt="스크린샷 2022-05-23 오전 2 48 40" src="https://user-images.githubusercontent.com/74058047/169709142-70011f17-5248-4a62-b88f-28f220cc510f.png">

- qrcode list
등록한 qrcode 리스트
<img width="900" alt="스크린샷 2022-05-23 오전 3 08 44" src="https://user-images.githubusercontent.com/74058047/169709820-ed2b3b3c-ca89-4401-b4a8-9f318d5a153c.png">

- user별 qrcode를 가져오는 api
<img width="900" alt="스크린샷 2022-05-23 오전 2 57 20" src="https://user-images.githubusercontent.com/74058047/169709234-8cdf0eaa-abc7-4515-ace9-94f438f5ec61.png">

#### 획득자
- qrcode 스캔
<img width="900" src="https://user-images.githubusercontent.com/74058047/169710043-b3513d73-45aa-47db-8829-a3cf817f4d9d.gif">

- 저장한 qrcode data를 불러오는 api
<img width="900" alt="스크린샷 2022-05-23 오전 2 56 48" src="https://user-images.githubusercontent.com/74058047/169709239-1190b4f4-3fba-49a7-8d80-028077069a01.png">


