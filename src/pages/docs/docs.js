import Markdown from "@components/Markdown/Markdown";
import Navbar from "@components/Navbar/Navbar";
import teddy, { Component } from "teddytags";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/icons.css";
import tocbot from "tocbot";
import AnchorJS from "anchor-js";
import "tocbot/dist/tocbot.css";
import "./docs.css";
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
    const anchors = new AnchorJS({
      placement: "right",
      icon: "#",
      class: "nav-link text-secondary d-inline"
    });
    anchors.add(".content h1");
    anchors.add(".content h2");
    anchors.add(".content h3");
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: ".toc",
      // Where to grab the headings to build the table of contents.
      contentSelector: ".content",
      // Which headings to grab inside of the contentSelector element.
      headingSelector: "h1, h2, h3",
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: true
    });
  }
  render() {
    return (
      <main>
        <Navbar activeLink="docs" />
        <article>
          <div style="width: 88%" class="float-left content px-3 py-2">
            <Markdown text={doc} />
          </div>
          <div
            style="right: 0; width: 12%"
            class="toc position-fixed pt-2 d-none d-md-block"
          ></div>
        </article>
      </main>
    );
  }
}
teddy.render(<App />, document.querySelector("#root"));
