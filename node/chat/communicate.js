/**
 * Created by sunmy on 16/7/25.
 */

var User = require('./models').User;

var method = {
    getCookie: function (cookie, key) {
        var lst = cookie.split(';');
        for (var i = 0;i < lst.length;i++) {
            var kvp = lst[i].split('=');
            if (key == kvp[0].trim()) {
                return kvp[1];
            }
        }
    }
};
var communicate = {
    do: function (io) {
        io.on('connection', function (socket) {
            socket.on('online', function (data) {
                io.sockets.emit('online', {user_name: data.user_name});
            });
            socket.on('offline', function (data) {
                io.sockets.emit('offline', {user_name: data.user_name});
            });
            socket.on('message', function (data) {
                User.find({id: data.user_id}, {}, {}, function (err, result) {
                    if (err) {
                        socket.emit('failed');
                    } else {
                        io.sockets.emit('message', {
                            user: result[0],
                            message: data.message
                        });
                    }
                });
            });
        });
    }
};

module.exports = communicate;