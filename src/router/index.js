import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
//@会默认导航到src目录



Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'login',
      path: '/login',
      component:Login
    }
  ]
})
