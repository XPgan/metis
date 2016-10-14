var Article = require('../models').Article;

var publish = function (req, res) {
    var id = (new Date()).valueOf().toString();
    req.body.id = id;

    var article = new Article(req.body);
    article.save(function (err) {
        if (err) {
            res.end(JSON.stringify({
                message: '网络错误',
                status: 0
            }));
        } else {
            res.end(JSON.stringify({
                message: '发布成功',
                status: 1,
                id: id
            }));
        }
    });
}

module.exports = publish;