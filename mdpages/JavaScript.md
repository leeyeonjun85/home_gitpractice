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

## 변수와 상수
- 변수와 상수는 모두 정보를 저장하는 '저장소'로 쓰임
- 변수(variable)는 저장하는 값이 변화할 수 있는 저장소
- 상수(constant)는 저장하는 값이 변화하지 않는 저장소

### 변수(Variables)
- 변수(Variables)는 어떤 값을 저장할 수 있는 컨테이너 역할
- 변수를 선언할 때는 `var` 또는 `let` 을 사용
  - `var`는 오래된 코딩 방식
- `let`으로 변수 'message'를 생성(선언)하고, 변수 meassage 안에 'Hello'라는 값을 할당
```js
let message;
message = 'Hello'; // 문자열을 저장합니다.
```

- 변수의 자료형
  - String : 문자열
  - Number : 숫자
  - Boolean : true/false
  - Array : 배열
  - Object : 객체

- 변수 명명 규칙
  - 변수명에 `$`, `_` 사용 가능
  - 변수명은 숫자로 시작 불가능
  - 하이픈(`-`)은 변수명에 사용 불가능
  - 대소문자는 구별 됨
  - 한문, 히브리어 등 사용 가능
  - 변수명에 '예약어(reserved name)' 사용 불가능
    - 예약어 : let, class, return, function
  - 엄격모드(use strict)에서는 `let`으로 변수를 선언해야 하지만, 비엄격모드에서는 `let`을 생략 가능
    - 엄격모드를 고려해서 일반적으로 `let`을 생략하지 않음

### 상수(Constants)
- 상수(Constants)는 변화하지 않는 변수
- 변수는 `let`으로 선언하고, 상수는 `const`로 선언
- 관습적으로 기억하기 힘든 값을 대문자상수로 할당해 사용함
```js
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```
- 대문자상수의 장점
  - COLOR_ORANGE는 "#FF7F00"보다 기억하기가 훨씬 쉽습니다.
  - COLOR_ORANGE를 사용하면 "#FF7F00"를 사용하는 것보다 오타를 낼 확률이 낮습니다.
  - COLOR_ORANGE가 #FF7F00보다 훨씬 유의미하므로, 코드 가독성이 증가합니다.

## 연산자
- 더하기(`+`) : 두 수를 합치거나, 또는 두 문자열을 하나로 붙일 때 사용
- 사칙연산 : 더하기, 빼기, 곱하기, 나누기 (`+, -, *, /`)
- 할당(`=`) : 값을 어떤 변수에 할당
- 동등(`===`) : 두 값이 서로 같은지 테스트하여 `true/false`(불리언) 결과를 반환
- 부정, 다름(`!, !==`) : 연산자 뒤쪽의 값에 대해 논리적으로 반대인 값을 반환

### [연산자 우선순위 : MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- 우선순위 숫자가 클 수록 우선 순위가 높음(먼저 실행 됨)
<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>우선순위</th>
      <th>연산자 유형</th>
      <th>결합성</th>
      <th>연산자</th>
    </tr>
    <tr>
      <td>19</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Grouping">그룹</a></td>
      <td>없음</td>
      <td><code>( … )</code></td>
    </tr>
    <tr>
      <td rowspan="5">18</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors#%EC%A0%90_%ED%91%9C%EA%B8%B0%EB%B2%95">멤버 접근</a></td>
      <td>좌결합성</td>
      <td><code>… . …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors#%EA%B4%84%ED%98%B8_%ED%91%9C%EA%B8%B0%EB%B2%95">계산된 멤버 접근</a></td>
      <td>좌결합성</td>
      <td><code>… [ … ]</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> (인자 리스트 제공)</td>
      <td>없음</td>
      <td><code>new … ( … )</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Guide/Functions">함수 호출</a></td>
      <td>좌결합성</td>
      <td><code>… ( <var>… </var>)</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining">옵셔널 체이닝</a></td>
      <td>좌결합성</td>
      <td><code>?.</code></td>
    </tr>
    <tr>
      <td>17</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> (인자 리스트 생략)</td>
      <td>우결합성</td>
      <td><code>new …</code></td>
    </tr>
    <tr>
      <td rowspan="2">16</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Increment" class="only-in-en-us" title="Currently only available in English (US)">후위 증가 (en-US)</a></td>
      <td rowspan="2">없음</td>
      <td><code>… ++</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Decrement" class="only-in-en-us" title="Currently only available in English (US)">후위 감소 (en-US)</a></td>
      <td><code>… --</code></td>
    </tr>
    <tr>
      <td rowspan="10">15</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT" class="only-in-en-us" title="Currently only available in English (US)">논리 NOT (en-US)</a></td>
      <td rowspan="10">우결합성</td>
      <td><code>! …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT" class="only-in-en-us" title="Currently only available in English (US)">비트 NOT (en-US)</a></td>
      <td><code>~ …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus">단항 양부호</a></td>
      <td><code>+ …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation">단항 부정</a></td>
      <td><code>- …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Increment" class="only-in-en-us" title="Currently only available in English (US)">전위 증가 (en-US)</a></td>
      <td><code>++ …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Decrement" class="only-in-en-us" title="Currently only available in English (US)">전위 감소 (en-US)</a></td>
      <td><code>-- …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/typeof"><code>typeof</code></a></td>
      <td><code>typeof …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/void"><code>void</code></a></td>
      <td><code>void …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/delete"><code>delete</code></a></td>
      <td><code>delete …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/await"><code>await</code></a></td>
      <td><code>await …</code></td>
    </tr>
    <tr>
      <td>14</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation">거듭제곱</a></td>
      <td>우결합성</td>
      <td><code>… ** …</code></td>
    </tr>
    <tr>
      <td rowspan="3">13</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Multiplication">곱하기</a></td>
      <td colspan="1" rowspan="3">좌결합성</td>
      <td><code>… * …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Division">나누기</a></td>
      <td><code>… / …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Remainder">나머지</a></td>
      <td><code>… % …</code></td>
    </tr>
    <tr>
      <td rowspan="2">12</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Addition">더하기</a></td>
      <td rowspan="2">좌결합성</td>
      <td><code>… + …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Subtraction">빼기</a></td>
      <td><code>… - …</code></td>
    </tr>
    <tr>
      <td rowspan="3">11</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift" class="only-in-en-us" title="Currently only available in English (US)">비트 왼쪽 시프트 (en-US)</a></td>
      <td rowspan="3">좌결합성</td>
      <td><code>… &lt;&lt; …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift" class="only-in-en-us" title="Currently only available in English (US)">비트 오른쪽 시프트 (en-US)</a></td>
      <td><code>… &gt;&gt; …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift" class="only-in-en-us" title="Currently only available in English (US)">비트 부호 없는 오른쪽 시프트 (en-US)</a></td>
      <td><code>… &gt;&gt;&gt; …</code></td>
    </tr>
    <tr>
      <td rowspan="6">10</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than" class="only-in-en-us" title="Currently only available in English (US)">미만 (en-US)</a></td>
      <td rowspan="6">좌결합성</td>
      <td><code>… &lt; …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal" class="only-in-en-us" title="Currently only available in English (US)">이하 (en-US)</a></td>
      <td><code>… &lt;= …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than" class="only-in-en-us" title="Currently only available in English (US)">초과 (en-US)</a></td>
      <td><code>… &gt; …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal" class="only-in-en-us" title="Currently only available in English (US)">이상 (en-US)</a></td>
      <td><code>… &gt;= …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/in"><code>in</code></a></td>
      <td><code>… in …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/instanceof"><code>instanceof</code></a></td>
      <td><code>… instanceof …</code></td>
    </tr>
    <tr>
      <td rowspan="4">9</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Equality">동등</a></td>
      <td rowspan="4">좌결합성</td>
      <td><code>… == …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Inequality">부등</a></td>
      <td><code>… != …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality" class="only-in-en-us" title="Currently only available in English (US)">일치 (en-US)</a></td>
      <td><code>… === …</code></td>
    </tr>
    <tr>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality" class="only-in-en-us" title="Currently only available in English (US)">불일치 (en-US)</a></td>
      <td><code>… !== …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">비트 AND</a></td>
      <td>좌결합성</td>
      <td><code>… &amp; …</code></td>
    </tr>
    <tr>
      <td>7</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR" class="only-in-en-us" title="Currently only available in English (US)">비트 XOR (en-US)</a></td>
      <td>좌결합성</td>
      <td><code>… ^ …</code></td>
    </tr>
    <tr>
      <td>6</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR" class="only-in-en-us" title="Currently only available in English (US)">비트 OR (en-US)</a></td>
      <td>좌결합성</td>
      <td><code>… | …</code></td>
    </tr>
    <tr>
      <td>5</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND" class="only-in-en-us" title="Currently only available in English (US)">논리 AND (en-US)</a></td>
      <td>좌결합성</td>
      <td><code>… &amp;&amp; …</code></td>
    </tr>
    <tr>
      <td rowspan="2">4</td>
      <td><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR" class="only-in-en-us" title="Currently only available in English (US)">논리 OR (en-US)</a></td>
      <td>좌결합성</td>
      <td><code>… || …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator">널 병합 연산자</a></td>
      <td>좌결합성</td>
      <td><code>… ?? …</code></td>
    </tr>
    <tr>
      <td>3</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">조건 (삼항)</a></td>
      <td>우결합성</td>
      <td><code>… ? … : …</code></td>
    </tr>
    <tr>
      <td rowspan="18">2</td>
      <td rowspan="16"><a href="/en-US/docs/Web/JavaScript/Reference/Operators#Assignment_operators" class="only-in-en-us" title="Currently only available in English (US)">할당 (en-US)</a></td>
      <td rowspan="16">우결합성</td>
      <td><code>… = …</code></td>
    </tr>
    <tr>
      <td><code>… += …</code></td>
    </tr>
    <tr>
      <td><code>… -= …</code></td>
    </tr>
    <tr>
      <td><code>… **= …</code></td>
    </tr>
    <tr>
      <td><code>… *= …</code></td>
    </tr>
    <tr>
      <td><code>… /= …</code></td>
    </tr>
    <tr>
      <td><code>… %= …</code></td>
    </tr>
    <tr>
      <td><code>… &lt;&lt;= …</code></td>
    </tr>
    <tr>
      <td><code>… &gt;&gt;= …</code></td>
    </tr>
    <tr>
      <td><code>… &gt;&gt;&gt;= …</code></td>
    </tr>
    <tr>
      <td><code>… &amp;= …</code></td>
    </tr>
    <tr>
      <td><code>… ^= …</code></td>
    </tr>
    <tr>
      <td><code>… |= …</code></td>
    </tr>
    <tr>
      <td><code>… &amp;&amp;= …</code></td>
    </tr>
    <tr>
      <td><code>… ||= …</code></td>
    </tr>
    <tr>
      <td><code>… ??= …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/yield"><code>yield</code></a></td>
      <td rowspan="2">우결합성</td>
      <td><code>yield …</code></td>
    </tr>
    <tr>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/yield*"><code>yield*</code></a></td>
      <td><code>yield* …</code></td>
    </tr>
    <tr>
      <td>1</td>
      <td><a href="/ko/docs/Web/JavaScript/Reference/Operators/Comma_Operator">쉼표 / 시퀀스</a></td>
      <td>좌결합성</td>
      <td><code>… , …</code></td>
    </tr>
  </tbody>
</table>

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