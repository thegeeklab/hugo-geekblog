const path = require("path")

const WebpackAssetsManifest = require("webpack-assets-manifest")
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: {
    css: [
      path.resolve("src", "sass", "main.scss"),
      path.resolve("src", "sass", "mobile.scss"),
      path.resolve("src", "sass", "print.scss")
    ],
    bundle: path.resolve("src", "js", "app.js"),
    mermaid: path.resolve("src", "js", "mermaid.js")
  },
  output: {
    filename: "js/[name].bundle.min.js",
    path: path.join(__dirname, "static"),
    publicPath: "/",
    clean: true
  },
  watchOptions: {
    ignored: ["/exampleSite/", "/node_modules/"]
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: ["babel-loader"],
      //   exclude: /node_modules/
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "[name]-[contenthash:8].min.css"
        },
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"]
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          context: path.resolve(__dirname, "src", "static")
        },
        {
          from: "fonts/*.{woff,woff2}",
          context: path.resolve(__dirname, "dist")
        },
        {
          from: "sprites/*.svg",
          to: path.resolve(__dirname, "assets"),
          context: path.resolve(__dirname, "dist")
        }
      ]
    }),

    new WebpackAssetsManifest({
      output: "../data/assets.json",
      integrity: true,
      integrityHashes: ["sha512"]
    }),

    new FaviconsWebpackPlugin({
      logo: path.resolve("src", "static", "favicon", "favicon.svg"),
      cache: true,
      prefix: "favicon/",
      inject: false,
      favicons: {
        background: "#2f333e",
        theme_color: "#2f333e",
        icons: {
          android: { offset: 10 },
          appleIcon: { offset: 10 },
          appleStartup: { offset: 10 },
          favicons: true,
          windows: { offset: 10 },
          yandex: false,
          coast: false
        }
      }
    })
  ]
}
