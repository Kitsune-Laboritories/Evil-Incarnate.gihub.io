class Update4 extends HTMLElement {
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
                <dd class="col-sm-9">Created assets and imported to game</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Rigging animation skeletons to assets</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Player Controls and camera</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Update player controls and object interactions</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Added player animation</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Object interactions and animation using animation rigging package</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">Updated Website</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">Create timer</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">
        <img src="img/plant.jpg" class="w-100">
        <img src="img/obj_interact.png" class="w-100">
        <video class="img-fluid" autoplay loop muted>
                  <source src="https://cdn.discordapp.com/attachments/1075161091656663080/1081016781650530344/Screen_Recording_2023-02-28_at_10.10.41_PM.mp4" type="video/mp4" />
                </video>
        </div>
       
      </div>     
    </div> 
    `;
  }
}

customElements.define('update4-component', Update4);
