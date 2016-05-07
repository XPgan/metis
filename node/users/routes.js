/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var login = require('./modules/login');
var logout = require('./modules/logout');
var register = require('./modules/register');
var find = require('./modules/find-record');
var upldPortrait = require('./modules/upld-portrait');
var changeInfo = require('./modules/change-info');
var router = express.Router();

var DEFAULTP = '/upload/portrait/default_portrait.jpg';
var DEFAULTI = '还咩有自我评价哦~';

router.get('/', function (req, res) {
    res.render('index');
});
router.get('/profile', function (req, res) {
    var user = req.cookies.user;

    find.do(req);
    if (user) {
        find.info(function (info) {
            res.render('profile', {
                username: user,
                portrait: info.portrait || DEFAULTP,
                sex: info.sex,
                tel: info.tel,
                qq: info.qq,
                intro: info.intro || DEFAULTI
            });
        });
    } else {
        res.render('index');
    }
});

// 登录
router.get('/login', function (req, res) {
    res.render('index');
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

// 修改信息
router.post('/change/info', function (req, res) {
    changeInfo(req, res);
});

module.exports = router;
