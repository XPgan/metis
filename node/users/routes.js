/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var login = require('./modules/login');
var register = require('./modules/register');
var logout = require('./modules/logout');
var upldPortrait = require('./modules/upld-portrait');
var router = express.Router();

router.get('/', function (req, res) {
    var user = req.cookies.user;
    if (user) {
        res.render('profile', {username: user});
    } else {
        res.render('login');
    }
});
router.get('/profile', function (req, res) {
    res.redirect('/');
});

// 登录
router.get('/login', function (req, res) {
    res.render('login');
});
router.post('/login', function (req, res) {
    login(req, res);
});

// 注册
router.get('/register', function (req, res) {
    res.render('register');
});
router.post('/register', function (req, res) {
    register(req, res);
});

// 注销
router.post('/logout', function (req, res) {
    logout(req, res);
});

// 头像上传
router.post('/upload/portrait', function (req, res) {
    upldPortrait(req, res);
});


module.exports = router;
