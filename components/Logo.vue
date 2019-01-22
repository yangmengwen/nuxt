<template>
  <div class="headerTop">
      <div class="welcome">welcome to my blog</div>
      <ul>
          <li><nuxt-link to="/home">首页</nuxt-link></li>
          <li><nuxt-link to="/order">学习</nuxt-link></li>
          <li @click="show()"><nuxt-link to="">登录</nuxt-link></li>
      </ul>
      <el-dialog :visible="dialogVisible" width="80%">
          <p><span>用户名：</span><el-input type="text" placeholder="请输入您的用户名" v-model="username"></el-input></p>
          <p><span>密码：</span><el-input type="password" placeholder="请输入您的密码" v-model="pwd"></el-input></p>
          <div class="dialog-footer">
              <el-button @click="dialogVisible=false">取消</el-button>
              <el-button type="primary" @click="login()">登录</el-button>
          </div>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
      return {
          dialogVisible: false,
          username: '',
          pwd:'',
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
  },
  methods: {
        show() {
            this.dialogVisible = true
        },
        handleClose() {
            this.dialogVisible = false
        },
        login() {
            // asyncData() {
            //     return axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            //         console.log(res)
            //         return {
            //             detail:res.data
            //         }
            //     })
            // }
        }
  }
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
.el-dialog__body {
    padding: 0 20px!important;
}
.dialog-footer {
    padding: 20px 0;
}
</style>

