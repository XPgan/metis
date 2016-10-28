/**
 * Created by sunmy on 16/10/28.
 */

var path = require('path');
module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, 'output'),
        filename: 'bundle.js',
        publicPath: './output/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    }
};
