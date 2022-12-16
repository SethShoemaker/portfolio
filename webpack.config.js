const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: [
        path.resolve(__dirname, './src/js/app.js'),
        path.resolve(__dirname, './src/sass/main.scss')
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: '/node_modules',
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}