/**
 * Created by sunmy on 16/5/9.
 */

var fs = require('fs');
var find = require('./find');
var User = require('../models').User;
var Diary = require('../models').Diary;

/** log
 * 描述: [登录] [注销] [注册] [退出登录]
 * 模块: [log.login] [log.logout] [log.register] [log.exit]
 * 备注: log.user
 *      未登录状态: 0
 *      登录状态: 登录用户 id
 */
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
    logout: function (req, res) {
        var _this = this;

        find.do('user', _this.user);
        find.info(function (info) {
            if (info.portrait) {
                fs.unlink('../upload' + info.portrait, function (err) {
                    if (err) {
                        res.end(JSON.stringify({
                            message: '注销失败',
                            status: 0
                        }));
                    }
                });
            }

            /**
             * 操作: 删除记录
             * 数据表: users
             */
            User.remove(find.record, function (err) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '注销失败',
                        status: 0
                    }));
                }
            });

            /**
             * 操作: 删除记录
             * 数据表: diaries
             */
            Diary.remove({id: {$in: info.diaries}}, function (err) {
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
                    _this.user = 0;
                }
            });
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
    },
    exit: function (req, res) {
        var _this = this;
        res.end(JSON.stringify({
            message: '退出登录成功',
            status: 1
        }));
        _this.user = 0;
    }
};

module.exports = log;