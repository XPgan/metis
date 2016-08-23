# Lookaround #

+ __?=expression__ 顺序肯定环视 (右侧匹配 expression)
+ __?!expression__ 顺序否定环视 (右侧不匹配 expression)
+ __?<=expression__ 逆序肯定环视 (左侧匹配 expression)
+ __?<!expression__ 逆序否定环视 (左侧不匹配 expression)

```javascript
var str = 'sunmy age 1992';
var pattern = /\w{3}(?=\s\d)/g;
pattern.exec(str); // -> ['age']
```
```javascript
var str = 'bir1992th';
var pattern = /\w(?!\d)/g;
pattern.exec(str); // -> ['c'] ['3'] ['v'] ['n'] null
```
```javascript
var str = 'bir1992th';
var pattern = /\w(?=\D)/g;
pattern.exec(str); // -> ['c'] ['3'] ['v'] null
```

注意
- (?!\d) 与 (?=\D) 不等价
- (?=\D) 须匹配一个非数字字符