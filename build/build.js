/* eslint-disable */
// https://github.com/shelljs/shelljs
require('shelljs/global')

var ora = require('ora')
var webpack = require('webpack')

console.log(
	'  Tip:\n' +
	'  Built files are meant to be served over an HTTP server.\n' +
	'  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.resolve(__dirname, '../dist')
console.log( assetsPath )
rm( '-rf', assetsPath )
mkdir( '-p', assetsPath )

let webpackConfig = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: config.build.assetsPublicPath,
		filename: '[name].js',
		libraryTarget: "umd"
	},
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
	cp( '-r', path.resolve( __dirname, '../src/vendor' ) + '/*', assetsPath + '/vendor' )
	cp( '-f', path.resolve( __dirname, '../src/index.html' ), assetsPath )
})
