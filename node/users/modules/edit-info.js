/**
 * Created by sunmy on 16/5/9.
 */

var fs = require('fs');
var formidable = require('formidable');
var find = require('./find-record');
var User = require('../models').User;

var edit = {
    do: function (req, res, log_user) {
        find.do(log_user);
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

                find.do(log_user);

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
                var update = {portrait: url};
                User.update(find.record, update, {}, function (err) {
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

module.exports = edit;