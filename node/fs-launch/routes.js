var express = require('express');
var router = express.Router();
var filectrl = require('./modules/filectrl');

router.get('/list/channel', function (req, res) {
    filectrl.getChannelList(req, res);
});
router.get('/detail/channel/:id', function (req, res) {
    filectrl.getChannelInfo(req, res);
});
router.post('/add/channel', function (req, res) {
    filectrl.addChannel(req, res);
});

module.exports = router;
