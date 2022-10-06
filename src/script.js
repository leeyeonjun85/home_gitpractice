let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "https://pixabay.com/get/gc75f8c8bb1485aa5c0ce19bd571f21a40e3cac0239f6c6a3a8e045f9a7f7adb8bb1d29bcbdc38ea75599003bfd9b343f_640.jpg"
  ) {
    myImage.setAttribute(
      "src",
      "https://pixabay.com/get/gaa97cd25a9310bfb7b5f826ae3a4e90dfb2b69bad64a6d25524267d8a00824d84681b84a53a5262fa3cb3471c45b3224_640.jpg"
    );
  } else {
    myImage.setAttribute(
      "src",
      "https://pixabay.com/get/gc75f8c8bb1485aa5c0ce19bd571f21a40e3cac0239f6c6a3a8e045f9a7f7adb8bb1d29bcbdc38ea75599003bfd9b343f_640.jpg"
    );
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
