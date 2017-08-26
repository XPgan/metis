var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var route = require('./route');
var app = express();

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', route);

module.exports = app;