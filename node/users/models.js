/**
 * Created by sunmy on 16/4/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/users');

var userSchema = new Schema({
    user_name: String,
    password: String
});

exports.User = db.model('infos', userSchema);
