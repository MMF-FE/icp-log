"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * api
 * @author vfasky<vfasky@gmail.com>
 **/
const env_1 = require("env");
const vue_1 = require("vue");
function getToken() {
    return localStorage.getItem(env_1.default.storeKey + 'token');
}
exports.getToken = getToken;
function setToken(token) {
    return localStorage.setItem(env_1.default.storeKey + 'token', token);
}
exports.setToken = setToken;
function setUser(user) {
    if (!user) {
        localStorage.removeItem(env_1.default.storeKey + 'token');
        localStorage.removeItem(env_1.default.storeKey + 'user');
        return;
    }
    if (user.token) {
        setToken(user.token);
    }
    return localStorage.setItem(env_1.default.storeKey + 'user', JSON.stringify(user));
}
exports.setUser = setUser;
function getUser() {
    let user = localStorage.getItem(env_1.default.storeKey + 'user');
    if (!user) {
        return null;
    }
    return JSON.parse(user);
}
exports.getUser = getUser;
function isLogin() {
    return getToken() ? true : false;
}
exports.isLogin = isLogin;
async function base(url, options) {
    let token = getToken();
    if (options.data) {
        if (options.method === 'POST') {
            options.body = JSON.stringify(options.data);
        }
        delete options.data;
    }
    // @ts-ignore
    let res = await fetch(`${env_1.default.api.host}${url}`, Object.assign({ headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': token
        } }, options)).then(v => v.json());
    if (!res.success) {
        let msg = res.msg || '未知错误';
        vue_1.default.prototype.$notify.error({
            title: '发生错误了',
            message: msg
        });
        return Promise.reject(msg);
    }
    return res;
}
exports.base = base;
exports.default = {
    login(data) {
        return base('/login', {
            method: 'POST',
            data
        });
    },
    async memberLog() {
        let res = await base('/member/log', {
            method: 'GET'
        });
        return res.data;
    },
    async keyword() {
        let res = await base('/ignore/keyword', {
            method: 'GET'
        });
        return res.data;
    },
    addKeyword(data) {
        return base('/ignore/keyword', {
            method: 'POST',
            data
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7OztJQUdJO0FBQ0osNkJBQXFCO0FBQ3JCLDZCQUFxQjtBQUVyQixTQUFnQixRQUFRO0lBQ3BCLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFBO0FBQ3ZELENBQUM7QUFGRCw0QkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxLQUFhO0lBQ2xDLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUM5RCxDQUFDO0FBRkQsNEJBRUM7QUFFRCxTQUFnQixPQUFPLENBQUMsSUFBVztJQUMvQixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFBO1FBQy9DLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQTtRQUM5QyxPQUFNO0tBQ1Q7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3ZCO0lBQ0QsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUM1RSxDQUFDO0FBVkQsMEJBVUM7QUFFRCxTQUFnQixPQUFPO0lBQ25CLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQTtJQUN0RCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsT0FBTyxJQUFJLENBQUE7S0FDZDtJQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMzQixDQUFDO0FBTkQsMEJBTUM7QUFFRCxTQUFnQixPQUFPO0lBQ25CLE9BQU8sUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0FBQ3BDLENBQUM7QUFGRCwwQkFFQztBQWdDTSxLQUFLLFVBQVUsSUFBSSxDQUFJLEdBQVcsRUFBRSxPQUkxQztJQUNHLElBQUksS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFBO0lBRXRCLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtRQUNkLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUM5QztRQUNELE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQTtLQUN0QjtJQUNELGFBQWE7SUFDYixJQUFJLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLGFBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxrQkFDekMsT0FBTyxFQUFFO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLElBQ0UsT0FBTyxFQUVaLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUdwQixDQUFBO0lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7UUFDZCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQTtRQUMzQixhQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDeEIsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsR0FBRztTQUNmLENBQUMsQ0FBQTtRQUNGLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUM3QjtJQUVELE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQztBQXJDRCxvQkFxQ0M7QUFFRCxrQkFBZTtJQUVYLEtBQUssQ0FBQyxJQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFPLFFBQVEsRUFBRTtZQUN4QixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUk7U0FDUCxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLFNBQVM7UUFDWCxJQUFJLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBd0IsYUFBYSxFQUFFO1lBQ3ZELE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQTtJQUNuQixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU87UUFDVCxJQUFJLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBc0IsaUJBQWlCLEVBQUU7WUFDekQsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBQ25CLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJO1NBQ1AsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKLENBQUEifQ==