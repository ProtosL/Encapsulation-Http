import vue from 'vue'
import axios from 'axios'

function cancelRequest (config) {
    const index = requestQueue.findIndex(({requestId}) => requestId === config.method + config.baseURL + config.url)
    if (index !== -1) {
        requestQueue[index].c('cancel')
        requestQueue.splice(index, 1)
    }
}

const _axios = axios.create({
    baseURL: 'http://localhost:3000/'
})

let requestQueue = []
const CancelToken = axios.CancelToken;

function setCancelToken (config) {
    config.cancelToken = new CancelToken(function (c) {
        requestQueue.push({
            requestId: config.method + config.baseURL + config.url,
            c
        })
    })
}

function removeQueue (config) {
    let index = requestQueue.findIndex(({requestId}) => requestId === config.method + config.url)
    requestQueue.splice(index, 1)
}

_axios.interceptors.request.use(config => {
    // Do something before request is sent
    cancelRequest(config)
    setCancelToken(config)
    return config
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

_axios.interceptors.response.use(response => {
    removeQueue(response.config)
    if (!response.data.result) {
        return Promise.reject(response.data['error_msg'])
    }
    return response.data.data
}, error => {
    if (error.response) {
        removeQueue(error.response.config)
    }
    return Promise.reject(error);
})

export default _axios