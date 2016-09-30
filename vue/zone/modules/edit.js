var fs = require('fs');
var User = require('../models').User;

var edit = {
    user: function (req, res) {
        var id = req.params.id;

        console.log(req.body)
        // User.find({id: id}, {portrait: 1}, {}, function (err, result) {
        //     var newPortrait = req.body.portrait;
        //     var oldPortrait = result[0].portrait;
        //
        //     if (newPortrait && (oldPortrait != newPortrait)) {
        //         fs.unlink('../upload' + result[0].portrait);
        //     }
        // });
        //
        // User.update({id: id}, req.body, {}, function (err) {
        //     if (err) {
        //         res.end(JSON.stringify({
        //             message: '网络错误',
        //             status: 0
        //         }));
        //     } else {
        //         res.end(JSON.stringify({
        //             message: '修改成功',
        //             status: 1
        //         }));
        //     }
        // });
    }
};

module.exports = edit;