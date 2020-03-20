import teddy from "teddytags";
import Prism from "prismjs";
global.Prism = Prism;
import "@assets/oml.css";
import "./Code.css";
import "@assets/prism-oceanic.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-typescript";
export default class Code extends teddy.Component {
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
    let initialHTML = dom.outerHTML;
    dom.outerHTML = `<div id="codewrapper">
    <button id="copybutton">Copy</button>
    ${initialHTML}
    </div>`;
    dom.querySelectorAll("#copybutton").forEach(e => {
      e.addEventListener("click", () => {
        let code = e.nextSibling;
        this.CopyToClipboard(code);
      });
    });
  }
  render() {
    return (
      <pre class={`language-${this.props.lang}`} style="position: relative;">
        <code>{this.props.code}</code>
      </pre>
    );
  }
}
