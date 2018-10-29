/**
 * api
 * @author vfasky<vfasky@gmail.com>
 **/
import env from 'env'

export function getToken() {
    return localStorage.getItem(env.storeKey + 'token')
}

export function setToken(token: string) {
    return localStorage.setItem(env.storeKey + 'token', token)
}

export function isLogin() {
    return getToken() ? true : false
}

export interface LoginReq {
    name: string
    password: string
}


export default {

    login(data: LoginReq) {
        return fetch(`${env.api.host}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(v => v.json())
    }

}