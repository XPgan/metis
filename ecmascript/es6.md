# ECMAScript 6 #

__transcoding__
```html
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
<script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
<script type="module">
    // code
</script>
```

__improvement__
- 函数默认值：function foo (x = 0, y = 0) {}
- 扩展运算符：...
- 函数绑定运算符：::

__tips__
- 默认值生效：=== undefined

*****

### #变量 ###
+ __let__
+ __const__ (只读常量)

    ```javascript
    const a = [];
    
    a.push('hello'); // 执行
    a.length = 0; // 执行
    a = ['hello world']; // 报错
    ```

注意
- 块级作用域
- 重复声明报错

*****

### #解构赋值 ###

```javascript
function method () {
    return 'method';
}

var [x = method()] = [1]; // -> 1
var [y = method()] = [null]; // -> null
var [z = method()] = [undefined]; // -> 'method'
```
```javascript
var obj = {
    slogan: [
        'hello',
        {
            name: 'sunmy',
            age: '23'
        }
    ]
};
var {slogan: [wels, {name, age}]} = obj;

console.log(slogan); // error
console.log(wels); // -> 'hello'
console.log(name); // -> 'sunmy'
console.log(age); // -> '23'
```

适用于
- 数组
- 对象
- 字符串
- 数值
- 布尔值

*****

### #模板 ###

```javascript
var name = 'sunmy';
var module = `My name is ${name}`;
```

*****

### #箭头函数 ###

```javascript
function Timer (x, y) {
    this.x = x;
    this.y = y;

    var t1 = setTimeout(() => {
        console.log(this); // this -> timer
    }, 1000);
    var t2 = setTimeout(function () {
        console.log(this); // this -> window
    }, 1000);
}

var timer = new Timer('x', 'y');
```

形式
- var 函数名 = (参数) => 返回值;
- var 函数名 = (参数) => {函数体};

注意
- 无 this
- 无 arguments