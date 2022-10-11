// let myButton = document.querySelector("button");
let myButton = document.getElementById("userNameBtn");
// let myHeading = document.querySelector("h1");
let myWelcomeMsg = document.getElementById("welcomeMsg");

myButton.onclick = function () {
	setUserName();
};

function setUserName() {
	let myName = prompt("이름을 알려주세요.");
	if (!myName || myName === null) {
		// setUserName();
		alert("알려주기 싫은가 보네요..ㅠㅠ");
	} else {
		localStorage.setItem("name", myName);
		myWelcomeMsg.innerHTML = "안녕하세요, " + myName + "님!";
	}
}
