/**
 * Created by sunmy on 16/1/14.
 */

/**
 * 变量/函数声明提升
 * 变量/函数定义及初始化 分配存储空间
 *
 * for if while 不是作用域的划分标准
 */

/* 函数作用域: 其声明时所处作用域 */

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

/** example4 **/
function test () {
    fun1(); // error
    fun2(); // 执行

    // 变量声明提升 初始化未提升
    var fun1 = function () {
        console.log('function1');
    };
    // 函数声明提升
    function fun2 () {
        console.log('function2');
    }
}

test();
fun1(); // error
fun2(); // error