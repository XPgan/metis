/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var log = require('./modules/log');
var edit = require('./modules/edit-info');
var find = require('./modules/find-record');
var router = express.Router();

// 主页
router.get(/^\/(login)?$/, function (req, res) {
    find.all(function (users) {
        res.render('index', {users: users});
    });
});
// 个人页
router.get('/profile/:id', function (req, res) {
    var id = req.params.id;

    find.do(id);
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
router.post('/edit', function (req, res) {
    edit.do(req, res, log.user);
});
router.post('/edit/portrait', function (req, res) {
    edit.portrait(req, res, log.user);
});


module.exports = router;