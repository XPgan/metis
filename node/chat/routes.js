/**
 * Created by sunmy on 16/7/14.
 */

var express = require('express');
var log = require('./modules/log');
var router = express.Router();

router.get(/^\/(login)?$/, function (req, res) {
    res.render('index');
});
router.get('/chatroom', function (req, res) {
    res.render('chatroom');
});
router.get('/userinfo', function (req, res) {
    res.render('userinfo');
});


router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});


module.exports = router;