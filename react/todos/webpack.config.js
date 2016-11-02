var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/main.js',
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
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                 }
            },
			{
			    test: /\.(jpg|png|svg)$/,
                loader: 'url'
			}
        ]
    }
};
