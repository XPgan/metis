/**
 * Created by sunmy on 15/12/30.
 */

// break 跳出循环
for (var i = 0;i < 6;i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}
// -> 0 1 2

var i = 0;
while (i < 6) {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}
// -> 0 1 2


// continue 跳出本次循环
for (var i = 0;i < 6;i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
// -> 0 1 2 4 5

var i = 0;
while (i < 6) {
    i++;
    if (i == 3) {
        continue;
    }
    console.log(i);
}
// -> 1 2 4 5 6
// i++ 于 continue 后为死循环 其后代码不执行 变量 i 无法 累加


var a = 1;
switch (a) {
    case 0:
        console.log('first');
        break;
    case 1:
        console.log('second');
        break;
    case 2:
        console.log('third');
        break;
}
// 无 break 匹配 case 其后语句顺序执行
// 使用 continue 报错


