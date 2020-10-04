import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import("../views/home/Home.vue");
const category = () => import("../views/category/Category.vue");
const shopcart = () => import("../views/shopcart/ShopCart.vue");
const profile = () => import("../views/profile/Profile.vue");

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/profile',
    component: profile
  },
]

export default new Router({
  routes,
  mode: "history"
})
