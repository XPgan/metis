/**
 * Created by sunmy on 2017/8/26.
 */

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
                    name: '',
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
                    name: '',
                    price: 6000,
                    tag: ''
                }
            ]
        }
    }
}
