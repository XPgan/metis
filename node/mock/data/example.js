var type = require('../type');

module.exports = {
    example1: {
        url: '/example1/_data',
        type: 'GET',
        list_name: 'promotions',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                promotions: type.list({
                    length: 22,
                    data: function () {
                        return {
                            number: type.number()
                        }
                    }
                })
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