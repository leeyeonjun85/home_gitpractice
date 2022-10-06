let myImage = document.querySelector("img");
let img1 =
	"https://pixabay.com/get/gb4febf5bf67b948def3d3c7b0e57bdc58840a007d1f25733632c4e72bc24e45286019b584b5d7ee314ff5acc0b8b4909_640.jpg";
let img2 =
	"https://pixabay.com/get/gaae61a809bbbc5f726d8227f886310b3c9e18e6fc74111a7f865ce63e943ef52799a0766ca5b351fd6c9b084b2ea639c9b3e99880b131f320f32eead7a51527e1aa94747d677561d9648ac237ab79fa9_640.jpg";

myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === img2) {
		myImage.setAttribute("src", img1);
	} else {
		myImage.setAttribute("src", img2);
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
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
