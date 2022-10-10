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
		alert("이름을 입력하세요.");
	} else {
		localStorage.setItem("name", myName);
		myWelcomeMsg.innerHTML = "안녕하세요, " + myName + "님!";
	}
}


