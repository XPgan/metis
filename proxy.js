/**
 * Created by sunmy on 15/11/26.
 */

var div = document.createElement('div');
var obj = {
    pro: 'A TEST',
    fun: function () {
        console.log(this);
        console.log(this.pro);
    }
};

$(div).on('event1', obj.fun);
$(div).on('event2', function () {
    obj.fun();
});

$(div).trigger('event1');  // -> div  undefined
$(div).trigger('event2');  // -> obj  'A TEST'




// $.proxy() 强制修改函数的上下文语境
var proxy = $.proxy(obj.fun, obj);

$(div).on('event3', proxy);
$(div).trigger('event3');  // -> obj  'A TEST'