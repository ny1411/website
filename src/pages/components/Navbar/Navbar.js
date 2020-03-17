import teddy from "teddytags";
import "./Navbar.css";
export default class Navbar extends teddy.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(dom) {
    let activeLink = dom.querySelector(`.main-nav .${this.props.activeLink}`);
    activeLink.classList.toggle("active");
  }
  render() {
    return (
      <nav>
        <nav class="navbar site-header fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            TeddyTags
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="main-nav navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link home" href={window.location.origin}>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link repl" href={window.location.origin+"/repl"}>
                  REPL
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link docs" href={window.location.origin+"/docs"}>
                  Documentation
                </a>
              </li>
            </ul>
            <div class="form-inline justify-content-center">
              <div class="input-group">
                <input
                  class="form-control border border-light"
                  type="search"
                  placeholder="Search"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-light" type="submit">
                    Go
                  </button>
                </div>
              </div>
            </div>
            <ul class="navbar-nav flex-row ml-auto justify-content-start px-2 py-2">
              <li class="nav-item px-2">
                <a
                  class="text-light"
                  href="https://github.com/teddytags/teddytags"
                >
                  <i class="lead icon-github"></i>
                </a>
              </li>
              <li class="nav-item px-2">
                <a
                  class="text-danger"
                  href="https://npmjs.com/package/teddytags"
                >
                  <i class="lead icon-npm"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="mt-5 pt-2"></div>
      </nav>
    );
  }
}
