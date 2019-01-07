const path = require('path');

module.exports = {

	entry: ['./public/stylesheets/style.scss'],
	output: {
		path: path.resolve(__dirname, './public/stylesheets')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,

				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css'
						},
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};
