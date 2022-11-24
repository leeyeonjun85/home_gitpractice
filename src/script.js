'use strict';


// let myButton = document.querySelector("button");

// let myHeading = document.querySelector("h1");


///////////////////////////////////////////////////////////
// headbox

// 홈버튼 클릭시 홈 링크
// let headLeft = document.getElementById("head-left");
// headLeft.textContent = "Go 🏠"

// headLeft.onclick = function () {
//   go_home_git();
// };


function go_home_shop () {
  window.open( "http://leeyj85.shop/", "_blank");
	// location.href = 'http://leeyj85.shop/';
};
function go_home () {
  window.open ( "https://leeyeonjun85.github.io/home/", "_blank");
  // window.open ( "https://leeyeonjun85.github.io/home/", "_blank", "toolbar = yes, top = 500, left = 500, width = 400, height = 400");
	// location.href = 'https://leeyeonjun85.github.io/home/';
};
function go_home_gitpractice () {
	location.href = 'https://leeyeonjun85.github.io/home_gitpractice/';
};

// 헤드센터 클릭시 github 링크
let headCenter = document.getElementById("head-center");
headCenter.textContent = "이연준의 깃허브 코딩연습실"


headCenter.onclick = function () {
	go_home_git();
};



// 스파르타 아이콘 클릭시 스파르타 링크
// let spartaIcon = document.getElementById("spartaicon");

// spartaIcon.onclick = function () {
// 	goSparta();
// };

// function goSparta () {
// 	window.open('https://spartacodingclub.kr/');
// };




///////////////////////////////////////////////////////////
// indexPage

// 웰컴메시지에 이름 입력하기

let myWelcomeMsg = document.getElementById("welcomeMsg");
let myButton = document.getElementById("userNameBtn");

function setUserName() {
	let myName = prompt(
		`안녕하세요~ 저는 이연준이에요.
당신의 이름을 알려주세요.`, "정우성");
	if (!myName || myName === null) {
		alert("알려주기 싫은가 보네요..ㅠㅠ");
		myName = "익명의 방문자..";
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

// '스파르타 코딩 연습실' 링크 열기
// function goYeonjunApp () {
// 	window.open('https://play.google.com/store/apps/details?id=com.myhoneytip.lyj');
// };

// '이연준의 꿀팁 앱' 링크 열기
function goYeonjunApp () {
	window.open('https://play.google.com/store/apps/details?id=com.myhoneytip.lyj');
};


///////////////////////////////////////////////////////////
// mdmPage
let myImage = document.getElementById("mycheetah");
let img1 =
	"https://lh3.googleusercontent.com/fife/AAbDypCBex_cyyjdFGlV520HyPYCXbPgJGQw5APVcnISd07h6dIoBi_5v2Dr2pyWWrdYcrb9_QUp-WiysAtrDL6s3xMSMIeUlicmnugUKLp83gezzSKO6b2DU0xrBFz08RqZnIx8s5TP_XPBFdkFUrQfiVqwa-R2P6kCutto6qMCLgBwcZRvozUTkiJzElLRUXZt3jkCQscmoZsebJM3oLPYTyv0BKpC332qafUkZSVEzMq-OCoMZXbLqty1lPF855laMmk6C9jUsbf4qPAOn1ApbOsbnCmkBBw_Z-8ict7ZuivhFxqnAajf7KjAfxHTb3LuoKjqQwpT3tFX1PYk8Jkn2nXWuUhfNJzQCVTE_jAL2rDdP3f4hjfn6Mjmfw5TXeNaBXtcwS_76n8ckfBYGWqp0JEsodmBROO5XzBUW2bIy3zTaf4Xnar1csbkKFmcRIktCY-GF2YtGlHxUxu0uJ6NlGFu1q38pXEUknH4kxLxeftMMuQD7EAecoWTuz7smiXNAVyzGBjn28prXqSB0B-luX2a1a_eu1WsLDM7qqelOT6LUR17LxOlrYnRHNr3-ChqJQ9m83_yQXqVMbTYvRigSeKyEUFgT8tjqWAqmbY6yoVGf7-7SbkIAL2aPcw_mZpaNKiw85MjrZkosF9njDP3gd06kWQpnLMzfMsqSKWzMrF8hTKQS5zr6xYwX_tk-OibkkI3NHAq66Qzgc_xSs8j6rY9gDH7pswu6aTIUEvGSl0lCC15aZp8PjyLBzk2t8QFLNCy2eyfNa-N3rcBmBsBdNiAuhySFKv-cSX3dWPXgVPn_kI071VsVlzW-RG2Jbb-WPsaUO-kyCL38Kasg1iUZZMhvrogLIounUI9Ce5vHy7AdpBOCv0Eb5LkcSx23h_OHyEQSDJnJSRuLLHDjA1ufTxdYvv6WGMLqczJN227oBWBXptJTSEA6GlkWosJJzPYQAaeB9uf_bFEqvPfmPmrv_R9jr0w8Tf33ru5Vpj1NVdyOHH0AypkGJX5RIsUJttxShrE3IolmLeGeWWdQ-sxDoO4pblKA-LuHeue44dOvXGyopMqnGi0P4RcwjlDR5JbNuIWVEQAY99meHqP2i4yY1oPe-UYz9pgNWqDxd8UGzjbuz1rPdn9MLxeaeVJQbbhW_hGQlVIejltSK7J4L8lrJyThCKdkcCkL50XvhiUKRHrsmkFifXGxmi-6PgcJS7p6kq3bKFQIRWolmzmGzlamZjLKSFLHF6fnWQgoZ-6kKgkDXIP-p6WiPLKQ4nRhdmbeuw4lX8QASFOSiIf9e1siNAb2m--g2cmoE3xr7mxyZGIoEVleTRF_lCt5sRgF0hquHHFPJDAaPh19Odpff5jqj3Yn4nMQDSpOehIIQtW8HUTkDp80tpYsaWvhF7XQrOXcDdlqaAWkFnrzKbtjykd68vvGh-LN13j6w8Wx49VA8_mPcFbaOrlTll34SgI_d6_IffjltNvt_iiVpENC4Xu5HJWvJXMdkpRTzgVeC7dbY_sN_PCMXeD=w1275-h870";
let img2 =
	"https://lh3.googleusercontent.com/fife/AAbDypBjN4LvLqfSKzElk8hQ0Bn3LZwb9NweOXBZkMSc8kHtkcdZeUsSbd1yupbsPNrnM5dHLNsK6sGIfgn0MQCZwsdo6ZNptlph-ZruDJfSNtK3Ki6tZ64u7AvVgJ7cA9-fjYRxHtIjXFA1bmUaYEJESDX1nlBpX6tUmM_JMBAdTN-r0aqCtQwTHHG9GGSh7ZE-OoXv4UKiGQ-GQOisLiFhdwxabotAYoamkQtKORh55EFEVTn9sId_pOitiFSre2jY3h8_yk3q7HIBpiLOGEHRyrbqY6uYkCQckI3X2jtYlbFUpPR39LeK2-703boCoB4N75HlBAEEjUiy9O-i535ZbnDk2QJ1QkMhWKSCozXqbGiuZOvZJTv3re9yfArsWTn80cuX9dqba1OfpCprCeb6NSuCxkdRnZ7-gfc38stHV-QrUHSko17YJQn05GWA_8Vnw1U2UQCIwI84Tt7K2fcUyFgWVMB_fLRpdyrXICxjuhsLWvuhhzSdzE2FDdo2DCh-uVAuu6L07eTdBAiMoHv_XU96nAdmwLRp_ngn8dTgopRcZD2DKTCqcqKIzIJSGa1x8FOHhB6nlL_pDJQuJXz2WPTwgCSCxTlw-li6n4swv-iL09RRJ9D6h0s9cpIWdfe7Plf_GOXWixNZSi5biFFHMQehM6LjwPL-xmWv2IdeuEwOsvyU8wyNpIjIQJmpXiuedCTwZreRJsdxC1BapykJGyMweoKzCwcP3jSog-meajeSDSakIQ0UvFQYEbjgRO5QlnfWiuB7OsDtW0lwt3K_RNzPklv8XHrOvhh82N2brA_U04CbJMPXxgH9_55cEITw1K-ngXsXjrNG1AtgvYnyLVUDkJB2Zr2q77Oag14pBVmACfgdwMlhVlTGKikrVcNf-ACG7N4jr54RG297_9W-18ZUKw3EhI04x350gzxzpG94sFyaAgOK3hkmmAoRxMVTx9FYsV-P-53dafQOgEmd8dP1yGmWgLeo9sYylZs9CGScr4In7e_9wM454qqMe0_JDe7Keu5zFVlicgwj7MpI9FvPhcyPrz4nhMpSFJmzlxE97RX9r2OmsrFcdtg-es12mz_bpVExiXeLH7UsPhszRYFhvmU5k1vucafYESaH6g8Bt3tmgdz8BJGK5lXLL_H3aetcdP2MmObOfFGUQs5cHjVbsUFKkHAtb-jCQXZWintKwV5jGYnGv33XKbr3QesZLi6mzJib0Q8jznAptGdkbzSw_bQPhdv5lNtwT2uzZxZ3PSXDl8wjEdW96mWFrD3jeGz0ZixgOKN9NcSjN2-U2ce7K1g2zipCE49Gq2hghByOJ0JG3v7eNZMKpgyn0S41JPSYME-1A3nS3MfjMH6mXXLOL-y1NY3Cd6DULVJS3OxOdG9nYcE4PqNH8t9Vu-BmeJb2aY55XFXbepCB_AyC-_o1_czXD0dGskHkmNB4wllMbVCT_2Yjry23a1hr0AY0w6M7heaAbWZOmIHQCMRQ3_O-fdqZrAWUv2m9-lTJrUYINGgmaWgb=w1275-h870";
let img3 =
	"https://lh3.googleusercontent.com/fife/AAbDypC5kVKPiEvpH0d7dxIIjXdGsXhSI8402hStva7gy_NUwf0knjtKlUKXliBfaPH4KJzm_UMqAiqmxnN1vdlXP_zea4AD9W-85LpmG4rSicoos14gUyzrATiA2kDZSkNTB44TmvkwtJaoXhj9Mm0EaOgxVvvkst9PRTOdQHiv5vdvH07huxii9I-4ii8fS5yAF1mA8Z3C9PXO_dUICC91lG4BkREhHfInMnnicoocznROV-XFMqgvjBOg0w0I67g5Y5BsHLsr1rPjSxabaAgv7yNltOMdnPWp_s2AftTEjpwYxL44q6amylJuR134pfT4jTs0rVEX-SD5DEgpL8AkD2u9VvKWSwhoT7wRu52g3VYzMI75_rmIqI2CxWx_V8yj_nSTdzYwIC3GHWeLHJ8SDzWhnwUKRODU6II2ke-49QysbF0-7tw5HSqYwgED-_m7W7Ee8HQpZjwJ9QKhUiYIH96afY-PwhYTO7krA3FPfqWHdWoUidplCy12qAesjbEIQEly8vZV3L7GTq_jW6VU_MnuKAxlMRm3EtguQV_jxNu_5DMCbIIYqr9QbNEBs2UkYoyVmP-MlML8W_4Dee2zKgnYUmeHlzGn-Gp4LW1HV0Bk9vOlr1LrPweeKP7kwgYjd3e8GxiMYIJJfRAnvLdwii_rEN4HtAMI9R-LO5eVE7ogz8NcQjve-K_HEQFBzQ781nuVNxgPXBA_d6rT84lutJrE3K-BboC5SOt_Ty71Z822DWT574Q_p6nxY6zi4EmfOsjy3E4FkGx8Q3t_7fIzZbTjV3rwGS41Wv0iYxnh6qd23PeoTJHjl3wodmGjKqkFOQqhzDXq_5zOzb1NwKoRCERp5HDTGu7RfcfE7HNv_GM_xTx8XEbaq2POIppFpER8GS1t5e8Uaq6HbV6bUHl6VGLusJc1Yytp8ZkbBTHcZk4s6zi1X59h1rx9U5Anin5s7qgpEwYROaCfcecazaPRAygdtTpDQ-D8ir5L9HQi3JSSuqhbzYky_JMHa1lT9Q5cPUcdfZbVMDSYSDinBkdEspq-gaY3PVQ77Cdo62g1EOmATxo3QYq6Azm4SMcp6KbqzKSxRbFyAtfGuCyVA6p7s9iG6qq1x5YOy-3Cr6sSjBs7KhjzBvr--ok6SaQLIVFpQn1tPLjHMEf-RE4FLUReSaQHmQfu1BmnkaOYDZfheH5kKQ_I9ymwR_OmFeN51l5PJto0ZbjapSA8MNnuK3WgJYmPCVkhGVcUKnIQaLyJK1Ec-sX3Yqo36Tf2J5_9hMsAdP5SJIsz248yL-mi961VaXy716Wumd5YP4aJaO4ss4qB1UhdT9NT8lm6lrZHXCoNbZA8o8m58Oxm83tFRFosSXhlpf6MvA9hmYzKudi87wU8BPSi2Meqy-o7U-ennv_6zBX6UxTBrvRItbxhhGmsLYqPumyvJ9uoCK5eG2s9RtYq2X-q_ru4k41-fWVLeN2uIViR7gxMH5pVemPZs3rFSCoTdS1cO8Ulkb00bV2EJAIRFV_gAh74=w1275-h870";
let mdmImgName = document.querySelector('#mdmImgName')

function changeImg () {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === img1) {
		myImage.setAttribute("src", img2);
		myImage.setAttribute("alt", "A sleeping cheetah");
    mdmImgName.textContent = '잠자는 치타';
	}
	if (mySrc === img2) {
		myImage.setAttribute("src", img3);
		myImage.setAttribute("alt", "A running cheetah");
    mdmImgName.textContent = '달리는 치타';
	}
	if (mySrc === img3) {
		myImage.setAttribute("src", img1);
		myImage.setAttribute("alt", "A standing and looking up cheetah");
    mdmImgName.textContent = '서서 응시하는 치타';
	}
};


///////////////////////////////////////////////////////////
// numgamePage
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
  if (guessField.value < 1 || guessField.value > 100) {
    alert("1~100사이의 숫자를 입력하세요")
  } else {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = '찍은 숫자들 : ';
    }
    console.log(randomNumber);
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
      lastResult.textContent = '축하합니다! 숫자를 맞혔습니다~!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lowOrHi.textContent = '';
      setGameOver();
    } else {
      lastResult.textContent = '땡!';
      lastResult.style.backgroundColor = 'red';
      if (userGuess < randomNumber) {
        lowOrHi.textContent = '너무 낮은 숫자에요!';
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = '너무 높은 숫자에요!';
      }
    }
  };
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '새로 시작하기';
  document.querySelector('.container-50').appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}


///////////////////////////////////////////////////////////
// testPage

