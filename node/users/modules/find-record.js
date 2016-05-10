/**
 * Created by sunmy on 16/5/4.
 */

var User = require('../models').User;
var find = {

    record: null,

    do: function (req) {
        var _this = this;
        _this.record = {user_name: req.cookies.user};
    },
    portrait: function (callback) {
        var _this = this;
        var returns = {portrait: 1};

        User.find(_this.record, returns, {}, function (err, result) {
            callback(result[0].portrait);
        });
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