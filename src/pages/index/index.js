import teddy, { Component } from "teddytags";
import Content from "./Content/Content";
import Navbar from "@components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/icons.css";
import "bootstrap/dist/js/bootstrap";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Navbar activeLink="home" />
        <Content />
      </main>
    );
  }
}
const render = () => {
  teddy.render(<App />, document.querySelector("#root"));
  global.h = teddy.h;
  global.Component = teddy.Component;
  global.render = teddy.render;
  global.TeddyTags = teddy.TeddyTags;
};
render();
