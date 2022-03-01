const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", //not use but good to use
      remotes: {
        marketingAlias:
          "marketingGloabalVar@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
