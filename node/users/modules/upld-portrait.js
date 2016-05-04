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
            // upload
            var url = '/upload/portrait/' + files.portrait.name;
            var tmp_path = files.portrait.path;
            var target_path = '../public' + url;

            fs.renameSync(tmp_path, target_path);

            // insert
            var record = {user_name: req.cookies.user};
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