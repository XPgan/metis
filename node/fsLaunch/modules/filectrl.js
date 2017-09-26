var fs = require('fs');
var cheerio = require('cheerio');

module.exports = {
    getChannelList: function (req, res) {
        var start_num = req.query.start_num >> 0 || 0;
        var count = req.query.count >> 0 || 10;
        fs.readdir('launchs/', function (err, files) {
            if (err) {
                res.end(JSON.stringify({
                    error: 1,
                    message: '读取渠道目录失败',
                    total: 0,
                    data: []
                }));
            } else {
                var responseData = files.slice(start_num, start_num + count);
                res.end(JSON.stringify({
                    error: 0,
                    message: '读取渠道目录成功',
                    total: files.length,
                    data: responseData
                }));
            }
        });
    },
    getChannelInfo: function (req, res) {
        var channelId = req.params.id;
        fs.readFile('launchs/' + channelId + '/index.html', 'utf8', function (err, data) {
            if (err) {
                res.end(JSON.stringify({
                    error: 1,
                    message: '读取渠道信息失败',
                    data: {}
                }));
            } else {
                var $ = cheerio.load(data);
                var $king = $('#king');
                var responseData = {
                    id: channelId,
                    title: $king.attr('title'),
                    illustration: $king.attr('illustration'),
                    url: '/' + channelId + '/'
                };
                res.end(JSON.stringify({
                    error: 0,
                    message: '读取渠道信息成功',
                    data: responseData
                }));
            }
        });
    },
    addChannel: function (req, res) {
        var channelInfo = req.body;
        var filePath = 'launchs/' + channelInfo.id + '/';
        fs.mkdir(filePath, function (err) {
            if (err) {
                fs.exists(filePath, function (exists) {
                    if (exists) {
                        res.end(JSON.stringify({
                            error: 2,
                            message: '渠道命名重复',
                            data: {}
                        }));
                    } else {
                        res.end(JSON.stringify({
                            error: 1,
                            message: '提交失败',
                            data: {}
                        }));
                    }
                });
            } else {
                fs.readFile('template.html', 'utf8', function (err, data) {
                    if (err) {
                        res.end(JSON.stringify({
                            error: 1,
                            message: '提交失败',
                            data: {}
                        }));
                    } else {
                        var $ = cheerio.load(data);
                        var $king = $('#king');
                        $king.attr({
                            'title': channelInfo.title,
                            'illustration': channelInfo.illustration
                        });
                        fs.writeFile(filePath + 'index.html', $.html(), function (err) {
                            if (err) {
                                res.end(JSON.stringify({
                                    error: 1,
                                    message: '提交失败',
                                    data: {}
                                }));
                            } else {
                                res.end(JSON.stringify({
                                    error: 0,
                                    message: '提交成功',
                                    data: {}
                                }));
                            }
                        });
                    }
                });
            }
        });
    },
    editChannel: function (req, res) {
        var _this = this;
        var channelInfo = req.body;
        var filePath = 'launchs/' + channelInfo.id + '/';
        fs.unlink(filePath + 'index.html', function (err) {
            if (err) {
                res.end(JSON.stringify({
                    error: 1,
                    message: '提交失败',
                    data: {}
                }));
            } else {
                fs.rmdir(filePath, function (err) {
                    if (err) {
                        res.end(JSON.stringify({
                            error: 1,
                            message: '提交失败',
                            data: {}
                        }));
                    } else {
                        _this.addChannel(req, res);
                    }
                });
            }
        });
    }
}