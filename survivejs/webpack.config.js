const path = require('path');
const webpack = require('webpack');

const PATHS = {
	app: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	devtool: 'inline-source-maps',
    entry: {
    	app: PATHS.app
    },
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	resolve: {
  	extensions: ['', '.js', '.jsx']
  },
	devServer: {
		historyApiFallback: true,
		inline: true,
		colors: true,
		progress: true,
		watch: true,
		host: process.env.HOST || 'localhost',
		port: process.env.PORT || '3000'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel?cacheDirectory']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
			}
		]
	}
};