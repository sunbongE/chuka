# 우리들의 추억의 카드 ㅊㅋ
> 개발 기간 : 2024-04-08 ~ 2024-05-20

</br>


# 산출물
- [요구사항정의서]()
- [기능명세서]()
- [화면정의서]()
- [API명세서]()
- [시스템아키텍처]()
- [피그마]()
- [포팅매뉴얼]()
- [발표자료]()

---
</br>

# Role

| 이름   | 역할                                                         |
| ------ | ------------------------------------------------------------ |
| 강민정 | **팀장**<br />**발표**<br />**프론트엔드**<br />|
| 김신영 | **백엔드**    |
| 김지연 | **백엔드**<br />                |
| 박태호 | **백엔드**<br />**인프라**<br /> |
| 이현호 | **백엔드**<br />**인프라**<br /> |
| 승재홍 | **프론트엔드** |

---
# 기술스택

### BackEnd
- JAVA 17
- SpringBoot 3
- Spring Security 6.2.4
- Spring Data JPA
- Spring Cloud Config Server
- Spring Cloud Routing
- Spring cloud netflix Eureka Server
- RabbitMQ

### FrontEnd
- React 18.2.0
- Ts 5.2.2
- Recoil 0.7.7

### DB 
- MySQl 8.0.36
- MongoDB 
- Redis

### INFRA
- AWS EC2 ubuntu 20.04
- CI/CD : Jenkins
- Nginx
- Docker
- DockerCompose

### 외부 서비스
- Firebase FCM
- Kakao Login
- PG

</br>

---
# 서비스 

## 소셜로그인
> 소셜로그인을 이용해 간편하게 회원가입, 로그인을 진행합니다.

</br>

<img src="./images/소셜로그인.png" width="200" height="400"/>&nbsp; &nbsp;

## 메인화면
> 공개된 축하를 확인하고 축하를 등록할 수 있습니다. </br>
사용자 후기를 통해 고객의 니즈를 파악하고, 서비스를 개선합니다. </br>
누적 축하 이벤트와 메시지를 확인할 수 있습니다.

</br>

<img src="./images/메인화면.png" width="200" height="800"/>&nbsp; &nbsp;

## 이벤트
> 축하할 이벤트를 등록할 수 있습니다. </br>
이벤트에서 진행하는 펀딩을 확인할 수 있습니다.

</br>

<img src="./images/이벤트등록.png" width="200" height="400"/>&nbsp; &nbsp;
<img src="./images/이벤트화면.png" width="200" height="400"/>&nbsp; &nbsp;
<img src="./images/이벤트펀딩확인.png" width="200" height="400"/>&nbsp; &nbsp;

## 롤링페이퍼
> 롤링페이퍼를 사용자가 원하는 배경, 글씨체로 작성할 수 있습니다.

</br>

<img src="./images/롤링페이퍼작성.png" width="200" height="400"/>&nbsp; &nbsp;

## 펀딩
> 구매링크, 목표금액 등 정보 입력 후 펀딩을 등록합니다. </br>
구매링크는 크롤링서버에서 크롤링에 사용됩니다. </br>
목표금액을 달성하면 펀딩이 종료됩니다.


<img src="./images/펀딩.png" width="200" height="400"/>&nbsp; &nbsp;
<img src="./images/펀딩확인2.png" width="200" height="400"/>&nbsp; &nbsp;
<img src="./images/펀딩상품구매링크.png" width="200" height="400"/>&nbsp; &nbsp;
<img src="./images/펀딩등록.png" width="200" height="400"/>&nbsp; &nbsp;
<img src="./images/펀딩등록성공.png" width="200" height="400"/>&nbsp; &nbsp;

> 펀딩 카카오 공유

</br>

<img src="./images/펀딩공유캡처.png" width="200" height="400"/>&nbsp; &nbsp;

## 간편결제
> 카카오결제를 통해 간편결제합니다.

</br>

<img src="./images/카카오결제.jpg" width="200" height="400"/>&nbsp; &nbsp;
<img src="./images/카카오결제2.jpg" width="200" height="400"/>&nbsp; &nbsp;

