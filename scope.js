/**
 * Created by sunmy on 16/1/14.
 */

/** for if while 不是作用域的划分标准 **/

/** example1 **/
function test () {
    console.log(a);
    var a = 2;
    console.log(a);
}

test(); // -> undefined 2

/** example2 **/
var a = 1;
function test () {
    console.log(a);
    var a = 2;
    console.log(a);
}

test(); // -> undefined 2

/** example3 **/
var a = 1;
function test () {
    console.log(a);
}

test(); // -> 1