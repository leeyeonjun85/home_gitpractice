// let myButton = document.querySelector("button");
let myButton = document.getElementById("userNameBtn");
// let myHeading = document.querySelector("h1");
let myWelcomeMsg = document.getElementById("welcomeMsg");

myButton.onclick = function () {
	setUserName();
};

window.addEventListener('DOMContentLoaded', function () {
	setUserName();
});

function setUserName() {
	let myName = prompt("이름을 알려주세요.", "정우성");
	if (!myName || myName === null) {
		alert("알려주기 싫은가 보네요..ㅠㅠ");
		myName = "익명의 방문자..";
		myWelcomeMsg.innerHTML = "안녕하세요, " + myName + "님!";
	} if (myName === "정우성") {
		let result = confirm("헐.. 진짜 정우성 맞아요?");
		if (result == true) {
			localStorage.setItem("name", myName);
			myWelcomeMsg.innerHTML = "안녕하세요, " + myName + "님!";
		} else {
			alert("되고싶은 사람 말고... 당신의 이름을 알려주세요");
		}
	} else {
		localStorage.setItem("name", myName);
		myWelcomeMsg.innerHTML = "안녕하세요, " + myName + "님!";
	}
}
