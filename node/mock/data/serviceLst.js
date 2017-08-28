/**
 * Created by sunmy on 2017/8/26.
 */

var type = require('../type');

module.exports = {
    common: {
        url: '/service_list/common/_data',
        type: 'GET',
        data: {
            message: '',
            error: 0,
            data: [
                {
                    id: type.id(),
                    name: type.string({
                        min: 5,
                        max: 10
                    }),
                    price: type.figure({
                        min: 1000,
                        max: 5000
                    }),
                    cover: type.image({
                        lst: [
                            'http://pic.igengmei.com/2017/01/12/1826/92409e6b2aeb-half',
                            'http://pic.igengmei.com/2017/02/28/1051/85f098608200-half',
                            'http://pic.igengmei.com/2016/09/23/1619/6b2c7f5e99f0-half',
                            'http://pic.igengmei.com/2017/03/03/1529/c38af532fa4f-half',
                            'http://pic.igengmei.com/2017/02/23/1912/b351e1dafcd4-half'
                        ]
                    }),
                    content: type.richtext_mixed()
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
                    id: type.id(),
                    name: type.string({
                        lst: [
                            '文案一',
                            '文案二',
                            '文案三'
                        ]
                    }),
                    price: type.figure({
                        min: 20,
                        max: 55000
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
                    is_soldout: true
                }
            ]
        }
    }
}
