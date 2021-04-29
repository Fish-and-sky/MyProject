import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios'
import qs from 'qs'
import $ from 'jquery'
import './assets/css/Clobal.css'
import 'swiper/swiper-bundle.css';
import BaiduMap from 'vue-baidu-map'
import address from './api/services/address'

Vue.use(ElementUI);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'u5YcIHzAig4UgH2dmPoQ1wgbFI89gfVb'
})
// axios.defaults.baseURL = 'http://192.168.2.121:8002/api';
axios.defaults.baseURL = address.host;
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false;

Vue.filter('ellipsis', (value, num) => {
  const nums = num || '5';// 设置限定字数,默认为5
  if (!value) return '';
  if (value.length > nums) {
    return value.slice(0, nums) + '';
  }
  return value;
});
Vue.filter('ellipsi', (value, num) => {
  const nums = num || '5';// 设置限定字数,默认为5
  if (!value) return '';
  if (value.length > nums) {
    return value.slice(0, nums) + '...';
  }
  return value;
});

// 不兼容history中根据页面滚动出现动画效果 
//页面跳转后自动跳转到顶部
// router.beforeEach((to, from, next) => {    
//   // chrome兼容
//   document.body.scrollTop = 0
//   // firefox兼容
//   document.documentElement.scrollTop = 0
//   // safari兼容
//   window.pageYOffset = 0
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/*
npm install sass-loader node-sass --save-dev
npm install -D stylus-loader stylus
npm i markdown-loader html-loader marked --save
npm install axios
npm i qs
npm install animate.css --save
npm install vue-baidu-map --save
import $ from 'jquery'
npm install downloadjs

页面跳转传值
this.$router.push({ name: 'orderList', params: { conlltion: id }})	// 只能用 name
// html 取值  
$route.params.conlltion
// script 取值  
this.$route.params.conlltion

地址栏带信息跳转
this.$router.push({path:'/orderList',query: {conlltion: id }})
// html取值 
$route.query.conlltion
// script取值 
this.$route.query.conlltion

存
sessionStorage.setItem("key", "value");
取
var lastname = sessionStorage.getItem("key");
*/