/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var login = require('./modules/login');
var register = require('./modules/register');
var logout = require('./modules/logout');
var upldPortrait = require('./modules/upld-portrait');
var find = require('./modules/find-record');
var router = express.Router();
var DEFAULTP = '/upload/portrait/default_portrait.jpg';

router.get('/', function (req, res) {
    res.render('index');
});
router.get('/profile', function (req, res) {
    res.redirect('/login');
});

// 登录
router.get('/login', function (req, res) {
    var user = req.cookies.user;

    find.do(req);
    if (user) {
        find.portrait(function (portrait) {
            res.render('profile', {username: user, portrait: portrait || DEFAULTP});
        });
    } else {
        res.render('index');
    }
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
