/**
 * Created by sunmy on 15/12/31.
 */

function inner () {
    console.log(inner.caller);
    console.log(arguments.callee);
}

function outer () {
    inner();
}

function parent () {
    outer();
}

parent();
/*
   调用当前函数的函数
   function outer() {
       inner();
   }

   正在被执行的当前函数
   function inner() {
       console.log(inner.caller);
       console.log(arguments.callee);
   }

   执行 inner() inner.caller 为 null 此时 inner 为顶层函数

   arguments.callee.length 形参长度  arguments.length 实参长度
*/