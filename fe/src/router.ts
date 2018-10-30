import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import MemberLog from './views/MemberLog.vue'
import Keyword from './views/Keyword.vue'
import { isLogin } from './api'

Vue.use(Router)

const router = new Router({
    //   mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/member/log',
            name: 'memberLog',
            component: MemberLog,
        },
        {
            path: '/keyword',
            name: 'keyword',
            component: Keyword,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
})

// @ts-ignore
router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !isLogin()) {
        next({
            name: 'login'
        })
    } else {
        next()
    }
})

export default router