class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand mx-5" style="width: 70px;" href="Home.html"><img src="img/logo.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0" style="background-color: white">
        <li class="nav-item">
          <a class="nav-link active" href="Home.html">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Updates.html">updates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Gallery.html">gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Team.html">the team</a>
        </li>
      </ul>
      <span class="navbar-text mx-5">
        <a class="nav-link" href="https://github.com/Kitsune-Laboritories"><h2 class="bi bi-github" style="width: 50px;"></h2></a>
      </span>
    </div>
  </div>
</nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);