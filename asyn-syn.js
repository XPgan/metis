/**
 * Created by sunmy on 15/10/9.
 */


/** 同步 **/
function fun1 () {
    setTimeout(function () {
        console.log('setTimeout');
    }, 500);
}

function fun2 () {
    console.log('fun2');
}

fun1();
fun2();


/** 回调函数 **/
function fun1 (callback) {
    setTimeout(function () {
        console.log('setTimeout');
        callback();
    }, 500);
}

function fun2 () {
    console.log('fun2');
}

fun1(fun2);


/** 事件监听 **/
var $body = $('body');

setTimeout(function () {
    console.log('setTimeout');
    $body.trigger('done', ['var1', 'var2']);
}, 500);

$body.on('done', fun);

function fun (event, a, b) {
    console.log('fun' + a + b);
}


/** 发布订阅 **/
setTimeout(function () {
    console.log('setTimeout');
    $.publish('done');
}, 500);

$.subscribe('done', fun);

function fun () {
    console.log('fun');
}


/** 循环 **/

// 循环: 同步

// example1
for (var i = 0;i < 5;i++)
{
    console.log('inner' + i);
}

console.log('outer');

// example2
for (var i = 0;i < 5;i++)
{
    console.log('outer' + i);

    function fun () {
        console.log('inner' + i);
    }
}

fun();

// example3
for (var i = 0;i < 5;i++)
{
    console.log('inner' + i);

    fun(i);
}

function fun (j) {
    console.log('outer' + j);
}

// example4
for (var i = 0;i < 5;i++)
{
    console.log('outer' + i);

    (function fun (j) {
        console.log('inner' + j);
    })(i);
}


/** deferred **/

// example1
$.when($.ajax('html.html'), $.ajax('new.html'))
    .done(function () {
        console.log('请求成功');
    })
    .fail(function () {
        console.log('请求失败');
    })
    .done(function () {
        fun();
    });

function fun () {
    console.log('fun');
}

// example2
function fun (txt, time, dfd) {
    setTimeout(function () {
        console.log(txt);
        dfd.resolve();
    }, time);
}

function fun1 () {
    var dfd = $.Deferred();
    fun('fun1', 500, dfd);

    return dfd.promise()
}

function fun2 () {
    var dfd = $.Deferred();
    fun('fun2', 300, dfd);

    return dfd.promise()
}

function fun3 () {
    console.log('fun3');
}

$.when(fun1()).then(fun2).then(fun3);

// example3
function fun (txt, time) {
    var dfd = $.Deferred();
    setTimeout(function () {
        console.log(txt);
        dfd.resolve();
    }, time);

    return dfd.promise();
}

function fun1 () {
    var promise = fun('fun1', 500);

    return promise
}

function fun2 () {
    var promise = fun('fun2', 300);

    return promise
}

function fun3 () {
    console.log('fun3');
}

$.when(fun1()).then(fun2).then(fun3);

// error: $.when(fun1()).then(fun2()).then(fun3()); fun2 & fun3 立即执行