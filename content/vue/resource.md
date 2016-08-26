## [vue-resource](https://github.com/vuejs/vue-resource) ##

```javascript
this.$http.get(url, [options])
    .then((response) => {
        // success callback
    }, (response) => {
        // error callback
    })
    .catch((response) => {
        // catch callback
    })
```
```javascript
this.$http.post(url, data, [options])
    .then((response) => {
        // success callback
    }, (response) => {
        // error callback
    })
    .catch((response) => {
        // catch callback
    })
```