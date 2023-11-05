const path = require('path');
const baseConfig = require("./webpack.base");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const clientConfig = {
    mode: 'development',
    entry: './src/client',
    devtool: 'source-map',
    output: {
        filename: "js/bundle.[contenthash:5].js",
        path: path.resolve(__dirname, "./public"),
        publicPath: "/",
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"]
        })
    ],
    module: {
        rules: [{
            test: /\.(png)|(jpg)|(gif)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[hash:5].[ext]",
                        // emitFile: false
                    }
                }
            ]
        }]
    }
}

module.exports = merge(baseConfig(), clientConfig)