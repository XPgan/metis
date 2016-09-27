var User = require('../models').User;

var log = {
    login: function (req, res) {
        var user = req.body;

        User.count(user, function (err, doc) {
            if (doc && !err) {
                var record = {nickname: user.nickname};
                User.find(record, {id: 1}, {}, function (err, result) {
                    if (err) {
                        res.cookie('user', '');
                        res.end(JSON.stringify({
                            message: '网络错误导致登录失败',
                            status: 0
                        }));
                    } else {
                        res.cookie('user', result[0].id);
                        res.end(JSON.stringify({
                            message: '登录成功',
                            status: 1
                        }));
                    }
                });
            } else {
                res.cookie('user', '');
                res.end(JSON.stringify({
                    message: '用户名或密码有误',
                    status: 0
                }));
            }
        });
    }
}

module.exports = log;