/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var upload = require('./modules/upload');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/upload', function (req, res) {
    res.render('index');
});

router.post('/upload', function (req, res) {
    upload(req, res);
});

module.exports = router;
