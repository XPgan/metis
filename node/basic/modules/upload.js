/**
 * Created by sunmy on 16/4/28.
 */

var fs = require('fs');
var formidable = require('formidable');

var upload = function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        if (err) {
            res.render('message', {message: '上传失败'});
        } else {
            var tmp_path = files.upld_file.path;
            var target_path = '../public/upload/' + files.upld_file.name;

            fs.renameSync(tmp_path, target_path);

            res.render('message', {message: '上传成功'});
        }
    });
};

module.exports = upload;