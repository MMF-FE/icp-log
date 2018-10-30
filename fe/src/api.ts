/**
 * api
 * @author vfasky<vfasky@gmail.com>
 **/
import env from 'env'
import Vue from 'vue'

export function getToken() {
    return localStorage.getItem(env.storeKey + 'token')
}

export function setToken(token: string) {
    return localStorage.setItem(env.storeKey + 'token', token)
}

export function setUser(user?: User) {
    if (!user) {
        localStorage.removeItem(env.storeKey + 'token')
        localStorage.removeItem(env.storeKey + 'user')
        return
    }
    if (user.token) {
        setToken(user.token)
    }
    return localStorage.setItem(env.storeKey + 'user', JSON.stringify(user))
}

export function getUser() {
    let user = localStorage.getItem(env.storeKey + 'user')
    if (!user) {
        return null
    }
    return JSON.parse(user)
}

export function isLogin() {
    return getToken() ? true : false
}

export interface LoginReq {
    name: string
    password: string
}

export interface User {
    id: number
    name: string
    token: string
}

export interface MemberLog {
    account: string
    email: string
    id: number
    ip: string
    loginDateTime: string
    name: string
}

export interface Keyword {
    id: number
    keyword: string
    creatDate: string
}

export interface KeywordReq {
    keyword: string
}

export async function base<T>(url: string, options: RequestInit & {
    data?: {
        [key: string]: any
    }
}) {
    let token = getToken()

    if (options.data) {
        if (options.method === 'POST') {
            options.body = JSON.stringify(options.data)
        }
        delete options.data
    }
    // @ts-ignore
    let res = await fetch(`${env.api.host}${url}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': token
        },
        ...options,
    // @ts-ignore
    }).then(v => v.json()) as T & {
        success: boolean
        msg?: string
    }

    if (!res.success) {
        let msg = res.msg || '未知错误'
        Vue.prototype.$notify.error({
            title: '发生错误了',
            message: msg
        })
        return Promise.reject(msg)
    }

    return res
}

export default {

    login(data: LoginReq) {
        return base<User>('/login', {
            method: 'POST',
            data
        })
    },

    async memberLog() {
        let res = await base<{ data: MemberLog[] }>('/member/log', {
            method: 'GET'
        })
        return res.data
    },

    async keyword() {
        let res = await base<{ data: Keyword[] }>('/ignore/keyword', {
            method: 'GET'
        })
        return res.data
    },

    addKeyword(data: KeywordReq) {
        return base('/ignore/keyword', {
            method: 'POST',
            data
        })
    }
}