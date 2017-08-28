/**
 * Created by sunmy on 2017/8/26.
 */

var method = require('./method');
var material = require('./material');

module.exports = {
    id: function () {
        return (new Date()).valueOf();
    },
    figure: function (opt) {
        return method.random(opt.min, opt.max);
    },
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
    image: function (opt) {
        var imageLst = material.image;
        return imageLst[method.random(0, imageLst.length - 1)] + opt.type;
    },
    list: function (opt) {
        var result = [];
        for (var i = 0;i < opt.length;i++) {
            result.push(opt.value());
        }
        return result;
    }
}