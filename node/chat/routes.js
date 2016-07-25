/**
 * Created by sunmy on 16/7/14.
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('login');
});
router.get('/chatroom', function (req, res) {
    res.render('chatroom');
});


module.exports = router;