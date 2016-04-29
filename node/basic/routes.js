/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var login = require('./modules/login');
var upload = require('./modules/upload');
var router = express.Router();

router.get('/', function (req, res) {
    var is_login = req.cookies.is_login;

    if (is_login) {
        res.render('upload');
    } else {
        res.render('login');
    }
});
router.get(/^\/(login|upload)\/?$/, function (req, res) {
    res.redirect('/');
});

// 登录
router.post('/login', function (req, res) {
    login(req, res);
});

// 文件上传
router.post('/upload', function (req, res) {
    upload(req, res);
});


module.exports = router;
