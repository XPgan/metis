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
                var jsonStr = pattern.exec(
                    decodeURIComponent(kvp[1])
                )[0];
                return JSON.parse(jsonStr);
            }
        }
    }
};
var communicate = {

    activers: {},

    do: function (io) {
        var _this = this;
        io.on('connection', function (socket) {
            _this.handleEvents(socket, io);
            _this.checkActivers(socket, io);
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
                    id: data.user.id,
                    nickname: data.user.nickname
                },
                message: data.message
            });
        });
    },
    checkActivers: function (socket, io) {
        var _this = this;
        var cur_user = method.getCookie(socket, 'user');

        (cur_user) && (_this.activers[cur_user.id] = true);

        socket.on('disconnect', function () {
            if (cur_user) {
                _this.activers[cur_user.id] = false;

                var t = setTimeout(function () {
                    var status = _this.activers[cur_user.id];
                    if (!status) {
                        io.sockets.emit('offline', {
                            id: cur_user.id,
                            nickname: cur_user.nickname
                        });

                        delete _this.activers[cur_user.id];
                    }
                }, 1000);
            }
        });
    }
};

module.exports = communicate;