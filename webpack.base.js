const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = function (isServer = false) {
    const plugins = [];
    
    if (!isServer) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/bundle.[hash:5].css"
            })
        )
    }

    const getStyleLoaders = (cssOptions, preProcessor = '') => {
        const loaders = []

        if (!isServer) {
            loaders.push(
                require.resolve(MiniCssExtractPlugin.loader)
            )
        } else {
            loaders.push(require.resolve('isomorphic-style-loader'))
        }

        loaders.push({
            loader: require.resolve('css-loader'),
            options: cssOptions,
        })

        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: false,
                        lessOptions: {
                            // paths: [paths.appNodeModules],
                            javascriptEnabled: true,
                        },
                    },
                },
            );
        }
        return loaders;
    };

    return {
        mode: "development",
        watch: true,
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            },
            extensions: ['.ts', '.js', '.jsx', '.tsx']
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                        }
                    ]
                },
                {
                    test: lessModuleRegex,
                    use: getStyleLoaders(
                        {
                            importLoaders: 3,
                            esModule: false,
                            modules: {
                                auto: true,
                                mode: 'local',
                                // namedExport: true,
                                exportLocalsConvention: 'camelCaseOnly',
                                // exportOnlyLocals: true,
                                localIdentName: '[local]_[hash:base64:5]',
                            },
                        },
                        'less-loader',
                    ),
                },
                {
                    test: lessRegex,
                    exclude: lessModuleRegex,
                    use: getStyleLoaders(
                        {
                            esModule: false,
                            importLoaders: 3,
                            modules: {
                                mode: 'icss',
                            },
                        },
                        'less-loader',
                    ),
                },
            ]
        },
    };
}