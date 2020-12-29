// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.use(Vuex)
// require('../static/js/404.js')

// const store = new Vuex.Store({
//   state: {
//     allList:[],
//     search:''
//   },
//   mutations: {
  
//   }
// })

// 自定义过滤器
Vue.filter("formatDate", function(value){
  var dateset = new Date(value.replace(/-/g, "/"));
  var datenow = new Date();
  return datenow
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
