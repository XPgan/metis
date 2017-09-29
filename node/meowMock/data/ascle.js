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
                                related_service: type.string(),
                                author: type.string(),
                                doctor: type.string(),
                                topic_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                view_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                comment_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                vote_num: type.number({
                                    min: 100,
                                    max: 1000
                                }),
                                level: type.string({
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
                data: {
                    services: type.list({
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
        }
    }
}