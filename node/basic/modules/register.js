/**
 * Created by sunmy on 16/4/29.
 */

var mongoose = require('mongoose');
var User = require('../models').User;

var register = function (req, res) {
    var user = new User({
        user_name: req.body.user_name,
        password: req.body.password
    });

    user.save(function (err) {
        if (err) {
            res.render('../message', {message: '注册失败'});
        } else {
            res.render('login');
        }
    });
};

module.exports = register;