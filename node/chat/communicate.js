/**
 * Created by sunmy on 16/7/25.
 */

var method = {
    getCookie: function (socket, key) {
        var cookie = socket.handshake.headers.cookie;
        var lst = cookie.split(';');
        for (var i = 0;i < lst.length;i++) {
            var kvp = lst[i].split('=');
            if (key == kvp[0].trim() && kvp[1]) {
                var pattern = /\{.*\}/;
                var jsonStr = pattern.exec(decodeURIComponent(kvp[1]))[0];
                return JSON.parse(jsonStr);
            }
        }
    }
};
var communicate = {

    interval: null,
    activers: {},

    do: function (io) {
        var _this = this;
        io.on('connection', function (socket) {
            _this.handleEvents(socket, io);
            _this.setActivers(socket, true);
            _this.checkActivers(io);

            socket.on('disconnect', function () {
                _this.setActivers(socket, false);
            });
        });
    },
    handleEvents: function (socket, io) {
        var _this = this;
        socket.on('online', function (data) {
            io.sockets.emit('online', {
                id: data.id,
                nickname: data.nickname
            });
            _this.setActivers(socket, true);
        });
        socket.on('offline', function (data) {
            io.sockets.emit('offline', {
                id: data.id,
                nickname: data.nickname
            });
            delete _this.activers[data.id];
        });
        socket.on('message', function (data) {
            io.sockets.emit('message', {
                user: {
                    id: data.user.id,
                    nickname: data.user.nickname
                },
                message: data.message
            });
        });
    },
    checkActivers: function (io) {
        var _this = this;
        _this.interval && clearInterval(_this.interval);
        _this.interval = setInterval(function () {
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
        }, 5000);
    },
    setActivers: function (socket, status) {
        var _this = this;
        var cur_user = method.getCookie(socket, 'user');
        if (cur_user) {
            _this.activers[cur_user.id] = {
                status: status,
                nickname: cur_user.nickname
            }
        }
    }
};

module.exports = communicate;