# Eval #

```javascript
var result = eval('2 + 1'); // -> 3
```
```javascript
var num = 3;
var result = eval(num + 2 + '3'); // -> 53
```
```javascript
var result = eval('var x = 10;var y = 20;console.log(x + y)'); // -> undefined
```
```javascript
var myEval = eval;
myEval('1 + 2'); // 异常
```
```javascript
var jsonStr = '{name: "sunmy", password: "123"}';
var result = eval('(' + jsonStr + ')'); // -> {name: "sunmy", password: "123"}
```