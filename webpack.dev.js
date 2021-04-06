const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify('dev')
        })
    ]
});