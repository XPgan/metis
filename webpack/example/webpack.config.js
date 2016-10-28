/**
 * Created by sunmy on 16/10/28.
 */

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'bundle.js',
        publicPath: './output/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
			{test: /\.(jpg|png|svg)$/, loader: 'url'}
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};
