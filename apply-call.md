# Apply - Call #

+ __apply__

    ```javascript
    var apply = Array.prototype.slice.apply(string, [params]);
    ```
+ __call__

    ```javascript
    var call = Array.prototype.slice.call(string, params);
    ```

```javascript
var obj = {
    pro1: 'pro1',
    pro2: 'pro2'
};
var fun = function (x, y) {
    console.log(x + '|' + y);
    console.log(this);
};

fun('a', 'b'); // -> 'a|b'
               // -> window

fun.apply(obj, ['a', 'b']); // -> 'a|b'
                            // -> Object {pro1: 'pro1', pro2: 'pro2'}
```