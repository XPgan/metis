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
    if (log.user) {
        res.render('chatroom');
    } else {
        res.redirect('/');
    }
});
router.get('/edit/myinfo', function (req, res) {
    if (log.user) {
        find.do(log.user);
        find.info(res, function (info) {
            res.render('myinfo', {info: info});
        });
    } else {
        res.redirect('/');
    }
});


router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});
router.post('/edit/user/info', function (req, res) {
    edit.user.info(req, res, log.user);
});


module.exports = router;