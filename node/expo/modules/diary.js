/**
 * Created by sunmy on 16/6/8.
 */

var find = require('./find');
var User = require('../models').User;
var Diary = require('../models').Diary;

/** diary
 * 描述: [发布日记] [编辑日记] [移除日记] [点赞日记]
 * 模块: [diary.publish] [diary.edit] [diary.remove] [diary.favour]
 */
var diary = {
    publish: function (req, res, log_user) {
        var diary_id = (new Date()).valueOf();

        find.do('user', log_user);
        find.info(function (info) {
            info.diaries.push(diary_id);

            User.update(find.record, {diaries: info.diaries}, {}, function (err) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '发布失败',
                        status: 0
                    }));
                } else {
                    req.body.id = diary_id;
                    req.body.author = log_user;

                    var diary = new Diary(req.body);
                    diary.save(function (err) {
                        if (err) {
                            res.end(JSON.stringify({
                                message: '发布失败',
                                status: 0
                            }));
                        } else {
                            res.end(JSON.stringify({
                                message: '发布成功',
                                status: 1
                            }));
                        }
                    });
                }
            });
        });
    },
    edit: function () {

    },
    remove: function () {

    },
    favour: function (req, res, log_user, id) {
        if (log_user) {
            // 用户: 记录点赞日记
            var rcFavours = function (callback) {
                find.do('user', log_user);
                find.info(function (info) {
                    info.favours.push(id >> 0);
                    User.update(find.record, {favours: info.favours}, {}, function (err) {
                        callback();
                    });
                });
            };
            // 日记: 记录点赞用户
            var rcVoters = function () {
                find.do('diary', id);
                find.info(function (info) {
                    info.voters.push(log_user);
                    Diary.update(find.record, {voters: info.voters}, {}, function (err) {});
                });
            };

            rcFavours(rcVoters);

            res.end(JSON.stringify({
                message: '点赞成功',
                status: 1
            }));
        } else {
            res.end(JSON.stringify({
                message: '请登录',
                status: 1001
            }));
        }
    }
};

module.exports = diary;