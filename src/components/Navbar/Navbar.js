import teddy from "teddytags";
// const docsearch = require("docsearch.js");
// import "docsearch.js/dist/cdn/docsearch.css";
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
      // docsearch({
      //   // Your apiKey and indexName will be given to you once
      //   // we create your config
      //   apiKey: "25626fae796133dc1e734c6bcaaeac3c",
      //   indexName: "docsearch",
      //   // Replace inputSelector with a CSS selector
      //   // matching your search input
      //   inputSelector: "#search-bar",
      //   // Set debug to true if you want to inspect the dropdown
      //   debug: false
      // });
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
            <div class="form-inline justify-content-center">
              <div class="input-group">
                <input
                  id="search-bar"
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
