const path = require("path");
const pages = require("./pages.config.js").pages;
const PUBLIC_DIR = path.join(__dirname, "public");
const pagesDir = require("./pages.config.js").pageDir;
const htmlDir = path.join(pagesDir, require("./pages.config.js").html);
const blogs = require("./src/pages/blog/make");
const docs = require("./src/pages/docs/make");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CnameWebpackPlugin = require("cname-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { GenerateSW } = require("workbox-webpack-plugin");
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
    inject: 'body',
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
  entry: {
    ...entires,
    blog: "./src/pages/blog/blog.js",
    docs: "./src/pages/docs/docs.js"
  },
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
      "@components": path.resolve(__dirname, "src", "components"),
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../../"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "[name].[hash].[ext]",
              outputPath: "assets/images/"
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
              limit: 1024 * 8,
              name: "[name].[hash].[ext]",
              outputPath: "assets/fonts/"
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
          test(mod /* , chunk */) {
            if (!mod.context.includes("node_modules")) {
              return false;
            }
            if (["@babel"].some(str => mod.context.includes(str))) {
              return false;
            }
            return true;
          },
          name: "vendors",
          chunks: "all"
        },
        babel: {
          test: /[\\/]node_modules[\\/](@babel\/standalone)[\\/]/,
          name: "babel",
          chunks(chunk) {
            return chunk.name === "repl";
          }
        }
      }
    }
  },
  plugins: [
    ...htmlpages,
    ...blogs,
    ...docs,
    new MiniCssExtractPlugin({ filename: "assets/css/[name].css" }),
    new OptimizeCssAssetsPlugin(),
    new CnameWebpackPlugin({
      domain: "teddy.js.org"
    }),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      test: /\.(js|jpg|png)$/,
      algorithm: "gzip",
      minRatio: Number.MAX_SAFE_INTEGER, // Compress everything
      compressionOptions: { level: 9 },
      deleteOriginalAssets: false
    }),
    new GenerateSW()
  ]
};
