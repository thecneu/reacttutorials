
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
    devtool: 'inline-source-maps',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './app/index.js'
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
        inline: false,
        hot: true,
        progress: true,
        colors: true,
        open: true,
        host: 'localhost',
        port: '3000',
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            title: 'Hello'
        })
    ],
    postcss: function() {
        return [precss, autoprefixer]
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: ['react-hot', 'babel-loader?cacheDirectory']
            },
            {
                test: /\.s?css$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader!sass-loader?sourceMap'
            }
        ]
    }
};
