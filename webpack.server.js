const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
// const { getStyleLoaders, lessModuleRegex } = require("./webpack.base");
// console.log(getStyleLoaders)
const serverConfig = {
    target: 'node',
    entry: './src/server',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(png)|(jpg)|(gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "img/[name].[hash:5].[ext]",
                            emitFile: false
                        }
                    }
                ]
            },
            // {
            //     test: lessModuleRegex,
            //     use: getStyleLoaders(
            //         {
            //             importLoaders: 3,
            //             esModule: false,
            //             modules: {
            //                 auto: true,
            //                 mode: 'local',
            //                 // namedExport: true,
            //                 exportLocalsConvention: 'camelCaseOnly',
            //                 // exportOnlyLocals: true,
            //                 localIdentName: '[local]_[hash:base64:5]',
            //             },
            //         },
            //         'less-loader',
            //         true
            //     ),
            // },
        ],

    }
}

module.exports = merge(baseConfig(true), serverConfig)

