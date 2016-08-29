## [vuex](http://vuex.vuejs.org/zh-cn/index.html) ##

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始状态
const state = {}
// 状态变更函数
const mutations = {}

export default new Vuex.Store({
    state,
    mutations
})
```