/**
 * Created by sunmy on 16/4/29.
 */

var User = require('../models').User;

var register = function (req, res) {
    var user = new User({
        user_name: req.body.user_name,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) {
            res.end(JSON.stringify({
                message: '注册失败',
                status: 0
            }));
        } else {
            res.end(JSON.stringify({
                message: '注册成功',
                status: 1
            }));
        }
    });
};

module.exports = register;