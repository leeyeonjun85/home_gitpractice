const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `
<link href="../src/style.css" rel="stylesheet">

<div id="headbox">
	<div id="head-left">Go🏠</div>
	<div id="head-center">연준이의 코딩 연습실</div>
	<img id="spartaicon"/>
</div>
`;

class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "open" });
		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define("header-component", Header);


