/**
 * Created by sunmy on 15/12/30.
 */

var result = eval('2 + 1'); // result -> 3

var num = 3;
var result = eval(num + 2 + '3'); // result -> 53

var result = eval('var x = 10;var y = 20;console.log(x + y)'); // 执行代码 输出 30  result -> undefined

var myEval = eval;
myEval('1 + 2'); // 可能抛出 EvalError 异常

var jsonStr = '{name: "sunmy", password: "123"}';
var result = eval('(' + jsonStr + ')'); // result -> {name: "sunmy", password: "123"}
// JSON.stringify() 逆向操作

