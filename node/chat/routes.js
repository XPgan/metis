/**
 * Created by sunmy on 16/7/14.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});


module.exports = router;