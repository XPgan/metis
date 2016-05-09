/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var log = require('./modules/log');
var edit = require('./modules/edit-info');
var find = require('./modules/find-record');
var router = express.Router();

var DEF_PORTRAIT = '/upload/portrait/default_portrait.jpg';
var DEF_INTRO = '还咩有自我评价哦~';

// 主页
router.get(/^\/(login)?$/, function (req, res) {
    res.render('index');
});
// 个人页
router.get('/profile', function (req, res) {
    // 查询记录
    find.do(req);

    if (req.cookies.user) {
        find.info(function (info) {
            res.render('profile', {
                username: req.cookies.user,
                portrait: info.portrait || DEF_PORTRAIT,
                sex: info.sex,
                tel: info.tel,
                qq: info.qq,
                intro: info.intro || DEF_INTRO
            });
        });
    } else {
        res.render('index');
    }
});
// 注册
router.get('/register', function (req, res) {
    res.render('register');
});


router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/logout', function (req, res) {
    log.logout(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});
// 修改信息
router.post('/edit', function (req, res) {
    edit.do(req, res);
});
router.post('/edit/portrait', function (req, res) {
    edit.portrait(req, res);
});


module.exports = router;