import $http from '@/http'

const state = {
    
}

const getters = {
}

const actions = {
    async testNormal() {
        return $http.post('normal')
    },
    async testSlow() {
        return $http.post('slow')
    },
    async testErrorData() {
        return $http.post('error-data')
    },
    async testErrorCode() {
        return $http.post('error-code')
    },
    async testCode403() {
        return $http.post('code-403')
    },
    async testCode401() {
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
