## [vuex](https://github.com/vuejs/vuex) ##

```
├── App.vue
│
├── main.js
│
├── components
│   │
│   └── Cart.vue
│
└── vuex
    │
    ├── store.js
    │
    ├── actions.js
    │
    ├── mutation-types.js
    │
    └── modules
        │
        └── products.js
```

Cart.vue
```html
<template>
    <ul>
        <li v-for="item in items">{{ item.title }}</li>
    </ul>
    <button @click="checkout(item)"></button>
</template>
<script>
    import {checkout} from '../vuex/actions'
    
    export default {
        vuex: {
            getters: {
                items: ({products}) => products.all
            },
            actions: {
                checkout
            }
        }
    }
</script>
```

store.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products
    }
})
```

actions.js
```javascript
import * as types from './mutation-types'

export const checkout = ({dispatch, store}, item) => {
    const items = store.products.all
    items[item.id] || dispatch(types.ADD_PRODUCT, item)
}
```

mutation-types.js
```javascript
export const ADD_PRODUCT = 'ADD_PRODUCT'
```

products.js
```javascript
import {ADD_PRODUCT} from '../mutation-types'

const state = {
    all: {}
}

const mutations = {
    [ADD_PRODUCT] (state, item) {
        state.all[item.id] = item
    }
}

export default {
    state,
    mutations
}
```