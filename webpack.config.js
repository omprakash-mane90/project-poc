const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "reactapp.bundle.js",
  },
  devServer: {
    port: 8080,
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: "info",
    },
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.ts$/, use: "ts-loader" },
      {
        test: /\.scss$/,
        use: [MinCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new MinCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css",
    }),
  ],
};
