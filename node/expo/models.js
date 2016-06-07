/**
 * Created by sunmy on 16/4/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/contact');

var userSchema = new Schema({
    id: String,
    user_name: String,
    password: String,
    sex: String,
    tel: String,
    qq: String,
    intro: String,
    portrait: String,
    diaries: []
});
var diarySchema = new Schema({
    id: String,
    title: String,
    content: String,
    vote_num: String
});

exports.User = db.model('users', userSchema);
exports.Diary = db.model('diaries', diarySchema);