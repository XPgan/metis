var express = require('express');
var route = require('./route');
var app = express();

app.all('*', (req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});

    next();
});

app.use('/', route);
module.exports = app;
