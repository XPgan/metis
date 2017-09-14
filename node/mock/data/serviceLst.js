/**
 * Created by sunmy on 2017/8/26.
 */

var type = require('../type');

module.exports = {
    common: {
        url: '/service_list/common/_data',
        type: 'GET',
        data: function () {
            return {
                message: '',
                error: 0,
                data: {
                    id: type.id(),
                    number: type.number(),
                    // bool: type.bool(),
                    // string: type.string({
                    //     minL: 10,
                    //     maxL: 20
                    // })
                }
            }
        }
    },
    recommend: {
        url: '/service_list/recommend/_data',
        type: 'GET',
        data: function () {
            return {
                message: '',
                error: 0,
                data: type.list({
                    length: 22,
                    index: {
                        name: 'index',
                        format: '00\d',
                        type: 'string'
                    },
                    value: function () {
                        return {
                            id: type.id(),
                            name: type.string({
                                lst: [
                                    '文案一',
                                    '文案二',
                                    '文案三'
                                ]
                            }),
                            price: type.number({
                                min: -1,
                                max: 0
                            }),
                            tags: type.list({
                                value: function () {
                                    return type.string({
                                        min: 2,
                                        max: 4
                                    });
                                },
                                length: 10
                            }),
                            related_diaries: type.list({
                                value: function () {
                                    return {
                                        id: type.id(),
                                        name: type.string({
                                            min: 5,
                                            max: 10
                                        })
                                    }
                                },
                                length: 8
                            }),
                            cover: type.image({
                                type: '-half'
                            }),
                            is_soldout: type.bool()
                        }
                    }
                })
            }
        }
    }
}
