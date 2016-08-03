/**
 * Created by sunmy on 16/7/25.
 */

var User = require('../models').User;

var log = {

    login: function (req, res) {
        var user = req.body;

        User.count(user, function (err, doc) {
            if (doc && !err) {
                var record = {user_name: user.user_name};
                User.find(record, {id: 1}, {}, function (err, result) {
                    if (err) {
                        res.cookie('user', '0');
                        res.end(JSON.stringify({
                            message: '登录失败',
                            status: 0
                        }));
                    } else {
                        res.cookie('user', result[0].id);
                        res.end(JSON.stringify({
                            message: '登录成功',
                            status: 1,
                            user_id: result[0].id
                        }));
                    }
                });
            } else {
                res.cookie('user', '0');
                res.end(JSON.stringify({
                    message: '登录失败',
                    status: 0
                }));
            }
        });
    },
    register: function (req, res) {
        User.find({user_name: req.body.user_name}, {}, {}, function (err, result) {
            if (err) {
                res.end(JSON.stringify({
                    message: '注册失败',
                    status: 0
                }));
            } else {
                if (result.length) {
                    res.end(JSON.stringify({
                        message: '该昵称已被使用',
                        status: 0
                    }));
                } else {
                    var id = (new Date()).valueOf().toString();
                    req.body.id = id;

                    var user = new User(req.body);
                    user.save(function (err) {
                        if (err) {
                            res.end(JSON.stringify({
                                message: '注册失败',
                                status: 0
                            }));
                        } else {
                            res.cookie('user', id);
                            res.end(JSON.stringify({
                                message: '注册成功',
                                status: 1
                            }));
                        }
                    });
                }
            }
        });
    },
    exit: function (req, res) {
        User.find({id: req.body.user_id}, {user_name: 1}, {}, function (err, result) {
            if (err) {
                res.end(JSON.stringify({
                    message: '退出登录失败',
                    status: 0
                }));
            } else {
                res.cookie('user', '0');
                res.end(JSON.stringify({
                    message: '退出登录成功',
                    status: 1,
                    user_name: result[0].user_name
                }));
            }
        });
    }
};

module.exports = log;