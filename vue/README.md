__数据驱动__ __组件系统__

### 指令 ###
+ __v-model__
+ __v-bind:attr.modifiers / :attr.modifiers__
    + v-bind:class (class & v-bind:class 共存)
    + v-bind:style

        ```html
        <div class="elem" v-bind:style="[fontStyle, borderStyle]"></div>
        ```
        ```javascript
        export default {
            data () {
                return {
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
            }
        }
        ```

        -> 等效于
        ```css
        .elem {
            font-size: 14px;
            line-height: 20px;
            color: red;
            border: 1px solid #000;
            border-radius: 10px;
        }
        ```
+ __v-if + v-else, v-show + v-else__

    ```html
    <template v-if="judge">
        <h3>title</h3>
        <p>paragraph</p>
    </template>
    ```
+ __v-for__
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

    ___track-by=""___
    + 优点
        + 高效数据刷新
        + 处理重复数据项
    + 缺点
        + 不映射数据项顺序调整
        + 不同步临时状态及组件私有状态

+ __v-on:event(param, $event).modifier / @event(param, $event).modifier__
+ __v-ref:id__

    ```html
    <div id="parent">
      <profile v-ref:profile></profile>
    </div>
    ```
    ```javascript
    var parent = new Vue({ el: '#parent' })
    var child = parent.$refs.profile
    ```

*****

### 数据绑定 ###
+ {{_}}
+ {{*_}} (单次插值)
+ {{{_}}}

#### 过滤器 ####

*****

### 实例 ###
+ 构造器

    ```javascript
    var vm = new Vue({})
    ```
    ```javascript
    var Component = Vue.extend({})
    var instance = new Component()
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
    })
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
                    return this.firstime + ' ' + this.lastName
                },
                set: function (value) {
                    var tmp = value.split(' ')
                    this.firstName = tmp[0]
                    this.lastName = tmp[1]
                }
            }
        }
    })

    console.log(vm.fullName) // -> 'Sun Mengyuan'
 
    vm.fullName = 'Sun My'
    console.log(vm.firstName) // -> 'Sun'
    console.log(vm.lastName) // -> 'My'
    ```

*****

### 过渡 ###

+ __css 过渡__

    ```html
    <div v-if="show" transition="trans"></div>
    ```

    默认

    ```css
    .trans-transition {
        transition: all 5s ease;
        height: 100px;
        background-color: #999;
    }

    /* enter 起始状态 */
    .trans-enter {
        height: 0;
        background-color: red;
    }
    /* leave 结束状态 */
    .trans-leave {
        height: 0;
        background-color: green;
    }
    ```

    自定义

    ```javascript
    Vue.transition('trans', {
        enterClass: 'transEnter',
        leaveClass: 'transLeave'
    })
    ```
+ __javascript 过渡__

    ```javascript
    Vue.transition('bounce', {
        css: false,

        beforeEnter: function (el) {},
        enter: function (el, done) {},
        afterEnter: function (el) {},
        enterCancelled: function (el) {},
        beforeLeave: function (el) {},
        leave: function (el, done) {},
        afterLeave: function (el) {},
        leaveCancelled: function (el) {}
    })
    ```
+ __渐近过渡__

    ```html
    <input v-model="filter">
    <ul>
        <li v-for="item in items | filterBy filter" transition="trans" stagger="100">{{ item.user }}</li>
    </ul>
    ```
    ```css
    .trans-transition {
        transition: all .5s ease;
        opacity: 1.0;
        height: 20px;
    }
    .trans-enter, .trans-leave {
        opacity: 0;
        height: 0;
    }
    ```
    ```javascript
    export default {
        data () {
            return {
                filter: '',
                items: [
                    { user: 'Bruce Lee' },
                    { user: 'Jackie Chan' },
                    { user: 'Chuck Norris' },
                    { user: 'Jet Li' }
                ]
            }
        }
    }
    ```

*****

### 组件 ###
+ __数据传递__

    父级
    
    ```html
    <ul>
        <li is="child" v-for="user in users" :user="user"></li>
    </ul>
    ```
    ```javascript
    import Child from './Child'

    export default {
        data () {
            return {
                users: [
                    {
                        skills: [
                            {
                                name: 'svg',
                                level: 3
                            },
                            {
                                name: 'canvas',
                                level: 5
                            }
                        ],
                        seniority: 1
                    },
                    {
                        skills: [
                            {
                                name: 'node.js',
                                level: 4
                            },
                            {
                                name: 'vue.js',
                                level: 3
                            }
                        ],
                        seniority: 3
                    }
                ]
            }
        },
        components: {
            Child
        }
    }
    ```

    子级

    ```html
    <ul>
        <template v-for="skill in user.skills">
            <li>
                <div>{{ skill.name }}</div>
                <div>{{ skill.level }}</div>
            </li>
        </template>
    </ul>
    <div>{{ user.seniority }}</div>
    ```
    ```javascript
    export default {
        props: {
            user: 'user'
        }
    }
    ```
+ __组件通信__

    + $on() 监听事件
    + $emit() 触发事件
    + $dispatch() 派发事件
    + $broadcast() 广播事件

    父级

    ```html
    <ul>
        <li
            is="child"
            v-for="item in news"
            :news="item"
            @news="publish">
        </li>
    </ul>
    ```
    ```javascript
    import Child from './Child'

    export default {
        data () {
            return {
                news: [
                    'news 1',
                    'news 2',
                    'news 3'
                ]
            }
        },
        components: {
            Child
        },
        methods: {
            publish: function (news) {
                console.log(news)
            }
        }
    }
    ```
    
    子级
    
    ```html
    <li @click="sendnews(news)">{{ news }}</li>
    ```
    ```javascript
    export default {
        props: {
            news: 'news'
        },
        methods: {
            sendnews: function (news) {
                this.$dispatch('news', news)
            }
        }
    }
    ```
+ __内容分发__

    父级

    ```html
    <child>
        <div slot="first">first</div>
        <div slot="second">second</div>
    </child>
    ```

    子级

    ```html
    <slot name="first"></slot>
    <slot name="second"></slot>
    <slot>default</slot>
    ```

    -> 等效于
    ```html
    <div slot="first">first</div>
    <div slot="second">second</div>
    "default"
    ```