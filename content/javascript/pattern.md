# Pattern #

### #匹配函数 ###
+ pattern 方法
    + __exec__
        
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/;
        pattern.exec(str); // -> ['16']
        ```
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/g;
        pattern.exec(str); // -> ['16']
        pattern.exec(str); // -> ['19']
        pattern.exec(str); // -> ['92']
        pattern.exec(str); // -> null
        ```
    + __test__
        
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/;
        pattern.test(str); // -> true
        ```
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/g;
        pattern.test(str); // -> true
        ```
+ string 方法
    + __match__
    
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/;
        str.match(pattern); // -> ['16']
        ```
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/g;
        str.match(pattern); // -> ['16', '19', '92']
        ```
    + __search__
        
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/;
        str.search(pattern); // -> 10
        ```
        ```javascript
        var str = 'sunmy age 16 birth 1992';
        var pattern = /\d{2}/g;
        str.search(pattern); // -> 10
        ```

*****

### #量词 ###
+ __default__ 贪婪量词 (右 -> 左，长 -> 短)
+ __?__ 惰性量词 (左 -> 右，短 -> 长)
+ __+__ 支配量词 (仅尝试匹配整个字符串，支持度低)

```javascript
var str = 'aaxxxaaaxxxx';
var pattern = /a[a-z]*a/;
pattern.exec(str); // -> ['aaxxxaaa']
```
```javascript
var str = 'aaxxxaaaxxxx';
var pattern = /a[a-z]*?a/;
pattern.exec(str); // -> ['aa']
```
```javascript
var str = 'abcd';
var pattern = /[a-z]{1,3}/g;

pattern.exec(str); // -> ['abc']
pattern.exec(str); // -> ['d']
pattern.exec(str); // -> null
```
```javascript
var str = 'abcd';
var pattern = /[a-z]{1,3}?/g;

pattern.exec(str); // -> ['a']
pattern.exec(str); // -> ['b']
pattern.exec(str); // -> ['c']
pattern.exec(str); // -> ['d']
pattern.exec(str); // -> null
```

*****

### #子匹配 ###

```javascript
var str = 'my name is sunmy age 16 birth 1992 12 06';
var pattern = /(\d+)\s(.+)(\d){2}/;
pattern.exec(str); // -> ['16 birth 1992 12 06', '16', 'birth 1992 12 ', '6']
str.match(pattern); // -> ['16 birth 1992 12 06', '16', 'birth 1992 12 ', '6']
```

*****

### #应用 ###
+ __replace__

    ```javascript
    var str = 'sunmy age 16 birth 1992';
    var pattern = /\d{2}/;
    str.replace(pattern, 's'); // -> sunmy age s birth 1992
    ```
    ```javascript
    var str = 'sunmy age 16 birth 1992';
    var pattern = /\d{2}/g;
    str.replace(pattern, 's'); // -> sunmy age s birth ss
    ```
+ __split__

    ```javascript
    var str = 'sunmy age 16 birth 1992';
    var pattern = /\d{2}/;
    str.split(pattern); // -> ['sunmy age ', ' birth ', '', '']
    ```