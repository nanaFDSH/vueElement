import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Index from '../components/Index.vue'

// 导航栏
import Table from '../components/nav1/Table.vue'
import Form from '../components/nav1/Form.vue'
import user from '../components/nav1/user.vue'
import Page4 from '../components/nav2/Page4.vue'
import Page5 from '../components/nav2/Page5.vue'
import Page6 from '../components/nav3/Page6.vue'
import Page7 from '../components/nav4/Page7.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden: true   // 不在导航中显示
    },
    {
      path: '/',
      component: Home,
      name: '首页',
      iconCls: 'fa fa-tasks',
      leaf: true, // 只有一个节点
      children: [
        { path: '/index', component: Index, name: '首页' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'fa fa-television', // 图标样式class
      children: [
        {path: '/table', component: Table, name: '页面1'},
        {path: '/form', component: Form, name: '页面2'},
        {path: '/user', component: user, name: '页面3'}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'fa fa-id-card-o',
      children: [
        {path: '/page4', component: Page4, name: '页面4'},
        {path: '/page5', component: Page5, name: '页面5'}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航三',
      iconCls: 'fa fa-address-card',
      // leaf: true, //只有一个节点
      children: [
        {path: '/page6', component: Page6, name: '页面6'}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航四',
      iconCls: 'fa fa-bar-chart',
      children: [
        {path: '/Page7', component: Page7, name: 'Page7'}
      ]
    }
  ]
})
