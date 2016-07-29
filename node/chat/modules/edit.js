/**
 * Created by sunmy on 16/7/26.
 */

var User = require('../models').User;

var edit = {
    user: {
        info: function (req, res) {
            var cur_user = req.cookies.user;
            User.find({user_name: req.body.user_name}, {}, {}, function (err, result) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '提交失败',
                        status: 0
                    }));
                } else {
                    var judge = result.length && (result[0].id != cur_user);
                    if (judge) {
                        res.end(JSON.stringify({
                            message: '该昵称已被使用',
                            status: 0
                        }));
                    } else {
                        User.update({id: cur_user}, req.body, {}, function (err) {
                            if (err) {
                                res.end(JSON.stringify({
                                    message: '提交失败',
                                    status: 0
                                }));
                            } else {
                                res.end(JSON.stringify({
                                    message: '提交成功',
                                    status: 1
                                }));
                            }
                        });
                    }
                }
            });
        }
    }
};

module.exports = edit;