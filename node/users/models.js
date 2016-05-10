/**
 * Created by sunmy on 16/4/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/users');

var userSchema = new Schema({
    user_name: String,
    password: String,
    portrait: String,
    sex: String,
    tel: String,
    qq: String,
    intro: String,
    id: String
});

exports.User = db.model('infos', userSchema);
