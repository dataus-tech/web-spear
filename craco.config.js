// craco.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const plugins = webpackConfig.plugins || [];

      plugins.push(
        new HtmlWebpackPlugin({
          template: "./src/popup.html",
          filename: "popup.html",
          chunks: ["main"],
        })
      );

      return {
        ...webpackConfig,
        entry: {
          main: [
            env === "development" &&
              require.resolve("react-dev-utils/webpackHotDevClient"),
            paths.appIndexJs,
          ].filter(Boolean),
          // 파일이름: 현재 path
          content: "./src/content.js",
          background: "./src/background.js",
          popup: "./src/popup.js",
        },
        output: {
          ...webpackConfig.output,
          // build 폴더 안에 생성될 path
          filename: "[name].js",
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
      };
    },
  },
};
