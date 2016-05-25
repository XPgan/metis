/**
 * Created by sunmy on 16/5/9.
 */

var fs = require('fs');
var formidable = require('formidable');
var find = require('./find');
var User = require('../models').User;

/** edit
 * 描述: [编辑用户信息] [编辑日记]
 * 模块: [edit.user] [edit.diary]
 */
var edit = {};

/** edit.user
 * 描述: [编辑基本信息] [编辑头像]
 * 模块: [edit.user.info] [edit.user.portrait]
 */
edit.user = {
    info: function (req, res, log_user) {
        find.do('user', log_user);
        User.update(find.record, req.body, {}, function (err) {
            if (err) {
                res.end(JSON.stringify({
                    message: '提交失败',
                    status: 0
                }));
            } else {
                res.end(JSON.stringify({
                    message: '提交成功',
                    status: 1
                }));
            }
        });
    },
    portrait: function (req, res, log_user) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) {
                res.end(JSON.stringify({
                    message: '上传失败',
                    status: 0
                }));
            } else {

                find.do('user', log_user);

                // 上传新头像
                var timestamp = (new Date()).valueOf();
                var url = '/upload/portrait/' + timestamp + '_' + files.portrait.name;
                var tmp_path = files.portrait.path;
                var target_path = '../public' + url;

                fs.renameSync(tmp_path, target_path);

                // 删除旧头像
                find.info(function (info) {
                    if (info.portrait) {
                        fs.unlink('../public' + info.portrait);
                    }
                });

                // 更新记录
                User.update(find.record, {portrait: url}, {}, function (err) {
                    if (err) {
                        res.end(JSON.stringify({
                            message: '上传失败',
                            status: 0
                        }));
                    } else {
                        res.end(JSON.stringify({
                            message: '上传成功',
                            status: 1,
                            url: url
                        }));
                    }
                });
            }
        });
    }
};

/** edit.diary
 * 模块: [edit.diary.do]
 */
edit.diary = {
    do: function () {

    }
};

module.exports = edit;