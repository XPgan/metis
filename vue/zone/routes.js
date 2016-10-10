var express = require('express');
var User = require('./models').User;
var log = require('./modules/log');
var upload = require('./modules/upload');
var edit = require('./modules/edit');
var router = express.Router();

router.get('/profile/:id', function (req, res) {
    var id = req.params.id;
    User.find({id: id}, {}, {}, function (err, result) {
        if (err) {
            res.end(JSON.stringify({
                message: '网络错误',
                status: 0
            }));
        } else {
            res.end(JSON.stringify({
                message: '请求成功',
                status: 1,
                data: result[0]
            }));
        }
    });
});

router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});
router.post('/upload/portrait', function (req, res) {
    upload.portrait(req, res);
});
router.post('/edit/user/:id', function (req, res) {
    edit.user(req, res);
});

module.exports = router;