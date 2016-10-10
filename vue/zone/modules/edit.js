var fs = require('fs');
var User = require('../models').User;

var edit = {
    user: function (req, res) {
        var id = req.params.id;
        var update = function () {
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
        };
        User.find({id: id}, {portrait: 1, password: 1}, {}, function (err, result) {
            if (err) {
                res.end(JSON.stringify({
                    message: '网络错误',
                    status: 0
                }));
            } else {
                if (req.body.portrait) {
                    var newPortrait = req.body.portrait;
                    var oldPortrait = result[0].portrait;
                    if (oldPortrait != newPortrait) {
                        fs.unlink('../upload' + result[0].portrait);
                    }
                }
                if (req.body.oldPassword) {
                    if (result[0].password != req.body.oldPassword) {
                        res.end(JSON.stringify({
                            message: '原密码有误',
                            status: 0
                        }));
                        return;
                    }
                }

                update();
            }
        });
    }
};

module.exports = edit;