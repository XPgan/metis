/**
 * Created by sunmy on 16/7/14.
 */

var express = require('express');
var log = require('./modules/log');
var edit = require('./modules/edit');
var User = require('./models').User;
var router = express.Router();

router.get(/^\/(login)?$/, function (req, res) {
    res.render('index');
});
router.get('/chatroom', function (req, res) {
    var cur_user = req.cookies.user;
    if (cur_user >> 0) {
        res.render('chatroom', {cur_user: cur_user});
    } else {
        res.redirect('/');
    }
});
router.get('/edit/myinfo', function (req, res) {
    var cur_user = req.cookies.user;
    if (cur_user >> 0) {
        User.find({id: cur_user}, {}, {}, function (err, result) {
            if (err) {
                res.redirect('/');
            } else {
                res.render('myinfo', {
                    cur_user: cur_user,
                    info: result[0]
                });
            }
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
router.post('/exit', function (req, res) {
    log.exit(req, res);
});
router.post('/edit/user/info', function (req, res) {
    edit.user.info(req, res);
});

module.exports = router;