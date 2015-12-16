/**
 * Created by sunmy on 15/12/15.
 */

// 柯里化：固定异变参数 缩小适用范围（返回函数接受剩余参数）
// 反柯里化：泛化参数 扩大适用范围
// 例：this 指针

// example1
var curry = function (curried) {
    // 过滤 curried 中 function
    var params = Array.prototype.slice.call(arguments, 1);
    var returnFun = function () {
        // arguments 转数组
        var sub_params = Array.prototype.slice.call(arguments, 0);
        // 组装 params  触发 function
        curried.apply(this, params.concat(sub_params));
    };

    return returnFun;
};


var fun = function (msg, from, to) {
    console.log(msg + '-' + from + '-' + to);
};
var curried = curry(fun, 'My name is smy');

curried('smy', 'yaq'); // -> 'My name is smy-smy-yaq'


// example2
var curry = function (curried) {
    var params = Array.prototype.slice.call(arguments, 1);
    curried.apply(this, params);

    var returnFun = function () {
        curried.apply(this, arguments);

        return returnFun;
    };

    return returnFun;
};


var sum = 0;
var add = function (num) {
    sum += num;
};
var curried = curry(add, 1);

curried(2)(3)(4); // -> sum = 10




