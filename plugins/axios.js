import Vue from 'vue'
import axios from 'axios'
const service = axios.create({
    baseURL: 'process.env._ENV == "production" ? "http://localhost:3000/api" : "http://localhost:3000/api"'
})
Vue.prototype.$ajax = axios
export default service