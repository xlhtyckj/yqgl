//插件模块
import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = (Vue, options) => {
    Vue.prototype.$http = axios
}

export default MyHttpServer