var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: './entry.js',
    output: {
        path: './build',
        filename: 'bundle.js',
    },
    devServer: {
        port: 8000,
        inline: true,
        contentBase: './src'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /node_modules/
            },
			{
			    test: /\.(jpg|png|svg)$/,
                loader: 'url'
			}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
