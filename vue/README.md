__数据驱动__ __组件系统__

### 指令 ###
+ v-model
+ v-bind:attr.modifiers / :attr.modifiers
    + v-bind:class __[class & v-bind:class 共存]__
    + v-bind:style

        ```html
        <div id="el" v-bind:style="[fontStyle, borderStyle]"></div>
        ```
        ```javascript
        var vm = new Vue({
            el: '#el',
            data: {
                fontStyle: {
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'red'
                },
                borderStyle: {
                    border: '1px solid #000',
                    borderRadius: '10px'
                }
            }
        });
        ```

        -> 等效于
        ```css
        #el {
            font-size: 14px;
            line-height: 20px;
            color: red;
            border: 1px solid #000;
            border-radius: 10px;
        }
        ```
+ v-if + v-else, v-show + v-else (适用于频繁切换)

    ```html
    <template v-if="judge">
        <h3>title</h3>
        <p>paragraph</p>
    </template>
    ```
+ v-for
    + 遍历数组 <$index>
    
        ```html
        <template v-for="item in items">
            <h3>{{ $index }}.{{ item.title }}</h3>
            <p>{{ item.paragraph }}</p>
        </template>
        ```
    + 遍历对象 <$index, $key>

        ```html
        <ul>
            <li v-for="val in obj">{{ $key }}:{{ val }}</li>
        </ul>
        ```
        
    __track-by="$index"__
    + 优点
        + 高效数据刷新
        + 处理重复数据项
    + 缺点
        + 不映射数据项顺序调整
        + 不同步临时状态及组件私有状态

    `this.items.$set(index, value);`

    `this.obj.$set(key, value);`(待检验)

    `this.items.$remove(index);`(待检验)

    `this.obj.$remove(key);`(待检验)
 
    `this.items.$remove(value);`(待检验)

    `this.obj.$remove(value);`(待检验)
+ v-on:event(param, $event) / @event(param, $event)

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
