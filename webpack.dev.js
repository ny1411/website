const path = require("path");
const pages = require("./pages.config.js").pages;
const PUBLIC_DIR = path.join(__dirname, "public");
const pagesDir = require("./pages.config.js").pageDir;
var HtmlWebpackPlugin = require("html-webpack-plugin");
let entires = {};
Object.keys(pages).forEach(page => {
  entires[page] = path.join(__dirname, pagesDir, page, pages[page].main);
});
let html = {};
Object.keys(pages).forEach(page => {
  html[page] = {
    title: pages[page].title,
    favicon: path.join(__dirname, "src/assets/favicon.ico"),
    template: path.join(__dirname, pagesDir, page, pages[page].html),
    chunks: [page]
  };
  if (/index\.(ejs|html)/.test(pages[page].html)) {
    html[page].filename = path.join(PUBLIC_DIR, "index.html");
  } else {
    if (pages[page].index || pages[page].index === undefined)
      html[page].filename = path.join(PUBLIC_DIR, page, "index.html");
    else
      html[page].filename = path.join(
        PUBLIC_DIR,
        pages[page].html.replace(/(ejs)/g, "html")
      );
  }
});
let htmlpages = [];
Object.keys(html).forEach(h => htmlpages.push(new HtmlWebpackPlugin(html[h])));
module.exports = {
  entry: entires,
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  stats: {
    logging: "error",
    modules: false,
    colors: true
  },
  resolve: {
    aliasFields: ["browser"],
    alias: {
      "@components": path.resolve(__dirname, "src", "pages", "components"),
      "@assets": path.resolve(__dirname, "src", "assets")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(html|htm)$/i,
        loader: "html-loader",
        options: {
          attrs: [":data-src"]
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: htmlpages,
  devServer: {
    contentBase: PUBLIC_DIR,
    compress: true,
    port: 1300,
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    clientLogLevel: "error"
  }
};
