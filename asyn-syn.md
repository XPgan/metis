# Asyn - Syn #

### #同步 ###

```javascript
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
```

### #回调函数 ###

```javascript
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
```

### #事件监听 ###

```javascript
var $body = $('body');

setTimeout(function () {
    console.log('setTimeout');
    $body.trigger('done', ['var1', 'var2']);
}, 500);

$body.on('done', fun);

function fun (event, a, b) {
    console.log('fun' + a + b);
}
```

### #发布订阅 ###

```javascript
setTimeout(function () {
    console.log('setTimeout');
    $.publish('done');
}, 500);

$.subscribe('done', fun);

function fun () {
    console.log('fun');
}
```

### _#Promise_ ###

```javascript
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
```
```javascript
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
```
```javascript
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

$.when(fun1()).then(fun2).then(fun3); // error: fun2, fun3 立即执行
```

#### *循环 ####

```javascript
for (var i = 0;i < 5;i++)
{
    console.log('inner' + i);
}
console.log('outer');
```
```javascript
for (var i = 0;i < 5;i++)
{
    console.log('outer' + i);

    function fun () {
        console.log('inner' + i);
    }
}
fun();
```
```javascript
for (var i = 0;i < 5;i++)
{
    console.log('inner' + i);

    fun(i);
}

function fun (j) {
    console.log('outer' + j);
}
```
```javascript
for (var i = 0;i < 5;i++)
{
    console.log('outer' + i);

    (function fun (j) {
        console.log('inner' + j);
    })(i);
}
```