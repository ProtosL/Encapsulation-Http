import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import testApi from './api/testApi.js'

export default new Vuex.Store({
    modules: {
        testApi
    }
})
