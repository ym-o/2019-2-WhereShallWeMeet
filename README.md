where_shall_we_meet
=====================================================
Web page that provides a service that calculates the midpoint of people who attend meeting
<br/><br/>
## 목차
### 1. 프로그램 소개
### 2. node js 설치 및 이용
### 3. aws(웹서버)  
### 4. tmap 지도 api 사용
### 5. Database 사용
<br/><br/>
# 1. 프로그램 소개
## 1.1 프로그램 구조
### 1.1.1 구성도  
### 1.1.2 데이터베이스  
데이터 베이스는 모임 이름, 날짜, 참석자 이름, 장소 로 구성된다.  

ex)

|Name|Date|Attendees|Place1|Place2|Place3|Place4|Place5|Place6|Place7|Place8|Place9|Place10|
|------|------|------|------|------|------|------|------|------|------|------|------|------|
|모임1|2019.12.25|Alice, Bob, Eve|명동김치찌개|아비꼬카레|춘천닭칼국수|


<br/>

### 1.1.3 카테고리
사용자가 선택할 카테고리는 밥/카페, 회의/스터디, 실내활동, 실외활동 으로 구성된다


<br/>

# 2. node js 설치 및 이용
<br/>

# 3. aws(웹서버)
## 3.1 왜 웹 서버가 필요했는가
 앞에서 소개했듯이 본 프로젝트는 naver map open api를 이용한 웹 서비스이다.
 naver map open api를 이용하기 위해서는 web 서비스를 제공하는 도메인 url이 필요하다.
 이를 위해 로컬 ip(localhost:<port number>)를 web 서비스 url에 넣었지만 api에서 지도를 받아오지 못하였다.  
 이는 도메인에 인터넷에 띄운 서버의 ip가 아닌 로컬 ip를 적었기 때문에 발생한 문제였다.
 즉, 로컬 ip를 이용해 만든 서버를 통해서는 api를 받아오지 못하기 때문에 api에서 요구하는 도메인은 인터넷 상에 올라와 있어야 한다.  
 본 프로젝트에서는 `aws`를 이용해 서버를 생성했다.  
 
## 3.2 aws 이용 방법 
### 3.2.1 aws에서 인스턴스 생성

### 3.2.2 private key 생성
aws에서 인스턴스를 만들며 생성한 키를 이용해 `private key`를 생성해야 한다.  <br>
private key를 생성하려면 [puttyGen](https://www.puttygen.com/)이 필요하다.


### 3.2.3 aws 실행
1. [putty](https://www.puttygen.com/download-putty)를 이용해 인스턴스를 실행한다. 우선 putty를 다운받자.
<br/><br/><br/>
2. aws 페이지에서 서버를 실행시켜야 한다. 아래 사진처럼 aws에 접속해 EC2를 클릭하자.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%8B%A4%ED%96%891.PNG)
<br/><br/>  
3. 좌측 카테고리에서 인스턴스를 클릭한다. 실행하고자 하는 인스턴스 클릭 후 `작업→인스턴스→시작` 을 눌러 인스턴스를 실행한다
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%8B%A4%ED%96%893.PNG)
<br/><br/>  
4. 인스턴스 실행 후 하단의 설명 탭을 보면 IPv4 퍼블릭 IP값이 나올 것 이다. 이 값을 복사한다
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%8B%A4%ED%96%894.PNG)
<br/><br/>  
5. putty를 실행한다. 4에서 복사한 퍼블릭 IP값을 saved session에 입력해 저장한다. 이는 후에 IP를 외울 필요 없이 푸티 실행 시 원하는 IP를 바로 찾을 수 있도록 하기 위함이다.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%ED%91%B8%ED%8B%B01.PNG)
<br/><br/>  
6. 저장된 IP값을 Host Name(IP Address)에 로드한다. connection type은 SSH, port번호는 22를 유지한다.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%ED%91%B8%ED%8B%B02.PNG)
<br/><br/>  
7. 우측 카테고리에서 connection→SSH→Auth 로 이동한다. private key file for authentication에 프라이빗 키를 올리기 위해 browse를 클릭한다.  
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%ED%91%B8%ED%8B%B03.PNG)
<br/><br/>  
8. 프라이빗 키를 저장한 폴더로 이동해 해당 프라이빗 키를 올린다.(프라이빗 키는 puttyGen을 이용해 만든 키이다.)
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%ED%91%B8%ED%8B%B04.PNG)
<br/><br/>  
9. 서버를 띄우기 위한 모든 작업이 완료되었다! open을 클릭해 서버를 열자.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%ED%91%B8%ED%8B%B05.PNG)
<br/><br/>  
10. 푸티를 이용해 서버에 접속하면 아래와 같은 창이 뜰 것이다. 예(Y)를 눌러 작업을 계속하자.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%84%9C%EB%B2%841.PNG)
<br/><br/>  
11. 이 서버는 ubuntu 서버이다. ubuntu를 입력해 서버에 로그인하자.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%84%9C%EB%B2%842.PNG)
<br/><br/>  
12. 시험삼아 노드js를 이용해 서버를 띄워보자. 방식은 윈도우에서 띄우는 것과 같다. nodejs 테스트 프로젝트 폴더로 이동해 `node index.js`를 입력하라. 서버가 띄워진 것을 콘솔창에서 확인할 수 있다.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%84%9C%EB%B2%845.PNG)
+) 현재 이 aws 서버는 8000,8080 포트를 허용한다. 포트 넘버는 이에 유의하여 앞으로의 코드를 작성하자.
<br/><br/>  
13. 인터넷 창에 ```http:// 서버의 public IP:프로그램에서 입력한 포트넘버/``` 를 치면 아래 화면과 같이 서버가 성공적으로 띄워졌음을 확인할 수 있다.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%84%9C%EB%B2%844.PNG)
<br/><br/>  
14. 서버를 시작하는 것 만큼이나 종료하는 것 또한 중요하다. 다시 aws 웹 홈페이지로 돌아가자. 인스턴스를 선택해 인스턴스의 상태를 **_중지**_ 로 바꾸어주면 된다. **주의할 점은, _종료_ 가 아닌 _중지_ 로 인스턴스를 멈춰야 한다는 것 이다. 종료를 누르면 해당 인스턴스는 삭제되니 유의하자.**
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%A2%85%EB%A3%8C1.PNG)
<br/><br/>  
<br/><br/>  
### 4. tmap 지도 api 사용  
설명서 : [http://tmapapi.sktelecom.com/main.html#webservice/guide/webserviceGuide.guide4](http://tmapapi.sktelecom.com/main.html#webservice/guide/webserviceGuide.guide4)  
해당 페이지를 참고하여 코딩을 진행하자
### 5. Database 사용
DB 접속하는법 
1. AWS-RDS에서 사용하고자 하는 Database를 작업이 다음과 같이 사용가능 상태여야 한다.(중지되어있다면 작업->시작을 해주면 된다.)
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/DB접속3.PNG)
<br/><br/> 
2. cmd에서 mysql.exe가 있는 폴더로 이동 후
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/DB접속1.PNG)
<br/><br/> 
3. mysql -u jisoo449 --host whereshallwemeet-db.cxotycrbhaji.ap-northeast-2.rds.amazonaws.com -P 3306 -p
   를 입력하면 비밀번호 요청이 뜨고 비밀번호를 입력하면 다음 사진처럼 접속된다.
![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/DB접속2.PNG)
