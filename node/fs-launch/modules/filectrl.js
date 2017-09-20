var fs = require('fs');

module.exports = {
    getChannelList: function (res) {
        fs.readdir('launchs/', function (err, files) {
            if (err) {
                res.end(JSON.stringify({
                    error: 1,
                    message: '读取渠道目录失败',
                    total: 0,
                    data: []
                }));
            } else {
                res.end(JSON.stringify({
                    error: 0,
                    message: '读取渠道目录成功',
                    total: files.length,
                    data: files
                }));
            }
        });
    }
}