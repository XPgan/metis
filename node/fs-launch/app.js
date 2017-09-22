var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();

app.use(express.static(path.join(__dirname, 'launchs')));
app.all('*', (req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    next();
});

app.use('/', routes);
module.exports = app;