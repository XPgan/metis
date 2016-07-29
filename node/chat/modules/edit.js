/**
 * Created by sunmy on 16/7/26.
 */

var User = require('../models').User;

var edit = {
    user: {
        info: function (req, res) {
            User.update({id: req.cookies.user}, req.body, {}, function (err) {
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
};

module.exports = edit;