/**
 * Created by sunmy on 16/5/4.
 */

var User = require('../models').User;

var find = {

    record: null,

    do: function (user_id) {
        var _this = this;
        _this.record = {id: user_id};
    },
    info: function (callback) {
        var _this = this;
        User.find(_this.record, {}, {}, function (err, result) {
            callback(result[0]);
        });
    },
    all: function (callback) {
        User.find({}, {}, {}, function (err, result) {
            callback(result);
        });
    }
};

module.exports = find;