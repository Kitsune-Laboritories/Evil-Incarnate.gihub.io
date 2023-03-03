class Anthony extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <div class="row justify-content-md-center">
      
      <div class="col-sm-3">
      <a class="nav-link" href="https://github.com/AnthonyGantner">
      <img class="image-fluid rounded-circle w-10" src="https://github.com/AnthonyGantner.png">
      </a>
        
      </div>
      
      <div class="col-sm-7">
      
        <h4 class="mb-3">Anthony Gantner</h4>
        
        <dl class="row">
                <dt class="col-sm-2">Email:</dt>
                <dd class="col-sm-9">agantner@hawaii.edu</dd>
                
                <dt class="col-sm-2">Major:</dt>
                <dd class="col-sm-9">Creative Media Major</dd>
                
                <dt class="col-sm-2">Year:</dt>
                <dd class="col-sm-9">Senior</dd>
                
                <dt class="col-sm-2">Favorite Games:</dt>
                <dd class="col-sm-9">Games: God of War 2018, Dead Space, Ghost of Tsushima, Animal Crossing, JRPGs</dd>
                
                <dt class="col-sm-2">Hobby:</dt>
                <dd class="col-sm-9">Photography, Videography, Gym, Anime, cosplay, ballroom dance</dd>
              </dl>
        
      </div>
    </div>
    `;
  }
}

customElements.define('anthony-component', Anthony);

/* ON HTML PAGE
 <head>
  <script src="Components/Anthony.js" type="text/javascript" defer></script>
 </head>

 <body>
  <anthony-component></anthony-component>
 </body>

 */
