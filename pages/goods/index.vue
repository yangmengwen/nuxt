<template>
    <div>
        <Logo></Logo>
        <ul>
            <li v-for="item in list" :key="item.name">
                
                <nuxt-link :to="'/user/'+item.id">商品名称：{{item.name}} - 价格：{{item.price}}</nuxt-link>
            </li>
        </ul>
        
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
    data() {
        return {
            list: [
                {
                    name: 'iphone6',
                    price: '3000',
                    id: '001'
                },{
                    name: 'iphone7',
                    price: '4000',
                    id: '002'
                },
                {
                    name: 'iphone8',
                    price: '5000',
                    id: '003'
                }
            ]
        }
    },
    components: {
        Logo
    }
}
</script>
<style>
    li {
        list-style: none;
    }
</style>


