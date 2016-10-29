/**
 * Created by sunmy on 16/10/28.
 */

var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: './public/'
    },
    devServer: {
        port: 8000,
        inline: true,
        colors: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
			{
			    test: /\.(jpg|png|svg)$/,
                loader: 'url'
			}
        ]
    }
};
