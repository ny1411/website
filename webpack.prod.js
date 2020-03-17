const path = require("path");
const pages = require("./pages.config.js").pages;
const PUBLIC_DIR = path.join(__dirname, "public");
const pagesDir = require("./pages.config.js").pageDir;
const htmlDir = path.join(pagesDir, require("./pages.config.js").html);
var HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
let entires = {};
Object.keys(pages).forEach(page => {
  entires[page] = path.join(__dirname, pagesDir, page, pages[page].main);
});
let html = {};
Object.keys(pages).forEach(page => {
  html[page] = {
    title: pages[page].title,
    favicon: path.join(__dirname, "src/assets/favicon.ico"),
    template: path.join(__dirname, htmlDir),
    chunks: [page]
  };
  if (/index/.test(page)) {
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
  mode: "production",
  output: {
    filename: "[name][hash].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  devtool: "",
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
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
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
              name: "[name].[ext]?[hash]"
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
              name: "[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        terserOptions: {
          mangle: true,
          output: { comments: false }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    ...htmlpages,
    new CompressionPlugin({
      test: /\.(js)$/,
      algorithm: "gzip",
      minRatio: Number.MAX_SAFE_INTEGER, // Compress everything
      compressionOptions: { level: 9 },
      deleteOriginalAssets: false
    })
  ]
};
