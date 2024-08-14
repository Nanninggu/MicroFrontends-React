const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Ensure this file exists
  mode: "development",
  devServer: {
    port: 3004,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html", // Ensure this file exists
    }),
    new ModuleFederationPlugin({
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        "./FooterApp": "./src/FooterApp", // Ensure this file exists
      },
    }),
  ],
};
