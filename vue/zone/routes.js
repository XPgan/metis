var express = require('express');
var log = require('./modules/log');
var router = express.Router();

router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});

module.exports = router;