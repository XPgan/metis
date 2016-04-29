var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes');
var app = express();

// 模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 静态文件
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 路由
app.use('/', routes);


module.exports = app;