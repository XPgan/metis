/**
 * Created by sunmy on 15/11/30.
 */

/*
$.fn() 调用$(dom).fun(arguments) 对象级别 单个
$.extend() 调用$.fun(arguments) 类级别 多个
$.fn.extend() 调用$(dom).fun(arguments) 对象级别 多个
*/

var div = document.createElement('div');

// example1
$.extend({
    fun1: function (a, b) {
        console.log(a + b);
    },
    fun2: function (a, b) {
        console.log(a - b);
    }
});

$.fun1(10, 5); // -> 15
$.fun2(10, 5); // -> 5

// example2
$.fn.extend({
    fun1: function (a, b) {
        console.log(a + b);
    },
    fun2: function (a, b) {
        console.log(a - b);
    }
});

$.fun1(10, 5); // -> error
$.fun2(10, 5); // -> error

$(div).fun1(10, 5); // -> 15
$(div).fun2(10, 5); // -> 5

// example3
$.fn.fun = function () {
    console.log('A TEST');
};

$.fun(); // -> error
$(div).fun(); // -> 'A TEST'



// $.extend()
var obj1 = {name: 's', age: 22, object: {A: 'Maths', B: 'Chinese'}};
var obj2 = {name: 'm', from: 'TJ', object: {A: 'Science', C: 'PE'}};
var obj3 = {name: 'y', age: 23};

var newObj = $.extend({}, obj1, obj2, obj3); // -> Object {name: 'y', age: 23, object: {A: 'Science', C: 'PE'}, from: 'TJ'} 说明：obj1 & obj2 & obj3 不变
var newObj = $.extend(obj1, obj2, obj3); // -> Object {name: 'y', age: 23, object: {A: 'Science', C: 'PE'}, from: 'TJ'} 说明：newObj = obj1, obj2 & obj3 不变
var newObj = $.extend(true, {}, obj1, obj2, obj3); // -> Object {name: 'y', age: 23, object: {A: 'Science', B: 'Chinese', C: 'PE'}, from: 'TJ'} 说明：深度拷贝

