# Promise #

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