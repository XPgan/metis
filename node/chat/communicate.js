/**
 * Created by sunmy on 16/7/25.
 */

var User = require('./models').User;

var communicate = {
    do: function (io) {
        io.on('connection', function (socket) {
            socket.on('online', function (data) {
                io.sockets.emit('online', {user_name: data.cur_user});
            });
            socket.on('message', function (data) {
                User.find({id: data.cur_user}, {}, {}, function (err, result) {
                    io.sockets.emit('message', {
                        user: result[0],
                        message: data.message
                    });

                    // error 处理
                });
            });
        });
    }
};

module.exports = communicate;