/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var login = require('./modules/login');
var register = require('./modules/register');
var logout = require('./modules/logout');
var upldPortrait = require('./modules/upld-portrait');
var User = require('./models').User;
var router = express.Router();

router.get('/', function (req, res) {
    var portrait = '';
    var user = req.cookies.user;
    var record = {user_name: user};
    var returns = {portrait: 1};

    if (user) {
        User.find(record, returns, {}, function (err, result) {
            portrait = result[0].portrait || '/upload/portrait/default_portrait.jpg';
            res.render('profile', {username: user, portrait: portrait});
        });
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
