/**
 * Created by sunmy on 2017/8/26.
 */

var method = require('./method');

module.exports = {
    string: function (opt) {
        var result = '';
        if (opt.lst) {
            var selectedIndex = method.random(0, opt.lst.length - 1);
            result = opt.lst[selectedIndex];
        } else {
            var stringLength = method.random(opt.min, opt.max);
            for (var i = 0;i < stringLength;i++) {
                result += String.fromCharCode(20000 + parseInt(Math.random() * 1000));
            }
        }
        return result;
    },
    figure: function (opt) {
        return method.random(opt.min, opt.max);
    },
    id: function () {
        return (new Date()).valueOf();
    }
}