class Update12 extends HTMLElement {
  //FOR CHANGES AS OF 04.26.2023
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
                <dd class="col-sm-9">Video Game Trailer and powerpoint slides</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Create a better title image.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/malialiu.png" style="width: 25px">Malia</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Powerpoint presentation slides. Created nine lives script. Fixed detect distance script, added sound effects and fixed bugs.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Fix bugs and typos.</dd>
              </dl>
            </li>

            <li class="list-group-item">
              <dl class="row">
                <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/tineriver.png" style="width: 25px">Kristine</dt>
                <dd class="col-sm-2"></dd>
                <dt class="col-sm-2">Done:</dt>
                <dd class="col-sm-9">Hid key in the city and added animations. Created an intro scene for the city, and added a hint window feature.</dd>
                <dt class="col-sm-2">To Do:</dt>
                <dd class="col-sm-9">Fix bugs, typos and create barriers in the city scene.</dd>
              </dl>
            </li>

           <li class="list-group-item">
             <dl class="row">
               <dt class="col-sm-9"><img class="image-fluid rounded-circle mx-2 h4" src="https://github.com/rhlai.png" style="width: 25px">Raymond</dt>
               <dd class="col-sm-2"></dd>
               <dt class="col-sm-2">Done:</dt>
               <dd class="col-sm-9">Added click and drag camera feature.</dd>
               <dt class="col-sm-2">To Do:</dt>
               <dd class="col-sm-9">Fix bugs.</dd>
             </dl>
           </li>
          </ul>

        </div>
        
        <div class="overflow-auto col-lg-6 mx-0" style="height: 400px">
        <img src="img/powerpoint.png" class="w-100">
        <img src="img/video.jpg" class="w-100">
        <img src="img/HintWindow.png" class="w-100">
        
                
        </div>
       
      </div>     
    </div> 
    `;
  }
}

customElements.define('update12-component', Update12);
