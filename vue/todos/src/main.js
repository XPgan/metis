import {sync} from 'vuex-router-sync'
import store from './vuex/store'
import router from './router'
import App from './App'

sync(store, router)

router.start(App, '#app')
