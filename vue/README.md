__数据驱动__ __组件系统__

### 指令 ###
+ v-model
+ v-bind:attr.modifiers / :attr.modifiers
+ v-if
+ v-for
+ v-on:event / @event

***

### 数据绑定 ###
+ {{_}}
+ {{*_}} (单次插值)
+ {{{_}}}

#### 过滤器 ####

***

### 实例 ###
+ 构造器

    ```javascript
    var vm = new Vue({});
    ```

    _组件_
    ```javascript
    var Component = Vue.extend({});
    var instance = new Component();
    ```

+ 属性及方法
    + vm.$data
    + vm.$el
    + vm.$watch

    _生命周期_
    ```javascript
    var vm = new Vue({
        el: '#id',
        data: {},
        created: function () {},
        compiled: function () {},
        ready: function () {},
        destroyed: function () {}
    });
    ```

    _计算属性_
    ```javascript
    var vm = new Vue({
        el: '#id',
        data: {
            firstName: 'Sun',
            lastName: 'Mengyuan'
        },
        computed: {
            fullName: {
                get: function () {
                    return this.firstime + ' ' + this.lastName;
                },
                set: function (value) {
                    var tmp = value.split(' ');
                    this.firstName = tmp[0];
                    this.lastName = tmp[1];
                }
            }
        }
    });
    console.log(vm.fullName); // -> 'Sun Mengyuan'
 
    vm.fullName = 'Sun My';
    console.log(vm.firstName); // -> 'Sun'
    console.log(vm.lastName); // -> 'My'
    ```