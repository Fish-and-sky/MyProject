import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import test from '../views/test/test.vue'
import test2 from '../views/test/test2.vue'
import homepage from '../views/homepage/homepage.vue'
import product from '../views/product/product.vue'
import productcontent from '../views/product/product-content/product-content.vue'
import solution from '../views/Solution/Solution.vue'
import solutiondetails from "../views/Solution/Solution-details/Solution-details.vue"
import profile from "../views/about-us/profile/profile.vue"
import history from "../views/about-us/history/history.vue"
import sustainable from "../views/about-us/sustainable/sustainable.vue"
import concept from "../views/Join-us/concept/concept.vue"
import staff from "../views/Join-us/staff/staff.vue"
import consulting from "../views/consulting/consulting.vue"
import search from "../views/search/search.vue"
import Websitemap from "../views/homepage/Websitemap/Websitemap.vue"
import newdetails from "../views/News/newdetails.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:'/homepage',
    name:'homepage',
    component:homepage
  },
  {
    path: '/',
    //重定向到/homepage页面
    redirect:'/homepage'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component:product,
  },
  {
    path: '/product/content',
    name: 'productcontent',
    component: productcontent
  },
  {
    path: '/solution',
    name: 'solution',
    component: solution
  },
  {
    path: '/solution/details',
    name: 'solutiondetails',
    component: solutiondetails
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/history',
    name: 'history',
    component: history
  },
  {
    path: '/sustainable',
    name: 'sustainable',
    component: sustainable
  },
  {
    path: '/join_us/concept',
    name: 'concept',
    component: concept
  },
  {
    path: '/join_us/staff',
    name: 'staff',
    component: staff
  },
  {
    path: '/consulting',
    name: 'consulting',
    component: consulting
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/Websitemap',
    name: 'Websitemap',
    component: Websitemap
  },
  {
    path: '/newdetails',
    name: 'new-details',
    component: newdetails
  },
  {
    path: '/test',
    name: 'test',
    component:test
  },
  {
    path: '/test2',
    name: 'test2',
    component:test2
  }
]

const router = new VueRouter({
  routes
})

//解决重复点击同一个路由报错问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
