/**
 * Created by sunmy on 16/7/25.
 */

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

            if (cur_user) {
                _this.activers[cur_user.id] = {
                    status: true,
                    nickname: cur_user.nickname
                };
            }

            socket.on('disconnect', function () {
                if (cur_user) {
                    _this.activers[cur_user.id].status = false;
                }
            });

            _this.handleEvents(socket, io);
            _this.checkActivers(io);
        });
    },
    handleEvents: function (socket, io) {
        socket.on('online', function (data) {
            io.sockets.emit('online', {
                id: data.id,
                nickname: data.nickname
            });
        });
        socket.on('offline', function (data) {
            io.sockets.emit('offline', {
                id: data.id,
                nickname: data.nickname
            });
        });
        socket.on('message', function (data) {
            io.sockets.emit('message', {
                user: {
                    id: data.id,
                    nickname: data.nickname
                },
                message: data.message
            });
        });
    },
    checkActivers: function (io) {
        var _this = this;
        var t = setInterval(function () {
            for (var key in _this.activers) {
                var _loop = _this.activers[key];

                if (!_loop.status) {
                    io.sockets.emit('offline', {
                        id: key,
                        nickname: _loop.nickname
                    });

                    delete _this.activers[key];
                }
            }
        }, 4000);
    }
};

module.exports = communicate;