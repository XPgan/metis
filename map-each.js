/**
 * Created by sunmy on 15/11/30.
 */

var array = [2, 4, 7, 11];
var obj = {
    pro1: 'TEST1',
    pro2: 'TEST2'
};

// $.map
var newArray = $.map(array, function (value, index) {
    console.log(this); // -> Window
    console.log('value : ' + value); // -> value
    console.log('index : ' + index); // -> index

    return value * value; // newArray -> [4, 16, 49, 121]
});

var newObj = $.map(obj, function (value, key) {
    console.log(this); // -> Window
    console.log('value : ' + value); // -> value
    console.log('key : ' + key); // -> key
});


// $.each
var newArray = $.each(array, function (index, value) {
    console.log(this); // -> 当前循环对象
    console.log('index : ' + index); // -> index
    console.log('value : ' + value); // -> value

    return value * value; // newArray -> [2, 4, 7, 11]
});

var newObj = $.each(obj, function (key, value) {
    console.log(this); // -> 当前循环对象
    console.log('key : ' + key); // -> key
    console.log('value : ' + value); // -> value
});