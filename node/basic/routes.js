/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var login = require('./modules/login');
var upload = require('./modules/upload');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('main');
});

// 登录
router.get('/login', function (req, res) {
    res.render('templates/login');
});
router.post('/login', function (req, res) {
    login(req, res);
});

// 文件上传
router.get('/upload', function (req, res) {
    res.render('templates/upload');
});
router.post('/upload', function (req, res) {
    upload(req, res);
});


module.exports = router;
