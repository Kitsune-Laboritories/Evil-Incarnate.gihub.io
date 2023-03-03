class Update3 extends HTMLElement {
  //FOR CHANGES AS OF 02.22.2023
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
                <dd class="col-sm-9">Created 3D models and imported cat asset into game</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create more 3D models</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Added player controls and camera</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Fix collisions bug</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Created game menu UI</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create pause menu UI</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">Updated Website</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">Familiarize with unity</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">
          <img src="img/Radio_Music.jpg" class="w-100">
          <img src="img/title.png" class="w-100">
          <img src="img/script.png" class="w-100">
        </div>

      </div>
    </div>
    `;
  }
}

customElements.define('update3-component', Update3);
