var type = require('../type');

module.exports = {
    example1: {
        url: '/example1/_data',
        type: 'POST',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: {}
            }
        }
    }
}