/**
 * Created by sunmy on 2017/9/14.
 */

var type = require('../type');

module.exports = {
    getCoupon: {
        url: '/get_coupon/_data',
        type: 'POST',
        data: function () {
            return {
                message: '领取成功',
                error: 0,
                data: {}
            }
        }
    }
}