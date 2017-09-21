var express = require('express');
var router = express.Router();
var filectrl = require('./modules/filectrl');

router.get('/list/channel', function (req, res) {
    filectrl.getChannelList(req, res);
});
router.get('/detail/channel/:id', function (req, res) {
    filectrl.getChannelInfo(req, res);
});
router.get('/list/image', function (req, res) {

});
router.post('/add/channel', function (req, res) {
    filectrl.addChannel(req, res);
});
router.post('/add/image', function (req, res) {
    filectrl.addImage(req, res);
});
router.post('/edit/channel', function (req, res) {
    filectrl.editChannel(req, res);
});

module.exports = router;
