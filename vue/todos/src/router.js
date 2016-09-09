import Vue from 'vue'
import Router from 'vue-router'
import Base from './views/Base'
import All from './views/All'
import Active from './views/Active'
import Completed from './views/Completed'

Vue.use(Router)
const router = new Router({
    linkActiveClass: 'active'
})

router.map({
    '/': {
        component: Base,

        subRoutes: {
            '/': {
                component: All
            },
            '/all': {
                component: All
            },
            '/active': {
                component: Active
            },
            '/completed': {
                component: Completed
            }
        }
    }
})

router.redirect({
    '*': '/'
})

export default router
