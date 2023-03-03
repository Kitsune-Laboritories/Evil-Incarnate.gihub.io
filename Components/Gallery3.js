class Gallery3 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <div class="row justify-content-md-center">
        <div class="col-auto"><h4>3D Modeling</h4></div>
        <div class="col-auto px-0"><h4 class="line">-------------------</h4></div>
        <div class="col-auto"><h4>Wed 03.01.2023</h4></div>
      </div>
        
      <div class="card p-5 mb-5">
        <div class="row justify-content-md-center">
          <div class="col-6 mb-3"><img src="img/the_school_bus.jpg" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/plant.jpg " class=" col w-100"></div>
          <div class="col-6 mb-3"><img src="img/apple_object.jpg" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/outdoor_trashcan.jpg" class="w-100"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('gallery3-component', Gallery3);

/* ON HTML PAGE
 <head>
  <script src="Components/Gallery3.js" type="text/javascript" defer></script>
 </head>

 <body>
  <gallery3-component></gallery3-component>
 </body>

 */
