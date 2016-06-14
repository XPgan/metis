/**
 * Created by sunmy on 16/4/28.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost/expo');

var userSchema = new Schema({
    id: Number,
    user_name: String,
    password: String,
    sex: String,
    tel: String,
    qq: String,
    intro: String,
    portrait: String,
    diaries: [],
    followers: []
});
var diarySchema = new Schema({
    id: Number,
    author: Number,
    title: String,
    content: String,
    voters: []
});

exports.User = db.model('users', userSchema);
exports.Diary = db.model('diaries', diarySchema);