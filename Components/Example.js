class Example extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <h1>Hello World!</h1>
    `;
  }
}

customElements.define('example', Example);

/* ON HTML PAGE
 <head>
  <script src="Components/Example.js" type="text/javascript" defer></script>
 </head>

 <body>
  <example></example>
 </body>

 */
