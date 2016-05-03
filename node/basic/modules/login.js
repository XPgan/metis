/**
 * Created by sunmy on 16/4/28.
 */

var mongoose = require('mongoose');
var User = require('../models').User;

var login = function (req, res) {
    var user = {
        user_name: req.body.user_name,
        password: req.body.password
    };

    User.count(user, function (err, doc) {
        if (doc) {
            res.cookie('user', user.user_name);
            res.render('upload', {username: user.user_name});
        } else {
            res.cookie('user', '');
            res.render('../message', {message: '登录失败'});
        }
    });
};

module.exports = login;


