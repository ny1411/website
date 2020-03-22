import teddy from "teddytags";
const docsearch = require("docsearch.js");
import "docsearch.js/dist/cdn/docsearch.css";
import "@assets/icons.css";
import "./Navbar.css";
export default class Navbar extends teddy.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(dom) {
    let activeLink = dom.querySelector(`.main-nav .${this.props.activeLink}`);
    activeLink.classList.toggle("active");
    document.addEventListener("DOMContentLoaded", () => {
      docsearch({
        apiKey: "2eb478ca5883df99298c859f13049c88",
        indexName: "teddy",
        inputSelector: "#search-bar",
        debug: true
      });
    });
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
                <a class="nav-link home" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link repl" href="/repl">
                  REPL
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle docs"
                  href="#"
                  data-toggle="dropdown"
                >
                  Docs
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/docs/getting-started">
                    Getting Started
                  </a>
                  <a class="dropdown-item" href="/docs/api">
                    API
                  </a>
                </div>
              </li>
            </ul>
              <div class="input-group justify-content-center">
                <div class="input-group-prepend">
                    <i class="input-group-text bg-light lead icon-search"></i>
                </div>
                <input
                  id="search-bar"
                  class="form-control border border-light"
                  type="search"
                  placeholder="Search"
                />
              </div>
            <ul class="navbar-nav flex-row ml-auto justify-content-start px-2 py-2">
              <li class="nav-item px-2">
                <a
                  class="text-light text-decoration-none"
                  href="https://github.com/teddytags/teddytags"
                >
                  <i class="lead icon-github"></i>
                </a>
              </li>
              <li class="nav-item px-2">
                <a
                  class="text-danger text-decoration-none"
                  href="https://npmjs.com/package/teddytags"
                >
                  <i class="lead icon-npm"></i>
                </a>
              </li>
              <li class="nav-item px-2">
                <a
                  class="text-info text-decoration-none"
                  href="https://yarnpkg.com/package/teddytags"
                >
                  <i class="lead icon-yarn"></i>
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
