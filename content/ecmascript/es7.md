# ECMAScript 7 #

+ __数值扩展__

    + _指数运算符：**_

+ __函数扩展__

    + _函数绑定运算符：::_

*****

### Async 函数 ###

```javascript
async function getStockPriceByName (name) {
    var symbol = await getStockSymbol(name);
    var stockPrice = await getStockPrice(symbol);
    return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
    console.log(result);
});
```