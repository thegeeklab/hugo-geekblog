const path = require("path");

const WebpackAssetsManifest = require("webpack-assets-manifest");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
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
  ],
};
