/**
 * Created by sunmy on 15/12/15.
 */

// example1
var string  = 'My name is smy';

// apply 参数以数组表示
var apply = Array.prototype.slice.apply(string, [9, 13]); // -> ['s', ' ', 's', 'm']
// call
var call = Array.prototype.slice.call(string, 9, 13); // -> ['s', ' ', 's', 'm']


// example2
var obj = {
    pro1: 'pro1',
    pro2: 'pro2'
};
var fun = function (x, y) {
    console.log(x + '|' + y);
    console.log(this);
};

// apply 及 call 的 参数1 改变了上下文
fun('a', 'b'); // -> 'a|b'
               // -> Window

fun.apply(obj, ['a', 'b']); // -> 'a|b'
                            // -> Object {pro1: 'pro1', pro2: 'pro2'}