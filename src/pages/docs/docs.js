import Markdown from "@components/Markdown/Markdown";
import Navbar from "@components/Navbar/Navbar";
import teddy, { Component } from "teddytags";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/icons.css";
import "bootstrap/dist/js/bootstrap";
import doc from "./docs.md";
class App extends Component {
  constructor(props) {
    super(props);
  }
  CopyToClipboard(element) {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    } else if (document.selection) {
      // IE?
      document.selection.empty();
    }

    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(element);
      window.getSelection().addRange(range);
      document.execCommand("copy");
    }
  }
  componentDidMount(dom) {
    dom.querySelectorAll("pre").forEach(dom => {
      let initialHTML = dom.innerHTML;
      dom.innerHTML =
        '<button title="copy the code" id="copybutton">Copy</button>' +
        initialHTML;
      dom.querySelectorAll("#copybutton").forEach(e => {
        e.addEventListener("click", () => {
          let code = e.nextSibling;
          this.CopyToClipboard(code);
        });
      });
    });
  }
  render() {
    return (
      <main>
        <Navbar activeLink="docs" />
        <div class="px-3 py-2">
          <Markdown text={doc} />
        </div>
      </main>
    );
  }
}
teddy.render(<App />, document.querySelector("#root"));
