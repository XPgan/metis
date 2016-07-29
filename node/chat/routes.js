/**
 * Created by sunmy on 16/7/14.
 */

var express = require('express');
var find = require('./modules/find');
var log = require('./modules/log');
var edit = require('./modules/edit');
var router = express.Router();

router.get(/^\/(login)?$/, function (req, res) {
    res.render('index');
});
router.get('/chatroom', function (req, res) {
    var cur_user = req.cookies.user;
    if (cur_user == '0') {
        res.redirect('/');
    } else {
        res.render('chatroom', {cur_user: cur_user});
    }
});
router.get('/edit/myinfo', function (req, res) {
    var cur_user = req.cookies.user;
    if (cur_user == '0') {
        res.redirect('/');
    } else {
        find.do(cur_user);
        find.info(res, function (info) {
            res.render('myinfo', {info: info});
        });
    }
});

router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});
router.post('/exit', function (req, res) {
    log.exit(req, res);
});
router.post('/edit/user/info', function (req, res) {
    edit.user.info(req, res, req.cookies.user);
});

module.exports = router;