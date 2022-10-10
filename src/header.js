const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link href="../src/style.css" rel="stylesheet">

<div id="headbox">
	<div id="head-left">
		<button onClick="location.href='../index.html'">
			Go🏠
		</button>
	</div>
	<div id="head-center" onClick="location.href='../index.html'">
		연준이의 코딩 연습실✍️
	</div>
	<div id="head-right">
		<button onClick="location.href='https://spartacodingclub.kr/'">
			Go<img id="spartaicon" src="https://spartacodingclub.kr/v5/icons/logo_v2.svg" />
		</button>
	</div>
</div>
`

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);