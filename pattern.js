/**
 * Created by sunmy on 16/1/5.
 */

/** 贪婪量词 default **/ // 右 -> 左  长 -> 短
/** 惰性量词 ? **/ // 左 -> 右  短 -> 长
/** 支配量词 + **/ // 仅尝试匹配整个字符串 支持度低

// example1
var str = 'aaxxxaaaxxxx';

var pattern = /a[a-z]*a/;
pattern.exec(str); // ['aaxxxaaa']

var pattern = /a[a-z]*?a/;
pattern.exec(str); // ['aa']

// example2
var str = 'abcd';
var pattern = /[a-z]{1,3}/g;

pattern.exec(str); // ['abc']
pattern.exec(str); // ['d']
pattern.exec(str); // null
// T = 3 循环

var str = 'abcd';
var pattern = /[a-z]{1,3}?/g;

pattern.exec(str); // ['a']
pattern.exec(str); // ['b']
pattern.exec(str); // ['c']
pattern.exec(str); // ['d']
pattern.exec(str); // null
// T = 5 循环



/** 子匹配 **/
var str = 'my name is sunmy age 16 birth 1992 12 06';
var pattern = /(\d+)\s(.+)(\d){2}/;

pattern.exec(str); // /g 有 & 无 [匹配字符串, 子匹配...]
str.match(pattern); // /g 有 [匹配字符串, 匹配字符串...]  /g 无 [匹配字符串, 子匹配...]

// 回溯 \num $num
// 非获取匹配 (?:)

// /m (str 含 \n(换行) | \r(回车 置为^)) (pattern 含 ^ | $)
// \s \W \D \b 匹配 \n & \r    . 不匹配 \n & \r
// 排除型字符组需要匹配字符