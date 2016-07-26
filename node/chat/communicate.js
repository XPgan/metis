/**
 * Created by sunmy on 16/7/25.
 */

var log = require('./modules/log');
var User = require('./models').User;

var communicate = {
    do: function (io) {
        io.on('connection', function (socket) {
            socket.on('online', function () {
                User.find({id: log.user}, {}, {}, function (err, result) {
                    io.sockets.emit('online', result[0].user_name);
                });
            });
        });
    }
};


module.exports = communicate;