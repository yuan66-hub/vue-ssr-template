const path = require("path")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base.js")

module.exports = merge(baseConfig, {
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(process.cwd(), "client_build")
    },
})