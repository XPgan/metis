/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var log = require('./modules/log');
var crease = require('./modules/crease');
var edit = require('./modules/edit');
var find = require('./modules/find');
var router = express.Router();

// 主页
router.get(/^\/(login)?$/, function (req, res) {
    find.do('user');
    find.all(function (users) {
        res.render('index', {
            log_user: log.user,
            users: users
        });
    });
});
// 个人页
router.get('/profile/:id', function (req, res) {
    var id = req.params.id;

    find.do('user', id);
    find.info(function (info) {
        if (info) {
            res.render('profile', {
                is_author: (id == log.user),
                info: info
            });
        } else {
            res.render('../message', {
                code: 404,
                message: '这枚用户还未注册本站'
            });
        }
    });
});
// 注册
router.get('/register', function (req, res) {
    res.render('register');
});
// 创建日记
router.get('/publish/diary', function (req, res) {
    if (log.user) {
        res.render('publish');
    } else {
        res.redirect('/');
    }
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
router.post('/exit', function (req, res) {
    log.exit(req, res);
});
// 修改信息
router.post('/edit/info', function (req, res) {
    edit.user.info(req, res, log.user);
});
router.post('/edit/portrait', function (req, res) {
    edit.user.portrait(req, res, log.user);
});
// 发布日记
router.post('/publish/diary', function (req, res) {
    crease.publish.diary(req, res, log.user);
});

module.exports = router;