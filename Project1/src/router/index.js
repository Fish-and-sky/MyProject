import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import test from '../views/wlw/test/test.vue'
import test2 from '../views/wlw/test/test2.vue' 
import theindex from '../views/wlw/homePage/theindex.vue'
import whole from '../components/whole.vue'
import recruit from '../views/wlw/recruit/recruit.vue'
import xwhd from '../views/wlw/news/xwhd.vue'
import xwhdinside from '../views/wlw/news/xwhdinside.vue'
import theabout from '../views/wlw/about/about.vue'
import product from '../views/wlw/product/product.vue'
import prodetails from '../views/wlw/product/prodetails.vue'
import index from '../views/wlw2/homepage/index/index.vue'
import product_system from '../views/wlw2/product/product-system/product-system.vue'
import product_hard from '../views/wlw2/product/product-hard/product-hard.vue'
import product_soft from '../views/wlw2/product/product-soft/product-soft.vue'
import project from '../views/wlw2/project/project.vue'
import details from '../views/wlw2/project/project-detail/project-detail.vue'
import skill_file from '../views/wlw2/file/skill_file.vue'
import new_file from '../views/wlw2/file/new_file.vue'
import fileinside from '../views/wlw2/file/fileinside.vue'
import AboutUs from '../views/wlw2/about/aboutUs.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/theindex',
    name: 'theindex',
    meta:{
      keepAlive:true
    },
    component: theindex
  },
  {
    path: '/',
    //重定向到/theindex页面
    redirect:'/theindex'
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
    path: '/test',
    name: 'test',
    component: test
  },
  
  {
    path: '/test2',
    name: 'test2',
    component: test2
  },
  {
    path: '/whole',
    name: 'whole',
    component: whole
  },
  {
    path:'/recruit',
    name:'recruit',
    meta:{
      keepAlive:true
    },
    component: recruit
  },
  {
    path:'/xwhd',
    name:'xwhd',
    meta:{
      keepAlive:true
    },
    component: xwhd
  },
  {
    path:'/xwhdinside',
    name:'xwhdinside',
    meta:{
      keepAlive:false
    },
    component:xwhdinside
  },
  {
    path:'/theabout',
    name:'theabout',
    meta:{
      keepAlive:false
    },
    component:theabout
  },
  {
    path:'/product',
    name:'product',
    meta:{
      keepAlive:true
    },
    component:product
  },
  {
    path:'/prodetails',
    name:'prodetails',
    component:prodetails
  },
  {
    path:'/index',
    name:'index',
    component:index
  },
  {
    path:'/product_system',
    name:'product_system',
    component:product_system
  },
  {
    path:'/product_hard',
    name:'product_hard',
    component:product_hard
  },
  {
    path:'/product_soft',
    name:'product_soft',
    component:product_soft
  },
  {
    path:'/project',
    name:'project',
    component:project
  },
  {
    path:'/project/details',
    name:'project_details',
    component:details
  },
  {
    path:'/file/skill',
    name:'skill_file',
    component:skill_file
  },
  {
    path:'/file/new',
    name:'new_file',
    component:new_file
  },
  {
    path:'/file/inside',
    name:'fileinside',
    component:fileinside
  },
  {
    path:'/aboutus',
    name:'aboutus',
    component:AboutUs
  }
]

const router = new VueRouter({
  routes
})


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
