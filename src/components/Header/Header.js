import teddy from "teddytags";
import BigLogo from "@assets/big-dark-logo.svg";
import "./Header.css";
export default class Header extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="jumbotron text-center hero-head">
        <div id="logo">
          <img height="250" src={BigLogo} alt="TeddyTags Logo" />
        </div>
        <div class="lead">The superfast way to custom elements.</div>
      </div>
    );
  }
}
