class Kristine extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <div class="row justify-content-md-center">
      
      <div class="col-sm-3">
      <a class="nav-link" href="https://github.com/tineriver">
      <img class="image-fluid rounded-circle w-10" src="https://github.com/tineriver.png">
      </a>
        
      </div>
      
      <div class="col-sm-7">
      
        <h4 class="mb-3">Kristine Rivera</h4>
        
        <dl class="row">
                <dt class="col-sm-2">Email:</dt>
                <dd class="col-sm-9">kdrivera@hawaii.edu</dd>
                
                <dt class="col-sm-2">Major:</dt>
                <dd class="col-sm-9">Information and Computer Science</dd>
                
                <dt class="col-sm-2">Year:</dt>
                <dd class="col-sm-9">Senior</dd>
                
                <dt class="col-sm-2">Favorite Games:</dt>
                <dd class="col-sm-9">D&D, Raft. Animal Crossing, Dokupon Kingdom</dd>
                
                <dt class="col-sm-2">Hobby:</dt>
                <dd class="col-sm-9">Sewing, Drawing, Reading</dd>
              </dl>
        
      </div>
    </div>
    `;
  }
}

customElements.define('kristine-component', Kristine);

/* ON HTML PAGE
 <head>
  <script src="Components/Kristine.js" type="text/javascript" defer></script>
 </head>

 <body>
  <Kristine-component></Kristine-component>
 </body>

 */
