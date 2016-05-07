/**
 * Created by sunmy on 16/5/6.
 */

var User = require('../models').User;

var changeInfo = function (req, res) {
    var update = {intro: req.body.intro};
    var record = {user_name: req.cookies.user};

    User.update(record, update, {}, function (err) {
        if (err) {
            res.end(JSON.stringify({
                message: '上传失败',
                status: 0
            }));
        } else {
            res.end(JSON.stringify({
                message: '上传成功',
                status: 1
            }));
        }
    });
};

module.exports = changeInfo;