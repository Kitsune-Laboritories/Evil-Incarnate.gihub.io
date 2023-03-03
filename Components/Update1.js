class Update1 extends HTMLElement {
  //FOR CHANGES AS OF 02.22.2023
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
    <div class="card mb-5">
      <div class="row justify-content-md-center my-2">
        <div class="overflow-auto col-lg-6 mx-0" style="height: 250px">

          <ul class="list-group list-group-flush my-0 py-0">
            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/AnthonyGantner.png" style="width: 25px">Anthony</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Sketched a storyboard</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create 3D models</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Brainstormed ideas</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Familiarize with Unity</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Brainstormed ideas</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Familiarize with Unity</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">Brainstormed ideas</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">Familiarize with unity</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 250px">
          <img src="img/Brainstorm1.png" class="w-100">
          <img src="img/Brainstorm2.png" class="w-100">
          <img src="img/IMG_9281.jfif" class="w-100">
        </div>

      </div>
    </div>
    `;
  }
}

customElements.define('update1-component', Update1);
