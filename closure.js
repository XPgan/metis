/**
 * Created by sunmy on 15/10/12.
 */

/** 闭包 **/
var self = (function () {
    var a = 1;
    var object = {
        run1: fun1,
        run2: fun2
    };

    function fun1 () {
        a++;
        console.log(a);
    }

    function fun2 () {
        a++;
        console.log(a);
    }

    return object
})();

self.run1();
self.run2();

/* 返回函数 */
function fun1 (x) {
    var a = 'a';
    var innerFun = function fun2 (y) {
        console.log(a + ',' + x + ',' + y);
    };

    return innerFun; // return fun2;
}

var getFun = fun1('b');

getFun('c');

// error: fun2 非返回函数 且 (直接调用 || 继父级函数调用)

function fun1 (x) {
    var a = 'a';
    var innerFun = function fun2 (y) {
        console.log(a + ',' + x + ',' + y);
    };

    return innerFun; // return fun2;
}

function fun () {
    var getFun = fun1('b');
    getFun('c');
}

fun();

/* 返回对象 */
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

/** 对象 **/
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


/** 循环 & 闭包 **/

// 变量记录: 变量引用 非 变量值 (函数定义)    变量查询: 子函数 -> 父函数 - ... > 父函数 - ... > undefined (函数调用)

// example1
var result = [];
function foo() {
    for (var i = 0;i < 3;i++) {
        result[i] = function () {
            console.log(i);
        }
    }
}

foo();
result[0]();
result[1]();
result[2]();

// example2
var result = [];
function foo(i) {
    result[i] = function () {
        console.log(i);
    }
}

for (var i = 0;i < 3;i++) {
    foo(i);
}

result[0]();
result[1]();
result[2]();

// example3
function foo() {
    for (var i = 0;i < 3;i++) {
        (function () {
            console.log(i);
        })(i);
    }
}

foo();

// example4
var result = [];
function foo() {
    for (var i = 0;i < 3;i++) {
        result[i] = (function (j) {
            return function () {
                console.log(j);
            }
        })(i);
    }
}

foo();
result[0]();
result[1]();
result[2]();


