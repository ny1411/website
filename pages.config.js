//WARNING!! DONT USE PATH.JOIN OR PATH.RESOLVE here
module.exports = {
  pageDir: "src/pages",
  html: "index.ejs",
  pages: {
    index: {
      main: "index.js",
      title: "TeddyTags"
    },
    docs: {
      main: "docs.js",
      title: "TeddyTags - Documentation"
    },
  }
}
