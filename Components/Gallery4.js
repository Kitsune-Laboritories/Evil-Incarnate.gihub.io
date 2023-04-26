class Gallery4 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      <div class="row justify-content-md-center">
        <div class="col-auto"><h4>City</h4></div>
        <div class="col-auto px-0"><h4 class="line">-------------------</h4></div>
        <div class="col-auto"><h4>Wed 04.26.2023</h4></div>
      </div>
        
      <div class="card p-5 mb-5">
        <div class="row justify-content-md-center">
          <div class="col-6 mb-3"><img src="img/City.png" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/Hint1.png" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/Hint2.png" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/Hint3.png" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/Hint4.png" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/Hint5.png" class="w-100"></div>
          <div class="col-6 mb-3"><img src="img/Hint6.png" class="w-100"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('gallery4-component', Gallery4);


