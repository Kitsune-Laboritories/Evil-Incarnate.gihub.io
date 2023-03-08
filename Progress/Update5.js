class Update5 extends HTMLElement {
  //FOR CHANGES AS OF 03.01.2023
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
                <dd class="col-sm-9">Created rough draft of a store</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create assets for the store.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Updated player controls and camera. Created a scoring system.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">TBD</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Created interactible objects</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Possibly scale down world to a store.</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">Research</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">Create timer</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">
        <img src="img/StoreSketch.jpg" class="w-100">
        <img src="img/Store.jpg" class="w-100">
        <video class="img-fluid" autoplay loop muted>
                  <source src="https://cdn.discordapp.com/attachments/1075161091656663080/1082967378280857621/PickUp.mp4" type="video/mp4" />
                </video>
                
        </div>
       
      </div>     
    </div> 
    `;
  }
}

customElements.define('update5-component', Update5);
