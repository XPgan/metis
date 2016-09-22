import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/HomePage'

Vue.use(Router)
const router = new Router()

router.map({
    '/': {
        component: HomePage
    }
})

router.redirect({
    '*': '/'
})

export default router
