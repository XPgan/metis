var express = require('express');
var log = require('./modules/log');
var upload = require('./modules/upload');
var router = express.Router();

router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});

router.post('/upload/portrait', function (req, res) {
    upload.portrait(req, res);
});

module.exports = router;