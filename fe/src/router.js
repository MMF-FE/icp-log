"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const vue_router_1 = require("vue-router");
const Home_vue_1 = require("./views/Home.vue");
const Login_vue_1 = require("./views/Login.vue");
const MemberLog_vue_1 = require("./views/MemberLog.vue");
const Keyword_vue_1 = require("./views/Keyword.vue");
const api_1 = require("./api");
vue_1.default.use(vue_router_1.default);
const router = new vue_router_1.default({
    //   mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home_vue_1.default,
        },
        {
            path: '/member/log',
            name: 'memberLog',
            component: MemberLog_vue_1.default,
        },
        {
            path: '/keyword',
            name: 'keyword',
            component: Keyword_vue_1.default,
        },
        {
            path: '/login',
            name: 'login',
            component: Login_vue_1.default
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});
// @ts-ignore
router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !api_1.isLogin()) {
        next({
            name: 'login'
        });
    }
    else {
        next();
    }
});
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXFCO0FBQ3JCLDJDQUErQjtBQUMvQiwrQ0FBbUM7QUFDbkMsaURBQXFDO0FBQ3JDLHlEQUE2QztBQUM3QyxxREFBeUM7QUFDekMsK0JBQStCO0FBRS9CLGFBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQU0sQ0FBQyxDQUFBO0FBRWYsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBTSxDQUFDO0lBQ3RCLHFCQUFxQjtJQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRO0lBQzFCLE1BQU0sRUFBRTtRQUNKO1lBQ0ksSUFBSSxFQUFFLEdBQUc7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLFNBQVMsRUFBRSxrQkFBSTtTQUNsQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLGFBQWE7WUFDbkIsSUFBSSxFQUFFLFdBQVc7WUFDakIsU0FBUyxFQUFFLHVCQUFTO1NBQ3ZCO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBRSxxQkFBTztTQUNyQjtRQUNEO1lBQ0ksSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsT0FBTztZQUNiLFNBQVMsRUFBRSxtQkFBSztZQUNoQiw2QkFBNkI7WUFDN0IsbUVBQW1FO1lBQ25FLGtEQUFrRDtZQUNsRCxnRkFBZ0Y7U0FDbkY7S0FDSjtDQUNKLENBQUMsQ0FBQTtBQUVGLGFBQWE7QUFDYixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNqQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsYUFBTyxFQUFFLEVBQUU7UUFDbkMsSUFBSSxDQUFDO1lBQ0QsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFBO0tBQ0w7U0FBTTtRQUNILElBQUksRUFBRSxDQUFBO0tBQ1Q7QUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLE1BQU0sQ0FBQSJ9