class Update10 extends HTMLElement {
  //FOR CHANGES AS OF 04.12.2023
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
                <dd class="col-sm-9">Added chest objects and added more items in the store.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create objects for a 3d platformer game.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Creating auto moving script for cars in the city and added sound effects.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create features for 3d platformer game.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Created intro storyboard scene. Updated menu script and added fire particle effects. </dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Change game to a 3d platformer.</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">Tested player movement controls and added fixed mouse cursor code.</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">Update camera settings</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">
        <img src="img/chest.jpg" class="w-100">
        <img src="img/backnforth.png" class="w-100">
        <img src="img/fire.png" class="w-100">
        <img src="img/player_controls.png" class="w-100">
       
        </div>
       
      </div>     
    </div> 
    `;
  }
}

customElements.define('update10-component', Update10);
