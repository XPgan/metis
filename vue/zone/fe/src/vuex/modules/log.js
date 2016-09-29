import {LOGIN, EXIT} from '../mutation-types'

const state = {
    user: ''
}
const mutations = {
    [LOGIN] (state, id) {
        state.user = id
    },
    [EXIT] (state) {
        state.user = ''
    }
}

export default {
    state,
    mutations
}

