/**
 * Created by sunmy on 16/4/29.
 */

var fs = require('fs');
var User = require('../models').User;

var logout = function (req, res) {
    var user = req.cookies.user;
    var record = {user_name: user};

    // 删除头像
    var returns = {portrait: 1};
    User.find(record, returns, {}, function (err, result) {
        var portrait = result[0].portrait;
        if (portrait) {
            fs.unlink('../public' + result[0].portrait);
        }
    });

    // 删除记录
    var t = setTimeout(function () {
        User.remove(record, function (err) {
            if (err) {
                res.end(JSON.stringify({
                    message: '注销失败',
                    status: 0
                }));
            } else {
                res.cookie('user', '');
                res.end(JSON.stringify({
                    message: '注销成功',
                    status: 1
                }));
            }
        });
    }, 0);
};

module.exports = logout;