import Vue from 'vue'
import elementUI from 'element-ui'//按需引入
import 'element-ui/lib/theme-chalk/index.css'//全局引用时需要引入
Vue.use(elementUI)
console.log(elementUI)
//Vue.component(elementUI.Button,elementUI.Card)