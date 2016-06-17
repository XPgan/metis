/**
 * Created by sunmy on 16/4/28.
 */

var express = require('express');
var find = require('./modules/find');
var log = require('./modules/log');
var user = require('./modules/user');
var diary = require('./modules/diary');
var router = express.Router();

// 主页
router.get('/', function (req, res) {
    find.do('user');
    find.all(res, function (users) {
        res.render('index', {
            log_user: log.user,
            users: users
        });
    });
});
// 个人页
router.get('/profile/:id', function (req, res) {
    var visited = req.params.id;
    var data = {
        log_user: log.user,
        is_author: (visited == log.user),
        userinfo: {},
        diaries: []
    };
    var getDiaryInfo = function (id, count) {
        find.do('diary', id);
        find.info(res, function (info) {
            info.is_faved = 0;
            info.voter_num = info.voters.length;

            if (log.user) {
                getFavStatus(info, count);
            } else {
                data.diaries.push(info);
                !count && res.render('profile', data);
            }
        });
    };
    var getFavStatus = function (diary, count) {
        find.do('user', log.user);
        find.info(res, function (info) {
            var favours = info.favours;
            for (var j = 0;j < favours.length;j++) {
                if (diary.id == favours[j]) {
                    diary.is_faved = 1;
                    break;
                }
            }
            data.diaries.push(diary);
            !count && res.render('profile', data);
        });
    };

    find.do('user', visited);
    find.info(res, function (info) {
        if (info) {
            data.userinfo = info;

            var diaries = info.diaries;
            var count = diaries.length;
            if (diaries.length) {
                for (var i = diaries.length;i > 0;i--) {
                    count--;
                    getDiaryInfo(diaries[i - 1], count);
                }
            } else {
                res.render('profile', data);
            }
        } else {
            res.render('../message', {
                log_user: log.user,
                code: 404,
                message: '这枚用户还未注册本站'
            });
        }
    });
});
// 注册页
router.get('/register', function (req, res) {
    res.render('register', {log_user: log.user});
});
// 发布页
router.get('/diary/publish', function (req, res) {
    if (log.user) {
        res.render('publish', {log_user: log.user});
    } else {
        res.redirect('/');
    }
});


router.post('/login', function (req, res) {
    log.login(req, res);
});
router.post('/logout', function (req, res) {
    log.logout(req, res);
});
router.post('/register', function (req, res) {
    log.register(req, res);
});
router.post('/exit', function (req, res) {
    log.exit(req, res);
});

router.post('/user/edit/info', function (req, res) {
    user.edit.info(req, res, log.user);
});
router.post('/user/edit/portrait', function (req, res) {
    user.edit.portrait(req, res, log.user);
});

router.post('/diary/publish', function (req, res) {
    diary.publish(req, res, log.user);
});
router.post('/diary/favour/:id', function (req, res) {
    diary.favour(req, res, log.user, req.params.id);
});

module.exports = router;