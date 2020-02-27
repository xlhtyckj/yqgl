// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import MyHttpServer from '@/plugins/http.js'
import moment from 'moment'
//回顾
// import axios from 'axios'
// Vue.prototype.$http=axios
// Vue.use(axios)

//添加过滤器 时间过滤器 moment 
Vue.filter('fmtdate', (v) => {
    return moment(v).format('YYYY-MM-DD hh:mm:ss')
})

Vue.use(ElementUI)
Vue.use(MyHttpServer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})