import teddy from "teddytags";
import "./Header.css"
export default class Header extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div class="jumbotron text-center hero-head">
        <h1>TeddyTags</h1>
        <div class="lead">The superfast way to custom elements.</div>
    </div>;
  }
}
