const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob");

module.exports = {
    mode: process.env.NODE_ENV,
    entry: [].concat(
        [
            path.resolve(__dirname, './src/js/app.js'),
            path.resolve(__dirname, './src/sass/main.scss'),
        ],
        glob.sync("./src/images/**/*.*")
    ),
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: '/node_modules',
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [ 
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[folder]/[name].[ext]",
                        }
                    },
                    "image-webpack-loader"
                ],
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
    ],

    devServer : {
        liveReload: true
    }
}