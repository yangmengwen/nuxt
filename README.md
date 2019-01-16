# nuxt框架探索

> My solid Nuxt.js project

## Build Setup
``` bash
# pages目录讲解
$ pages目录下的页面和vue页面一样，不过路由不需要单独定义，只需要创建对应名称的目录即可，在需要跳转页面的时候使用
eg: <nuxt-link :to="'/user/'+item.id">商品名称：{{item.name}} - 价格：{{item.price}}</nuxt-link>

# plugins目录讲解
$ 安装elementUI 1、npm i element-ui -S 2、在plugins目录下创建elementUI.js文件 3、在pages目录下的页面中直接使用插件 4、在nuxt.config.js文件中添加配置
``` bash
import Vue from 'vue'
import elementUI from 'element-ui'//按需引入
import 'element-ui/lib/theme-chalk/index.css'//全局引用时需要引入
Vue.use(elementUI)
```
``` bash
<template>
  <div>
    <el-submenu index="1"><el-submenu>
  </div>
</template>
```
``` bash
plugins: [
  {src: '~/plugins/elementUI.js', ssr:true}//ssr是设置是否在服务端渲染
],
build: {
  vendor: ['element-ui']
}

```

``` bash
# axios安装及使用
$ npm install @nuxtjs/axios @nuxtjs/proxy --save
$ nuxt.config.js中设置
mode: ['@nuxtjs/axios','@nuxtjs/proxy'],
axios: {
    proxy:true,
    prefix: '/api',
    credentials: true
  },
  proxy: [
    ['/api',{
      target:'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {'^/api/': '/'}
    }],
    ['/images',{target:'http://localhost:3000'}],//将图片代理到本地

  ]
$ pages页面中使用axios
<script>
import axios from 'axios'
export default {
    asyncData() {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res)
            return {
                detail:res.data
            }
        })
    }
}
</script>
```
#

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```


For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
