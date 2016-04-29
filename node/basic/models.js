/**
 * Created by sunmy on 16/4/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userScheMa = new Schema({
    user_name: String,
    password: String
});

exports.users = mongoose.model('users', userScheMa);