/**
 * Created by sunmy on 16/5/9.
 */

var fs = require('fs');
var find = require('./find');
var User = require('../models').User;

/** log
 * 描述: [登录] [注销] [注册] [退出登录]
 * 模块: [log.login] [log.logout] [log.register] [log.exit]
 */
var log = {

    user: null,

    login: function (req, res) {
        var _this = this;
        var user = req.body;

        User.count(user, function (err, doc) {
            if (doc) {
                var record = {user_name: user.user_name};
                var returns = {id: 1};

                User.find(record, returns, {}, function (err, result) {
                    res.end(JSON.stringify({
                        message: '登录成功',
                        status: 1
                    }));
                    _this.user = result[0].id;
                });
            } else {
                res.end(JSON.stringify({
                    message: '登录失败',
                    status: 0
                }));
                _this.user = '';
            }
        });
    },
    logout: function (req, res) {
        var _this = this;

        find.do('user', _this.user);
        find.info(function (info) {
            if (info.portrait) {
                fs.unlink('../upload' + info.portrait);
            }
        });

        var t = setTimeout(function () {
            User.remove(find.record, function (err) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '注销失败',
                        status: 0
                    }));
                } else {
                    res.end(JSON.stringify({
                        message: '注销成功',
                        status: 1
                    }));
                    _this.user = '';
                }
            });
        }, 0);
    },
    register: function (req, res) {
        req.body.id = (new Date()).valueOf();

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
                _this.user = '';
            }
        });
    },
    exit: function (req, res) {
        var _this = this;
        res.end(JSON.stringify({
            message: '退出登录成功',
            status: 1
        }));
        _this.user = '';
    }
};

module.exports = log;