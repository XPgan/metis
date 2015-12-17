/**
 * Created by sunmy on 15/12/16.
 */

// example1
var obj = {
    pro: 'pro',
    action: function () {
        this.pro = 'new';
    }
};
var fun = obj.action;

obj.action(); // obj.pro -> 'new'  this -> obj
fun(); // obj.pro -> 'pro'  window.pro -> 'new'  this -> window


// example2
var Story = new Function;
Story.prototype = {
    pro: 'pro',
    action: function () {
        this.pro = 'new';
    }
};
var obj = new Story;

// 原型this 指向调用对象 非原型对象
obj.action(); // obj.pro -> 'new'  this -> obj
obj.hasOwnProperty('pro'); // obj.action() 执行后 true  obj.action() 执行前 false
obj.hasOwnProperty('start'); // false