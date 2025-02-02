class Update11 extends HTMLElement {
  //FOR CHANGES AS OF 04.19.2023
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
    <div class="card mb-5">
      <div class="row justify-content-md-center my-2">
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">

          <ul class="list-group list-group-flush my-0 py-0">
            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/AnthonyGantner.png" style="width: 25px">Anthony</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Added key objects.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create game trailer.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Created map feature, added city scene and added spotlight detector to cars.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Update cars, add music and sound effects.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Added door , main menu, key and drawer animations. Created key script.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Hide keys in the city scene.</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">Organized assets in store and city scenes. Fixed mouse cursor settings.</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">Update camera settings.</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">
        <img src="img/detect.png" class="w-100">
        <img src="img/key.jpg" class="w-100">
        <img src="img/map.png" class="w-100">
        <img src="img/spotlight.png" class="w-100">
                
        </div>
       
      </div>     
    </div> 
    `;
  }
}

customElements.define('update11-component', Update11);
