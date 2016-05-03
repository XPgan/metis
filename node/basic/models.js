/**
 * Created by sunmy on 16/4/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/user_info');

var userScheMa = new Schema({
    user_name: String,
    password: String
});

exports.User = db.model('users', userScheMa);