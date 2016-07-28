/**
 * Created by sunmy on 16/7/25.
 */

var User = require('./models').User;

var communicate = {
    do: function (io) {
        io.on('connection', function (socket) {
            socket.on('online', function (data) {
                io.sockets.emit('online', {user_name: data.user_name});
            });
            socket.on('message', function (data) {
                User.find({id: data.user_id}, {}, {}, function (err, result) {
                    if (err) {
                        socket.emit('failed');
                    } else {
                        //io.sockets.emit('message', {
                        //    user: result[0],
                        //    message: data.message
                        //});

                        socket.emit('failed');
                    }
                });
            });
        });
    }
};

module.exports = communicate;