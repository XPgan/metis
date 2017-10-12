var type = require('../type');

module.exports = {
    diaryList: {
        url: '/diarylist/_data',
        type: 'GET',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: {
                    total: 89,
                    list: type.list({
                        length: 10,
                        data: function () {
                            return {
                                create_time: type.string(),
                                id: type.id(),
                                title: type.string(),
                                service_name: type.string(),
                                user: type.string(),
                                doctor_name: type.string(),
                                topic_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                view_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                reply_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                vote_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                content_level: type.string({
                                    minL: 2,
                                    maxL: 4
                                })
                            }
                        }
                    })
                }
            }
        }
    },
    diaryGatherTrans: {
        url: '/diary_gather/trans',
        type: 'GET',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: type.list({
                    length: 26,
                    data: function () {
                        return {
                            id: type.id(),
                            name: type.string()
                        }
                    }
                })
            }
        }
    },
    supplementAll: {
        url: '/supplement/all/_data',
        type: 'GET',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: {
                    total: 119,
                    settlements: type.list({
                        length: 10,
                        data: function () {
                            return {
                                id: type.id(),
                                month: type.number({
                                    min: 2001,
                                    max: 2020
                                }) + '-' + type.number({
                                    min: 1,
                                    max: 12
                                }),
                                should_pay: type.number({
                                    min: 100,
                                    max: 9999
                                }),
                                already_pay: type.number({
                                    min: 100,
                                    max: 9999
                                }),
                                loss: type.number({
                                    min: 100,
                                    max: 9999
                                }),
                                profit: type.number({
                                    min: 100,
                                    max: 9999
                                })
                            }
                        }
                    })
                }
            }
        }
    },
    shouldList: {
        url: '/shouldlist/_data',
        type: 'GET',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: {
                    total: 99,
                    alread_pay: type.number(),
                    need_pay: type.number(),
                    payment: type.number(),
                    budans: type.list({
                        length: 10,
                        data: function () {
                            return {
                                id: type.id(),
                                order_id: type.id(),
                                username: type.string(),
                                user_phone: type.string(),
                                dev_projects: type.list({
                                    length: 2,
                                    data: function () {
                                        return {
                                            name: type.string(),
                                            money: type.number()
                                        }
                                    }
                                }),
                                create_time: type.string(),
                                extra_consume: type.number(),
                                payment: type.number(),
                                status: type.string()
                            }
                        }
                    })
                }
            }
        }
    },
    alreadyList: {
        url: '/alreadylist/_data',
        type: 'GET',
        data: function () {
            return {
                message: '请求成功',
                error: 0,
                data: {
                    total: 78,
                    prices: type.number(),
                    month: type.number({
                        min: 2001,
                        max: 2020
                    }) + '-' + type.number({
                        min: 1,
                        max: 12
                    }),
                    balance: type.number(),
                    orders: type.list({
                        length: 10,
                        data: function () {
                            return {
                                id: type.id(),
                                service_price: type.number(),
                                discount: type.number(),
                                phone: type.string(),
                                validate_time: type.string(),
                                service_name: type.string()
                            }
                        }
                    })
                }
            }
        }
    }
}