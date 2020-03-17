import teddy from "teddytags";
import Prism from "prismjs";
import "@assets/prism-oceanic.css";
import "./Code.css";
import "./Markdown.css";
import "./oml.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-diff";
const marked = require("marked");
marked.setOptions({
  highlight: (code, lang) => {
    if (!lang) {
      const html = Prism.highlight(code, Prism.languages.markup, 'markup');
      return html;
    }
    const html = Prism.highlight(code, Prism.languages[lang], lang);
    return `<pre>${html}</pre>`;
  }
});
export default class Markdown extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div innerHTML={marked.parse(this.props.text)}></div>;
  }
}
