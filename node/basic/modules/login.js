/**
 * Created by sunmy on 16/4/28.
 */

var mongoose = require('mongoose');
var users = require('../models').users;

mongoose.connect('mongodb://localhost/user_info');

var login = function (req, res) {
    var query_doc = {
        user_name: req.body.user_name,
        password: req.body.password
    };

    users.count(query_doc, function (err, doc) {
        if (doc) {
            res.cookie('is_login', 1);
            res.render('upload');
        } else {
            res.render('../message', {message: '登录失败'});
        }
    });
};

module.exports = login;


