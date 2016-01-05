/**
 * Created by sunmy on 16/1/4.
 */

var str = 'sunmy age 16 birth 1992';

/** exec pattern方法 **/
var pattern = /\d{2}/;
pattern.exec(str); // ['16']
// T = 1 循环  无匹配结果返回 null

var pattern = /\d{2}/g;
pattern.exec(str); // ['16']
pattern.exec(str); // ['19']
pattern.exec(str); // ['92']
pattern.exec(str); // null
// T = 4 循环

/** test pattern方法 **/
var pattern = /\d{2}/;
pattern.test(str); // true
// /g 结果相同  无匹配结果返回 false

/** match str方法 **/
var pattern = /\d{2}/;
str.match(pattern); // ['16']
// T = 1 循环  无匹配结果返回 null

var pattern = /\d{2}/g;
str.match(pattern); // ['16', '19', '92'] 返回所有匹配结果

/** search str方法 **/
var pattern = /\d{2}/;
str.search(pattern); // 10
// T = 1 循环  无匹配结果返回 -1  /g 结果相同

/** replace **/
var pattern = /\d{2}/;
str.replace(pattern, 's'); // sunmy age s birth 1992

var pattern = /\d{2}/g;
str.replace(pattern, 's'); // sunmy age s birth ss

/** split **/
var pattern = /\d{2}/;
str.split(pattern); // ['sunmy age ', ' birth ', '', '']
// /g 结果相同


