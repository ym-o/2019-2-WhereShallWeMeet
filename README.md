where_shall_we_meet
=====================================================
Web page that provides a service that calculates the midpoint of people who attend meeting
<br/><br/>
## 목차
### 1. 프로그램 소개
### 2. node js 설치 및 이용
### 3. aws(웹서버)  
<br/><br/>
# 1. 프로그램 소개
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
#### 3.2.1 인스턴스 생성  
#### 3.2.2 private key 생성  
#### 3.3.3 aws 실행(putty)
<br/>

### 3.2.1 aws에서 인스턴스 생성

### 3.2.2 private key 생성
aws에서 인스턴스를 만들며 생성한 키를 이용해 `private key`를 생성해야 한다.  <br>
private key를 생성하려면 [puttyGen](https://www.puttygen.com/)이 필요하다.


### 3.3.3 aws 실행
[putty](https://www.puttygen.com/download-putty)를 이용해 인스턴스를 실행한다. 우선 putty를 다운받자.

![](https://github.com/jisoo449/where_shall_we_meet/blob/master/readmeimg/%EC%8B%A4%ED%96%891.PNG)
