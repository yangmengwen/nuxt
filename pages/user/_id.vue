<template>
    <div>
        <p>这是商品{{$route.params.id}}</p>
        
        <div v-for="item in detail" :key="item.price"><p>{{item.title}}</p><p>{{item.body}}</p></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    // data() {
    //     return axios.get('/api')
    //     .then((res)=>{
    //         console.log(res.data)
    //         return {products: res.data}
    //     })
    // }
    // fetch({app}) {
    //     console.log(app.$axios)
    // },
    // ansyncData({app}) {
    //     console.log(app.$axios)
    // }
    // async ansyncData() {
    //     let {data} = await axios.get('/article/getFrontArticleList')
    //     console.log(data)
    // }
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

