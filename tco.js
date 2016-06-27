/**
 * Created by sunmy on 16/6/24.
 */

/** 尾调用优化 (严格模式下开启)
 * 尾调用: 将调用内层函数 作为外层函数的最后一步操作 无需保留外层函数的'调用帧'
 * 尾调用优化: 内层函数 不再使用 外层函数的内部变量
 *
 * 调用栈
 * 调用帧: 调用位置 & 内部变量信息
 */

/** 尾递归优化 (严格模式下开启)
 * 尾递归: 尾调用自身
 */

// 非严格模式下 尾递归优化
function tco (f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator () {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

var sum = tco(function (x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1);
    } else {
        return x;
    }
});

sum(1, 100000);