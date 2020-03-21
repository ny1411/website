const path = require("path");
const fs = require("fs");
const marked = require("marked");
const Prism = require("prismjs");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-shell-session");
require("prismjs/components/prism-diff");
marked.setOptions({
  highlight: (code, lang) => {
    if (!lang) {
      const html = Prism.highlight(code, Prism.languages.markup, "markup");
      return html;
    }
    const html = Prism.highlight(code, Prism.languages[lang], lang);
    return html;
  }
});
const HtmlWebpackPlugin = require("html-webpack-plugin");
const makeConfigObj = f => {
  const html = marked.parse(fs.readFileSync(f, "utf-8"));
  const filename =
    f === "index.md"
      ? path.join("blog", path.relative(__dirname, f).replace(/\.md$/, ".html"))
      : path.join(
          "blog",
          path.relative(__dirname, f).replace(/\.md$/, ""),
          "index.html"
        );
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, "./blog.ejs"),
    title:
      f === "index.md" ? "TeddyTags Blog" : "Blog- " + path.basename(f, ".md"),
    filename: filename,
    chunks: ["blog"],
    bodyHTML: html
  });
};
const walk = (dir, callback) => {
  fs.readdirSync(dir, "utf-8").forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
};
const makeConfig = dir => {
  let config = [];
  let callback = f => {
    if (/\.md$/.test(f)) {
      config.push(makeConfigObj(f));
    }
  };
  walk(dir, callback);
  return config;
};
module.exports = makeConfig(__dirname);
