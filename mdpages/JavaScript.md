# JavaScript

## 목차
- []()
- []()
___
## JavaScript의 기본 특징
- JavaScript (줄여서 "JS")는 웹사이트상에서 동적 상호작용성을 제공할 수 있는 완전한 동적 프로그래밍 언어(dynamic programming language)이다.
- 브라우저 응용 프로그래밍 인터페이스([APIs](https://developer.mozilla.org/ko/docs/Glossary/API))
  - 브라우저에 내장된 API로 HTML을 동적으로 생성하고 CSS 스타일을 설정하거나, 사용자의 웹캠으로부터 비디오 스트림을 수집하거나 조작하는 것, 또는 3D 그래픽이나 오디오 샘플을 생성하는 것과 같은 다양한 기능을 제공
  - API 가운데 [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) (en-US)는 이미지를 여기저기 움직이거나 회전시키는 등, 웹 페이지 일부를 움직이도록 하는 데에 쓸 수 있음(나중에 더 공부해보자!😻)
- 제3자 (third-party) API를 활용해 개발자는 트위터나 페이스북 같은 다른 컨텐츠 공급사부터 제공되는 기능을 자신의 사이트에 통합할 수 있음
- 써드파티 프레임워크와 라이브러리를 HTML에 적용함으로써 사이트와 어플리케이션을 빠르게 구축할 수 있음
- 자바스크립트는 대소문자를 구분 함

## "Hello world" 예시
- scripts라는 폴더를 만들고, 폴더 안에 `main.js` 파일 생성 저장
- index.html 파일로 가서 닫는 `</body>` 태그의 바로 앞에 새로운 줄을 추가하고 다음 요소(`<script...></script>`)를 입력
```html
<body>
...
...
<script src="scripts/main.js"></script>
</body>
```
- `main.js`에 다음 코드를 추가
```js
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
```

## 변수
- 변수(Variables)는 어떤 값을 저장할 수 있는 컨테이너 역할
- 변수를 선언할 때는 `var` 또는 `let` 을 사용
```js
let myVariable;
```
- 변수의 자료형
  - String : 문자열
  - Number : 숫자
  - Boolean : true/false
  - Array : 배열
  - Object : 객체

## 연산자
- 더하기(`+`) : 두 수를 합치거나, 또는 두 문자열을 하나로 붙일 때 사용
- 사칙연산 : 더하기, 빼기, 곱하기, 나누기 (`+, -, *, /`)
- 할당(`=`) : 값을 어떤 변수에 할당
- 동등(`===`) : 두 값이 서로 같은지 테스트하여 `true/false`(불리언) 결과를 반환
- 부정, 다름(`!, !==`) : 연산자 뒤쪽의 값에 대해 논리적으로 반대인 값을 반환

## 조건문
### if ... else 조건문
```js
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
```

## 함수
-함수(Functions)는 재사용하기를 원하는 기능을 담는 방법
```js
alert('hello!');
```
- `alert`함수는 언제든지 사용할 수 있게 브라우저에 내장
- 함수 정의
```js
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}
```

## 이벤트
### 클릭이벤트
```js
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
```