/**
 * Created by sunmy on 15/12/15.
 */

// 函数柯里化：固定部分参数，返回一个接受剩余参数的函数，也称为部分计算函数，目的是为了缩小适用范围

var curry = function (curried) {
    // 过滤 curried function
    var params = Array.prototype.slice.call(arguments, 1);
    var returnFun = function () {
        // 组装 params  触发 function
        var sub_params = Array.prototype.slice.call(arguments, 0);
        curried.apply(this, params.concat(sub_params));
    };

    return returnFun;
};


var fun = function (msg, from, to) {
    console.log(msg + '-' + from + '-' + to);
};
var curried = curry(fun, 'My name is smy');

curried('smy', 'glf'); // -> 'My name is smy-smy-glf'



