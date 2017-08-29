var express = require('express');
var route = require('./route');
var app = express();

app.use('/', route);

module.exports = app;
