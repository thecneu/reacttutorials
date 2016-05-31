
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    devtool: 'inline-source-maps',
    entry: [
            './app/src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        progress: true,
        colors: true,
        open: true,
        host: 'localhost',
        port: '3000'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            title: 'Twitter Snap'
        })
        // text-extract
    ],
    postcss: function() {
        return [precss, autoprefixer]
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.s?css$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader!sass-loader?sourceMap'
            }
        ]
    }
};