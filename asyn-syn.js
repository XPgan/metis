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


/** 对象 **/

// example1
function fun () {
    var price = 50;
    return {
        total: function (num) {
            var totalPrice = price * num;

            console.log(totalPrice);
        },
        setPrice: function (newPrice) {
            price = newPrice
        }
    }
}

var self = fun();

self.total(5);

self.setPrice(30);
self.total(6);

// example2
var object = {

    price: 50,

    total: function (num) {
        var _this = this;
        var totalPrice = _this.price * num;

        console.log(totalPrice);
    },
    setPrice: function (newPrice) {
        var _this = this;

        _this.price = newPrice;
    }
};

object.total(5);

object.setPrice(30);
object.total(6);

// example3
function fun (opt) {

    var object = {

        price: opt.initPrice,

        total: function (num) {
            var _this = this;
            var totalPrice = _this.price * num;

            console.log(totalPrice);
        },
        setPrice: function (newPrice) {
            var _this = this;

            _this.price = newPrice;
        }
    };

    return object
}

var object = fun({
    initPrice: 50
});

object.total(5);

object.setPrice(30);
object.total(6);


/** 循环 **/

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