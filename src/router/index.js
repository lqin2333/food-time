import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
import Search from "../pages/Search/Search.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Login from "../pages/Login/Login.vue";


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: "/home", component: Home, meta: { showInFooter: true } },
        { path: "/search", component: Search, meta: { showInFooter: true } },
        { path: "/order", component: Order, meta: { showInFooter: true } },
        { path: "/profile", component: Profile, meta: { showInFooter: true } },
        { path: "/", redirect: "/home" },
        { path: "/login", component: Login },
    ]
});
