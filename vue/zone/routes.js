var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.end(JSON.stringify({
        message: 'message',
        status: 1
    }));
});

module.exports = router;