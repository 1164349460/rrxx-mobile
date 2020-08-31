// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//注册vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
Vue.use(Vant);

import store from './store/index.js'
Vue.config.productionTip = false


//全局绑定storage
import storage from './utils/cookie'
Vue.prototype.$storage = storage

// 时间处理
import "@/utils/filter" //过滤函数

// 自定义指令
import './utils/directive'


import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
