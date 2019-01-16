<template>
    <div>
        <Logo></Logo>
        这是订单页面
        {{$store.state.userId}}
        <div class="container">
            <p>这是内容</p>
        </div>   
    </div>
</template>
<script>
import axios from 'axios'
import Logo from '~/components/Logo.vue'
export default {
    mounted() {
       const arr = this.$integerSort([6,3,9,1,7])
       console.log(arr)
    },
    components: {
        Logo
    },
    head() {
        return {
            title: '订单'
        }
    },
    async fetch ({app,store,params}) {
        let {data} = axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log(res.data[0])
            store.commit('setUserId',res.data[0].userId)
        })
    } 
}

</script>
<style lang="scss" scoped>
    .container {
        width: 200px;
        height: 200px;
        p {
            font-size: 30px;
        }
    }
</style>


