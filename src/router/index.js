import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/401',
            component: require('@/components/401')
        },
        {
            path: '/403',
            component: require('@/components/403')
        },
        {
            path: '/404',
            components: require('@/components/404')
        }
    ]
})
