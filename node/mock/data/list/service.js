/**
 * Created by sunmy on 2017/8/26.
 */

var type = require('../../type');

module.exports = {
    common: {
        url: '/service_list/common/_data',
        type: 'GET',
        data: {
            message: '',
            error: 0,
            data: [
                {
                    id: 1,
                    name: type.string({
                        min: 5,
                        max: 10
                    }),
                    price: 5000
                }
            ]
        }
    },
    recommend: {
        url: '/service_list/recommend/_data',
        type: 'GET',
        data: {
            message: '',
            error: 0,
            data: [
                {
                    id: 2,
                    name: type.string({
                        lst: [
                            '文案一',
                            '文案二',
                            '文案三'
                        ]
                    }),
                    price: 6000,
                    tag: ''
                }
            ]
        }
    }
}
