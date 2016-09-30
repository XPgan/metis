var fs = require('fs');
var User = require('../models').User;

var edit = {
    user: function (req, res) {
        var id = req.params.id;
        if (req.body.portrait) {
            User.find({id: id}, {portrait: 1}, {}, function (err, result) {
                var newPortrait = req.body.portrait;
                var oldPortrait = result[0].portrait;

                if (newPortrait && (oldPortrait != newPortrait)) {
                    fs.unlink('../upload' + result[0].portrait);
                }
            });
        }
        if (req.body.password == req.body.oldPassword) {
            User.update({id: id}, req.body, {}, function (err) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '网络错误',
                        status: 0
                    }));
                } else {
                    res.end(JSON.stringify({
                        message: '修改成功',
                        status: 1
                    }));
                }
            });
        } else {
            res.end(JSON.stringify({
                message: '原密码有误',
                status: 0
            }));
        }
    }
};

module.exports = edit;