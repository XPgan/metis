var express = require('express');
var router = express.Router();
var filectrl = require('./modules/filectrl');

router.get('/channel/list', function (req, res) {
    filectrl.getChannelList(req, res);
});

module.exports = router;
