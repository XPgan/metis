/**
 * Created by sunmy on 15/12/15.
 */

var curry = function (curried) {
    // 过滤 curried function
    // curried -> fun  arguments(返回所有传入参数) -> [fun, 'smy']
    console.log(arguments);
    var params = Array.prototype.slice.call(arguments, 1);

    return function () {
        // 组装 params  触发 function
        var sub_params = Array.prototype.slice.call(arguments, 0);
        return curried.apply(this, params.concat(sub_params));
    }
};


var fun = function (from, to) {
    console.log(from + '|' + to);
};
var curried = curry(fun, 'smy');

curried('yaq');
curried('glf');

