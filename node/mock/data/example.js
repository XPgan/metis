var type = require('../type');

module.exports = {
    example1: {
        url: '/example1/_data',
        type: 'GET',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: {
                    id: type.id(),
                    number: type.number(),
                    image: type.image(),
                    list: type.list({
                        length: 3,
                        value: {
                            a: type.number()
                        }
                    })
                }
            }
        }
    },
    example2: {
        url: '/example2/:id/:id/_data',
        type: 'GET',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: {
                    id: type.id(),
                    number: type.number(),
                    bool: type.bool(),
                    list: type.list({
                        length: 2
                    })
                }
            }
        }
    }
}