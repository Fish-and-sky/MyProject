import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/Global.css'
import $ from 'jquery'
import axios from 'axios'
import qs from 'qs'
import 'swiper/swiper-bundle.css';
import VueLazyload from 'vue-lazyload'
import Velocity from 'velocity-animate'
import BaiduMap from 'vue-baidu-map'

Vue.use(VueLazyload);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'u5YcIHzAig4UgH2dmPoQ1wgbFI89gfVb'
})
Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://192.168.2.117:8001/api';
axios.defaults.headers.post['Content-Type'] = 'text/plain';
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

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


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*
npm install element-ui --save
npm i markdown-loader html-loader marked --save
npm install axios
npm i qs
npm install lib-flexible --save-dev 以卸
npm i postcss-px2rem --save 以卸
npm install markdown-it-vue
npm i swiper
npm install vue-lazyload --save
npm install velocity-animate@beta
npm install vue-baidu-map --save

npm uninstall xxx 卸载依赖

headers配置 application/json
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
*/
