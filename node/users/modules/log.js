/**
 * Created by sunmy on 16/5/9.
 */

var fs = require('fs');
var find = require('./find-record');
var User = require('../models').User;

var log = {
    login: function (req, res) {
        var user = req.body;
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
    },
    logout: function (req, res) {
        find.do(req);
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
                    res.cookie('user', '');
                    res.end(JSON.stringify({
                        message: '注销成功',
                        status: 1
                    }));
                }
            });
        }, 0);
    },
    register: function (req, res) {
        req.body.portrait = '';

        var user = new User(req.body);
        user.save(function (err) {
            if (err) {
                res.end(JSON.stringify({
                    message: '注册失败',
                    status: 0
                }));
            } else {
                res.cookie('user', '');
                res.end(JSON.stringify({
                    message: '注册成功',
                    status: 1
                }));
            }
        });
    },
    exit: function (req, res) {
        res.cookie('user', '');
        res.end(JSON.stringify({
            message: '退出登录成功',
            status: 1
        }));
    }
};

module.exports = log;