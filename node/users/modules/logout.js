/**
 * Created by sunmy on 16/4/29.
 */

var fs = require('fs');
var find = require('./find-record');
var User = require('../models').User;

var logout = function (req, res) {

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
};

module.exports = logout;