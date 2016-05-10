/**
 * Created by sunmy on 16/5/9.
 */

var fs = require('fs');
var find = require('./find-record');
var User = require('../models').User;

var log = {

    user: null,

    login: function (req, res) {
        var _this = this;
        var user = req.body;
        User.count(user, function (err, doc) {
            if (doc) {
                res.end(JSON.stringify({
                    message: '登录成功',
                    status: 1
                }));
                _this.user = user.user_name;
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

        find.do(_this.user);
        find.portrait(function (portrait) {
            if (portrait) {
                fs.unlink('../public' + portrait);
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
        req.body.portrait = '';

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