var fs = require('fs');
var User = require('../models').User;
var Article = require('../models').Article;

var edit = {
    method: function (req, res, opts) {
        var id = req.params.id;
        var update = function () {
            opts.model.update({id: id}, req.body, {}, function (err) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '网络错误',
                        status: 0
                    }));
                } else {
                    res.end(JSON.stringify({
                        message: '修改成功',
                        status: 1
                    }));
                }
            });
        };
        opts.model.find({id: id}, {}, {}, function (err, result) {
            if (err) {
                res.end(JSON.stringify({
                    message: '网络错误',
                    status: 0
                }));
            } else {
                var key = opts.uploadKey;
                if (req.body[key]) {
                    var newPic = req.body[key];
                    var oldPic = result[0][key];
                    if (oldPic != newPic) {
                        fs.unlink('../upload' + result[0][key]);
                    }
                }
                update();
            }
        });
    },
    user: function (req, res) {
        var opts = {
            model: User,
            uploadKey: 'portrait'
        };
        this.method(req, res, opts);
    },
    article: function (req, res) {
        var opts = {
            model: Article,
            uploadKey: 'cover'
        };
        this.method(req, res, opts);
    }
};

module.exports = edit;