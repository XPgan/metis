var express = require('express');
var User = require('./models').User;
var Article = require('./models').Article;
var log = require('./modules/log');
var upload = require('./modules/upload');
var edit = require('./modules/edit');
var publish = require('./modules/publish');
var router = express.Router();

router.get('/profile/:id', function (req, res) {
    var id = req.params.id;
    User.find({id: id}, {}, {}, function (err, result) {
        if (err) {
            res.end(JSON.stringify({
                message: '网络错误',
                status: 0
            }));
        } else {
            var userInfo = result[0];
            Article.find({id: {$in: result[0].articles}}, {}, {}, function (err, result) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '网络错误',
                        status: 0
                    }));
                } else {
                    var articles = result;
                    res.end(JSON.stringify({
                        message: '请求成功',
                        status: 1,
                        data: {
                            userInfo: userInfo,
                            articles: articles
                        }
                    }));
                }
            });
        }
    });
});
router.get('/article/:id', function (req, res) {
    var id = req.params.id;
    Article.find({id: id}, {}, {}, function (err, result) {
        if (err) {
            res.end(JSON.stringify({
                message: '网络错误',
                status: 0
            }));
        } else {
            var articleInfo = result[0];
            User.find({id: result[0].author}, {}, {}, function (err, result) {
                if (err) {
                    res.end(JSON.stringify({
                        message: '网络错误',
                        status: 0
                    }));
                } else {
                    var userInfo = result[0];
                    res.end(JSON.stringify({
                        message: '请求成功',
                        status: 1,
                        data: {
                            userInfo: userInfo,
                            articleInfo: articleInfo
                        }
                    }));
                }
            });
        }
    });
});

router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});
router.post('/upload/portrait', function (req, res) {
    upload.portrait(req, res);
});
router.post('/upload/cover', function (req, res) {
    upload.cover(req, res);
});
router.post('/edit/user/:id', function (req, res) {
    edit.user(req, res);
});
router.post('/edit/article/:id', function (req, res) {
    edit.article(req, res);
});
router.post('/publish', function (req, res) {
    publish(req, res);
});

module.exports = router;