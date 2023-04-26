class Update8 extends HTMLElement {
  //FOR CHANGES AS OF 03.29.2023
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
                <dd class="col-sm-9">Added water bottle, teddy bear and cereal box objects. Created particle effects</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create 3d objects</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Updated player controls and eat object script</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Add sound effects.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Created store scene, added background and store objects.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Add more items in store scene.</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">...</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">TBD</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">
        <img src="img/bear.jpg" class="w-100">
        <img src="img/Store.png" class="w-100">
        <img src="img/storeObjects.png" class="w-100">
        
                
        </div>
       
      </div>     
    </div> 
    `;
  }
}

customElements.define('update8-component', Update8);
