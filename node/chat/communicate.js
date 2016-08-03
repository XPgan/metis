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

    activers: {},

    do: function (io) {
        var _this = this;

        io.on('connection', function (socket) {
            var cookie = socket.handshake.headers.cookie;
            var cur_user = method.getCookie(cookie, 'user');

            (cur_user >> 0) && (_this.activers[cur_user] = true);
            socket.on('disconnect', function () {
                (cur_user >> 0) && (_this.activers[cur_user] = false);
            });

            _this.handleEvents(socket, io);
            _this.checkActivers(io);
        });
    },
    handleEvents: function (socket, io) {
        socket.on('online', function (data) {
            io.sockets.emit('online', {
                user_id: data.user_id,
                user_name: data.user_name
            });
        });
        socket.on('offline', function (data) {
            io.sockets.emit('offline', {
                user_id: data.user_id,
                user_name: data.user_name
            });
        });
        socket.on('message', function (data) {
            User.find({id: data.user_id}, {user_name: 1}, {}, function (err, result) {
                if (err) {
                    socket.emit('failed');
                } else {
                    io.sockets.emit('message', {
                        user_name: result[0].user_name,
                        message: data.message
                    });
                }
            });
        });
    },
    checkActivers: function (io) {
        var _this = this;
        var t = setInterval(function () {
            for (var key in _this.activers) {
                if (!_this.activers[key]) {
                    User.find({id: key}, {user_name: 1}, {}, function (err, result) {
                        io.sockets.emit('offline', {
                            user_id: key,
                            user_name: result[0].user_name
                        });

                        delete _this.activers[key];
                    });
                }
            }
        }, 4000);
    }
};

module.exports = communicate;