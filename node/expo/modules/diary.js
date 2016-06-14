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
    favour: function () {

    }
};

module.exports = diary;