/* eslint-disable */
// https://github.com/shelljs/shelljs
require('shelljs/global')

var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // CSS文件单独提取出来


console.log(
	'  Tip:\n' +
	'  Built files are meant to be served over an HTTP server.\n' +
	'  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.resolve(__dirname, '../dist/')
console.log( assetsPath )
rm( '-rf', assetsPath )
mkdir( '-p', assetsPath )

let webpackConfig = {
	entry: {
		app: path.resolve(__dirname, '../src/web/app.js')
	},
	output: {
		path: assetsPath,
		filename: '[name].js',
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.coffee$/,
				use: [ 'coffee-loader' ]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					// "style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"scss-loader" // compiles Sass to CSS, using Node Sass by default
				]
			}
		]
	},
	plugins: [
		// extract css into its own file
		new MiniCssExtractPlugin({
			filename: `${assetsPath}css/[name].css`,
		}),
	]
}

webpack(webpackConfig, function (err, stats) {
	spinner.stop()
	if (err) throw err
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}) + '\n')
	cp( '-r', path.resolve( __dirname, '../src/web/vendor' ), assetsPath )
	cp( '-f', path.resolve( __dirname, '../src/web/index.html' ), assetsPath )
})
