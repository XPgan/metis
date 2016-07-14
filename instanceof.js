/**
 * Created by sunmy on 15/12/31.
 */

function A () {}
function B () {}
B.prototype = new A();

var obj = new B();
console.log(obj instanceof A); // true
console.log(obj instanceof B); // true
// instanceof 可判定 继承关系


Function instanceof Function // true
Function instanceof Object // true

Number instanceof Number // false
Number instanceof Object // true
String instanceof Object // true