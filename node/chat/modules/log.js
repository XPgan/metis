/**
 * Created by sunmy on 16/7/25.
 */

var fs = require('fs');
var User = require('../models').User;

var log = {

    user: 0,

    login: function (req, res) {
        var _this = this;
        var user = req.body;

        User.count(user, function (err, doc) {
            if (doc && !err) {
                var record = {user_name: user.user_name};
                User.find(record, {id: 1}, {}, function (err, result) {
                    if (err) {
                        res.end(JSON.stringify({
                            message: '登录失败',
                            status: 0
                        }));
                        _this.user = 0;
                    } else {
                        res.end(JSON.stringify({
                            message: '登录成功',
                            status: 1
                        }));
                        _this.user = result[0].id;
                    }
                });
            } else {
                res.end(JSON.stringify({
                    message: '登录失败',
                    status: 0
                }));
                _this.user = 0;
            }
        });
    },
    register: function (req, res) {
        req.body.id = (new Date()).valueOf().toString();

        var _this = this;
        var user = new User(req.body);
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
                _this.user = 0;
            }
        });
    }
};

module.exports = log;