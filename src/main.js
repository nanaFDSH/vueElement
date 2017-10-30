// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 路由 本地存储 vuex
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'

// 引用element ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 图标
import 'font-awesome/css/font-awesome.min.css'
// 可以改变图标名称
// import './assets/css/style.less'

// 调用
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

// 引用API文件
// import api from './api/index.js'

// 将API方法绑定到全局
// Vue.prototype.$api = api
// Vue.config.productionTip = false

import Mock from './mock'
Mock.bootstrap()  // 使用虚拟数据

// 登陆判断
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = JSON.parse(sessionStorage.getItem('user'))
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
