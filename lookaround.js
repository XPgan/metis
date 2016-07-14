/**
 * Created by sunmy on 16/1/7.
 */

/**
 顺序肯定环视 (?=expression) 右侧匹配 expression
 顺序否定环视 (?!expression) 右侧不匹配 expression
 逆序肯定环视 (?<=expression) 左侧匹配 expression
 逆序否定环视 (?<!expression) 左侧不匹配 expression
**/

// example1
var str = 'sunmy age 1992';
var pattern = /\w{3}(?=\s\d)/g;
pattern.exec(str); // ['age']

// example2
var str = 'bir1992th';

var pattern = /\w(?!\d)/g;
pattern.exec(str); // ['c'] ['3'] ['v'] ['n'] null

var pattern = /\w(?=\D)/g;
pattern.exec(str); // ['c'] ['3'] ['v'] null
// (?!\d) 与 (?=\D) 不等价
// (?=\D) 须匹配一个非数字字符