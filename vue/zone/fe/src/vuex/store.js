import Vue from 'vue'
import Vuex from 'vuex'
import constant from './modules/constant'
import log from './modules/log'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        constant,
        log
    }
})
