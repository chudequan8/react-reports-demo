const path = require("path");
const { override, addWebpackAlias, addWebpackPlugin } = require("customize-cra");
const webpack = require("webpack");
const release = require("./release");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  addWebpackAlias({
    "@": resolve("src")
  }),
  addWebpackPlugin(
    // 给文件头部添加本次打包信息
    new webpack.BannerPlugin({
      banner:
        "@buildTime: " +
        release.buildTime +
        "\n" +
        "@branch: " +
        release.branch +
        "\n" +
        "@commitId: " +
        release.commitId,
      entryOnly: true
    })
  )
);
