import Vue from 'vue'
import Vuex from 'vuex'
import constant from './modules/constant'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        constant
    }
})
