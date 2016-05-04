const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-maps',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './index.js'
    ],
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        progress: true,
        colors: true,
        open: true,
        stats: 'errors-only',
        host: 'localhost',
        port: '3000'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          "process.env": {
             NODE_ENV: JSON.stringify("development")
           }
        })
    ],
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: ['react-hot', 'babel']
            }
        ]
    }
};