const path = require("path");

const WebpackAssetsManifest = require("webpack-assets-manifest");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { sassFalse } = require("sass");

module.exports = {
  entry: [
    path.resolve("src", "sass", "main.scss"),
    path.resolve("src", "sass", "mobile.scss"),
    path.resolve("src", "sass", "print.scss"),
    path.resolve("src", "js", "bundle.js"),
  ],
  output: {
    filename: "js/bundle.js",
    path: path.join(__dirname, "static"),
    publicPath: "",
    clean: true,
  },
  watchOptions: {
    ignored: ["/exampleSite/", "/node_modules/"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "[name]-[contenthash:8].min.css",
        },
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "**/*",
          context: path.resolve(__dirname, "src", "static"),
        },
        {
          from: "fonts/*.{woff,woff2}",
          context: path.resolve(__dirname, "dist"),
        },
        {
          from: "sprites/*.svg",
          to: path.resolve(__dirname, "assets"),
          context: path.resolve(__dirname, "dist"),
        },
      ],
    }),

    new WebpackAssetsManifest({
      output: "../data/assets.json",
      integrity: true,
      integrityHashes: ["sha512"],
    }),

    new FaviconsWebpackPlugin({
      logo: path.resolve("src", "favicon", "favicon.svg"),
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
          coast: false,
        },
      },
    }),
  ],
};
