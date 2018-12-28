import $http from '@/http'

const state = {
    
}

const getters = {
}

const actions = {
    testNormal () {
        return $http.post('normal')
    },
    testSlow () {
        return $http.post('slow')
    },
    testErrorData () {
        return $http.post('error-data')
    },
    testErrorCode () {
        return $http.post('error-code')
    },
    testCode403 () {
        return $http.post('code-403')
    },
    testCode401 () {
        return $http.post('code-401')
    }
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
