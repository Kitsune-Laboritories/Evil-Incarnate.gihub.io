class Update6 extends HTMLElement {
  //FOR CHANGES AS OF 03.15.2023
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
                <dd class="col-sm-9">Added 3d objects and animation</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create more objects for the store</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Created game's scoring system, updated camera settings and player controller and fixed colliders.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Update player controls.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Added a paused menu, added a timer, player name feature, and game over scene.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">TBD</dd>
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
        <img src="img/Refrigerator.jpg" class="w-100">
        <img src="img/scoringsystem.png" class="w-100">
        <img src="img/store_set_up.jpg" class="w-100">
        <img src="img/Store_Shelf.jpg" class="w-100">
        
                
        </div>
       
      </div>     
    </div> 
    `;
  }
}

customElements.define('update6-component', Update6);
