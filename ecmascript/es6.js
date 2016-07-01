/**
 * Created by sunmy on 16/6/22.
 */

/* 转码
 * <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
 * <script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
 * <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
 * <script type="module">
 *     ...
 * </script>
 */

/* improvement
 * 1. 函数默认值: function foo (x = 0, y = 0) {}
 * 2. 扩展运算符: ...
 * 3. 函数绑定运算符: ::
 */

/* tips
 * 1. 默认值生效: === undefined
 */


/** (let) (const [只读]常量)
 * 1. 块级作用域
 * 2. 重复声明报错
 **/
const a = [];

a.push('hello'); // 执行
a.length = 0; // 执行
a = ['hello world']; // 报错


/** 解构赋值
 * 适用于: (数组) (对象) (字符串) (数值 -> 对象) (布尔值 -> 对象)
 */

// example1
function method () {
    return 'method';
}

var [x = method()] = [1]; // -> 1
var [y = method()] = [null]; // -> null
var [z = method()] = [undefined]; // -> 'method'

// example2
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


/** 模板 **/
var name = 'sunmy';
var module = `My name is ${name}`;


/** 箭头函数
 * var 函数名 = (参数) => 返回值;
 * var 函数名 = (参数) => {函数体};
 *
 * 注意:
 * 1. 无 this
 *    -> 无构造函数功能
 *    -> call() apply() bind() 无效
 * 2. 无 arguments 对象
 */

// example1
var foo = (param1, param2) => param1 + param2;

// example2
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


/** Set
 * 1. 无重复值
 * 2. 方法:
 *    .add(value) .delete(value) .has(value) .clear()
 *    .keys() .values() .entries() .forEach()
 *
 * 注意:
 * 1. (NAN === NAN) ({} !== {})
 */
var result = new Set([1, 2, 3, 3, 4, 4, 4, 5]); // -> Set {1, 2, 3, 4, 5}
var result = new Set([1, 2, 3, 4, 5].filter(x => (x % 2) == 0)); // -> Set {2, 4}