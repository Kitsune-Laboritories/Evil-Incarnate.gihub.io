class Raymond extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <div class="row justify-content-md-center">
      
      <div class="col-sm-3">
      <a class="nav-link" href="https://github.com/rhlai">
      <img class="image-fluid rounded-circle w-10" src="https://github.com/rhlai.png">
      </a>
        
      </div>
      
      <div class="col-sm-7">
      
        <h4 class="mb-3">Raymond Lai</h4>
        
        <dl class="row">
                <dt class="col-sm-2">Email:</dt>
                <dd class="col-sm-9">...</dd>
                
                <dt class="col-sm-2">Major:</dt>
                <dd class="col-sm-9">Information and Computer Science</dd>
                
                <dt class="col-sm-2">Year:</dt>
                <dd class="col-sm-9">...</dd>
                
                <dt class="col-sm-2">Favorite Games:</dt>
                <dd class="col-sm-9">...</dd>
                
                <dt class="col-sm-2">Hobby:</dt>
                <dd class="col-sm-9">...</dd>
              </dl>
        
      </div>
    </div>
    `;
  }
}

customElements.define('raymond-component', Raymond);

/* ON HTML PAGE
 <head>
  <script src="Components/Raymond.js" type="text/javascript" defer></script>
 </head>

 <body>
  <Raymond-component></Raymond-component>
 </body>

 */
