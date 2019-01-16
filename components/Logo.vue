<template>
  <div class="headerTop">
      <div class="welcome">welcome</div>
      <ul>
          <li><nuxt-link to="/home">首页</nuxt-link></li>
          <li><nuxt-link to="/goods">学习</nuxt-link></li>
          <li><nuxt-link to="/order">文摘</nuxt-link></li>
          <li><nuxt-link to="/order">关于</nuxt-link></li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
      return {
          list: [
              {
                  name: '首页',
                  id: '001'
              }, {
                  name: '商品',
                  id: '002'
              },{
                  name: '代理',
                  id: '003'
              }
          ]
      }
  }
}
</script>


<script>
export default {

}
</script>

<style>
li {
    list-style: none;
    text-decoration: none;
}
.welcome {
    flex: 1;
}
.headerTop {
    display: flex;
    height: 40px;
    line-height: 40px;
    background: green;
}
.headerTop li {
    float: left;
    padding: 0 10px;
    text-align: center;
    color: #fff;
}
.headerTop li a {
    color: #fff;
    text-decoration: none;
}
</style>

