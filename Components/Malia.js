class Malia extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <div class="row justify-content-md-center">
      
      <div class="col-sm-3">
      <a class="nav-link" href="https://github.com/malialiu">
      <img class="image-fluid rounded-circle w-10" src="https://github.com/malialiu.png">
      </a>
        
      </div>
      
      <div class="col-sm-7">
      
        <h4 class="mb-3">Malia Liu</h4>
        
        <dl class="row">
                <dt class="col-sm-2">Email:</dt>
                <dd class="col-sm-9">malialiu@hawaii.edu</dd>
                
                <dt class="col-sm-2">Major:</dt>
                <dd class="col-sm-9">Information and Computer Science</dd>
                
                <dt class="col-sm-2">Year:</dt>
                <dd class="col-sm-9">...</dd>
                <dt class="col-sm-2">Favorite Games:</dt>
                <dd class="col-sm-9">It Takes Two</dd>
                
                <dt class="col-sm-2">Hobby:</dt>
                <dd class="col-sm-9">Watch Anime</dd>
              </dl>
        
      </div>
    </div>
    `;
  }
}

customElements.define('malia-component', Malia);

/* ON HTML PAGE
 <head>
  <script src="Components/Malia.js" type="text/javascript" defer></script>
 </head>

 <body>
  <malia-component></malia-component>
 </body>

 */
