# Closure #

```javascript
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
```
```javascript
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
```

*****

#### *返回函数 ####

```javascript
function fun1 (x) {
    var a = 'a';
    var method = function fun2 (y) {
        console.log(a + ',' + x + ',' + y);
    };

    return method;
}

var method = fun1('b');

method('c'); // error: fun2 非返回函数
```
```javascript
function fun1 (x) {
    var a = 'a';
    var method = function fun2 (y) {
        console.log(a + ',' + x + ',' + y);
    };

    return method;
}
function fun () {
    var method = fun1('b');
    method('c');
}

fun();
```

#### *返回对象 ####

```javascript
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
```
```javascript
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
```

*****

___循环 + 闭包___

```javascript
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
```
```javascript
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
```
```javascript
function foo() {
    for (var i = 0;i < 3;i++) {
        (function () {
            console.log(i);
        })(i);
    }
}

foo();
```
```javascript
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
```