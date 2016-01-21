/**
 * Created by sunmy on 16/1/15.
 */

/** DOMContentLoaded -> DOM 加载完毕
 *
 *  $(document).ready(function () {}) [$(function () {})] -> DOM 加载完毕
 *  $(window).load(function () {}) -> source 加载完毕
 *
 *  部分标签及对象 支持 load 事件
 *
 *  setTimeout 执行队列末尾
 */

console.log('first');

var t = setTimeout(function () {
    console.log('setTimeout');
}, 0);

console.log('second');