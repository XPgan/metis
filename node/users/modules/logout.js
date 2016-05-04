/**
 * Created by sunmy on 16/4/29.
 */

var User = require('../models').User;

var logout = function (req, res) {
    var user = req.cookies.user;
    var record = {user_name: user};

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
};

module.exports = logout;