import teddy from "teddytags";
import docsearch from "docsearch.js";
import "docsearch.js/dist/cdn/docsearch.css";
import tocbot from "tocbot";
import "tocbot/dist/tocbot.css";
import AnchorJS from "anchor-js";
import "@assets/prism-oceanic.css";
import "@assets/oml.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@components/Navbar/Navbar";
import "@components/Markdown/Markdown.css";
import "@components/Code/Code.css";
const App = () => {
  return <Navbar activeLink="docs" />;
};
document.addEventListener("DOMContentLoaded", () => {
  function CopyToClipboard(element) {
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
  document.querySelectorAll("pre").forEach(dom => {
    let initialHTML = dom.outerHTML;
    dom.outerHTML = `<div id="codewrapper">
    <button id="copybutton">Copy</button>
    ${initialHTML}
    </div>`;
    dom.querySelectorAll("#copybutton").forEach(e => {
      e.addEventListener("click", () => {
        let code = e.nextSibling;
        CopyToClipboard(code);
      });
    });
  });
  let div = document.createElement("div");
  teddy.render(<App />, div);
  document.querySelector("#root").prepend(div);
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
  docsearch({
    apiKey: "2eb478ca5883df99298c859f13049c88",
    indexName: "teddy",
    inputSelector: "#search-bar",
    debug: false
  });
});
