import teddy from "teddytags";
import Header from "@components/Header/Header";
import Code from "@components/Code/Code";
import LiveEditor from "@components/LiveEditor/LiveEditor";
import "./Content.css";
export default class Content extends teddy.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article class="content">
        <Header />
        <div class="pl-5 pr-5">
          <h1 class="td-title">Setup</h1>
          <hr />
          <div class="container-fluid">
            <h2 class="td-lead">Browser</h2>
            TeddyTags is hosted by CDNs like jsDelivr and UNPKG.
            <hr />
            <h3 class="td-light">To use the UMD module (no ESM)</h3>
            <Code
              lang="html"
              code={`<script src='https://unpkg.com/teddytags@latest/lib/legacy.js'></script>`}
            />
            All the exports are named under one variable i.e TeddyTags The
            default export can be destructed like this:
            <Code
              lang="javascript"
              code={`const {h, render, TeddyTags, Component} = TeddyTags`}
            />
            <hr />
            <h3 class="td-light">To use the ES Module</h3>
            <Code
              lang="javascript"
              code={[
                "//named import",
                'import {h, Component, TeddyTags, render} from "https://unpkg.com/teddytags@latest/lib/teddytags.js"',
                "//default import",
                'import teddy from "https://unpkg.com/teddytags@latest/lib/teddytags.js"'
              ].join("\n")}
            />
          </div>
          <div class="container-fluid">
            <h2 class="td-lead">NPM</h2>
            Run the following command
            <Code lang="shell-session" code="npm install teddytags" />
          </div>
        </div>
      </article>
    );
  }
}
