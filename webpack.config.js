const path = require("path");

module.exports = {
    mode: 'development' ? 'development' : 'production',
    devtool: 'production' ? 'source-map' : false,

    entry: {
        main: "./app/js/index.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: require.resolve("babel-loader"),
                query: {
                    presets: [
                        ["@babel/preset-env", {
                            modules: false
                        }]
                    ]
                }
            }
        }]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "app/blocks/modules"),
            "%components%": path.resolve(__dirname, "app/blocks/components")
        }
    }
};