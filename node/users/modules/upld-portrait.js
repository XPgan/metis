/**
 * Created by sunmy on 16/4/28.
 */

var fs = require('fs');
var formidable = require('formidable');

var upldPortrait = function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        if (err) {
            res.end(JSON.stringify({
                message: '上传失败',
                status: 0
            }));
        } else {
            var tmp_path = files.portrait.path;
            var target_path = '../upload/portrait/' + files.portrait.name;

            fs.renameSync(tmp_path, target_path);
            res.end(JSON.stringify({
                message: '上传成功',
                status: 1
            }));
        }
    });
};

module.exports = upldPortrait;