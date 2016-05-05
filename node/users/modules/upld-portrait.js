/**
 * Created by sunmy on 16/4/28.
 */

var fs = require('fs');
var formidable = require('formidable');
var User = require('../models').User;

var upldPortrait = function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        if (err) {
            res.end(JSON.stringify({
                message: '上传失败',
                status: 0
            }));
        } else {
            var user = req.cookies.user;
            var record = {user_name: user};
            var url = '/upload/portrait/' + files.portrait.name;

            // 上传新头像
            var tmp_path = files.portrait.path;
            var target_path = '../public' + url;
            fs.renameSync(tmp_path, target_path);

            // 删除旧头像
            var returns = {portrait: 1};
            User.find(record, returns, {}, function (err, result) {
                var portrait = result[0].portrait;
                if (portrait) {
                    fs.unlink('../public' + result[0].portrait);
                }
            });

            // 更新记录
            var update = {portrait: url};
            User.update(record, update, {}, function (err) {
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
};

module.exports = upldPortrait;