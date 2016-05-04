/**
 * Created by sunmy on 16/4/28.
 */

var User = require('../models').User;

var login = function (req, res) {
    var user = {
        user_name: req.body.user_name,
        password: req.body.password
    };

    User.count(user, function (err, doc) {
        if (doc) {
            res.cookie('user', user.user_name);
            res.end(JSON.stringify({
                message: '登录成功',
                status: 1
            }));
        } else {
            res.cookie('user', '');
            res.end(JSON.stringify({
                message: '登录失败',
                status: 0
            }));
        }
    });
};

module.exports = login;


