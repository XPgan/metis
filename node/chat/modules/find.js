/**
 * Created by sunmy on 16/7/26.
 */

var User = require('../models').User;

var find = {

    record: null,

    do: function (id) {
        var _this = this;
        _this.record = {id: id};
    },
    info: function (res, callback) {
        var _this = this;
        User.find(_this.record, {}, {}, function (err, result) {
            if (err) {
                res.end(JSON.stringify({
                    message: '数据查询失败',
                    status: 0
                }));
            } else {
                callback(JSON.parse(JSON.stringify(result[0])));
            }
        });
    },
    all: function (res, callback) {
        User.find({}, {}, {}, function (err, result) {
            if (err) {
                res.end(JSON.stringify({
                    message: '数据查询失败',
                    status: 0
                }));
            } else {
                callback(result);
            }
        });
    }
};

module.exports = find;