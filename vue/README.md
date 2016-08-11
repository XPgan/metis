__数据驱动__ __组件系统__

### 指令 ###
+ v-model
+ v-bind
+ v-if
+ v-for
+ v-on:event

### 实例 ###
+ 构造器

    ```javascript
    var vm = new Vue({});
    ```

    组件
    ```javascript
    var Component = Vue.extend({});
    var instance = new Component();
    ```

+ 属性及方法
    + vm.$data
    + vm.$el
    + vm.$watch

        ```javascript
        vm.$watch('$data', function (newVal, oldVal) {
            // 该回调在 'vm.$data' 改变后执行
        });
        ```

+ 生命周期

    ```javascript
    var vm = new Vue({
        data: {},
        created: function () {},
        compiled: function () {},
        ready: function () {},
        destroyed: function () {}
    });
    ```