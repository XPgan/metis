/**
 * Created by sunmy on 16/1/13.
 */

// 问题1 slice split splice
// 问题2 slice substr substring (正数 负数 缺省 浮点数 数值型字符串 NaN)

/** splice 数组 **/
/** .splice(index, num, item1 ... itemn)
 *
    index 添加/删除元素位置
        1. 正数/负数(长度 + 负数)
                (正数 > length) -> last
                (|负数| > length) -> first
        2. 浮点数/数值型字符串 -> parseInt (向下取整)
        3. NaN -> 0
    num 删除元素数量
        1. 负数/NaN -> 0
        2. 浮点数/数值型字符串 -> parseInt (向下取整)
    item 添加元素
 */

var array = ['my', 'name', 'is', 'sunmy'];
var newArray = array.splice(1, 1, 'nickname');
// array -> ['my', 'nickname', 'is', 'sunmy']  newArray -> ['name']  返回被删除元素 改变原数组

/** slice 数组 字符串 **/
/** .slice(start, end)
 *  end > start

    1. NaN -> 0
    2. 浮点数/数值型字符串 -> parseInt (向下取整)
 */

var array = ['my', 'name', 'is', 'sunmy'];
var newArray = array.slice(1, 3); // newArray -> ['name', 'is']  不改变原数组/字符串

/** split 字符串 **/
/** .split(separator, num)
 *  join 逆操作 数组

    separator 分割字符串/正则表达式
    num 结果数组长度
        1. 缺省/负数/(正数 > length) -> default
        2. 浮点数/数值型字符串 -> parseInt (向下取整)
        3. NaN -> 0
 */

var str = 'my name is sunmy';
var newArray = str.split(' ', 2); // -> ['my', 'name']  不改变原字符串

/** substr 字符串 **/
/** .substr(start, length)
 *
    start 起始位置
        1. (|负数| > length) -> first
           (正数 > length) -> 不存在则空
        2. NaN -> 0
        3. 浮点数/数值型字符串 -> parseInt (向下取整)
    length 截取长度
        1. (正数 > length)/缺省 -> last
        2. 负数/NaN -> 0
        3. 浮点数/数值型字符串 -> parseInt (向下取整)
 */

var str = 'my name is sunmy';
var newStr = str.substr(3, 4); // -> 'name'  不改变原字符串

/** substring 字符串 **/
/** .substring(pos1, pos2)
 *  选取 pos 中  较大值为 end 较小值为 start

    1. 负数/NaN -> 0
    2. 浮点数/数值型字符串 -> parseInt (向下取整)
 */

var str = 'my name is sunmy';
var newStr = str.substring(7, 3); // -> 'name'  不改变原字符串