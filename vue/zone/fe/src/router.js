import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './views/HomePage'
import Register from './views/Register'
import Profile from './views/Profile'
import ArticleDetail from './views/ArticleDetail'

Vue.use(Router)
const router = new Router()

router.map({
    '/': {
        component: HomePage
    },
    '/register': {
        component: Register
    },
    '/profile/:id': {
        component: Profile
    },
    '/article/:id': {
        component: ArticleDetail
    }
})

router.redirect({
    '*': '/'
})

export default router
