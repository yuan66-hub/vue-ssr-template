
const path = require("path")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base.js")

module.exports = merge(baseConfig, {
    mode: "development",
    entry: "./src/server/index.js",
    target: "node",
    output: {
        filename: "bundle.js",
        path: path.resolve(process.cwd(), "server_build")
    }
})