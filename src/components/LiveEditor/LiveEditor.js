import teddy from "teddytags";
import codemirror from "codemirror";
import { transform } from "@babel/standalone/babel.min";
import "codemirror/lib/codemirror.css";
import "./LiveEditor.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/display/autorefresh";
const babelOpts = {
  presets: [
    ["env", { modules: false, targets: { chrome: 60 } }],
    ["react", { pragma: "h" }]
  ]
};
export default class LiveEditor extends teddy.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderHTML(editor, frame) {
    let editorval = editor.getValue();
    let newDOM = new DOMParser().parseFromString(editorval, "text/html");
    let scripts = newDOM.querySelectorAll("script");
    let val = newDOM.body.innerHTML;
    frame.innerHTML = "";
    setTimeout(() => {
      scripts.forEach(s => {
        try {
          frame.innerHTML = val;
          let code = transform(s.text, babelOpts).code;
          setTimeout(new Function(code)(), 10);
        } catch (e) {
          let error = `<div id="error">
          <h1 style="color: red">${e.name}</h1>
          <pre>${e.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
          </div>`;
          setTimeout((frame.innerHTML = error), 1000);
        }
      });
    }, 200);
  }
  renderJSX(editor, frame) {
    let editorval = editor.getValue();
    setTimeout(() => {
      try {
        frame.innerHTML = "";
        let code = transform(editorval, babelOpts).code;
        setTimeout(new Function(code)(), 10);
      } catch (e) {
        let error = `<h1 style="color: red">${e.name}</h1><pre>${e.message}</pre>`;
        setTimeout((frame.innerHTML = error), 1000);
      }
    }, 200);
  }
  componentDidMount(dom) {
    let output = (this.state.output = dom.querySelector("#output"));
    let editor = codemirror(dom.querySelector("#codeEditor"), {
      lineNumbers: true,
      autoRefresh: 500,
      mode: this.props.mode,
      theme: "material-palenight"
    });
    editor.setSize("100%", "100%");
    editor.setValue(this.props.code || "");
    dom.querySelector("#codeEditor").click();
    if (this.props.mode.includes("html")) this.renderHTML(editor, output);
    else if (this.props.mode === "jsx") this.renderJSX(editor, output);
    editor.on("change", () => {
      if (this.props.mode.includes("html")) this.renderHTML(editor, output);
      else if (this.props.mode === "jsx") this.renderJSX(editor, output);
    });
  }
  render() {
    return (
      <div style="width: 100%; height: 100%">
        <div
          class="col-sm w-50 h-100"
          id="codeEditor"
          style=" float:left"
        ></div>
        <div
          class="col-sm w-50 h-100"
          id="output"
          style="background: #DDD; float: right"
        ></div>
      </div>
    );
  }
}
