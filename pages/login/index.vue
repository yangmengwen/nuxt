<template>
    <div>
		<div class="logo-box">
			<img class="login-img" src="../../../../assets/logo.png" alt="">
			<div class="logo-title">登录快保账号</div>
		</div>
		<form class="login-form">
			<div class="txt-item">
				<input type="text" class="txt" id="login-phone" v-model.trim="loginPhone"/>
			</div>
			<div class="txt-item">
				<input type="password" class="txt" id="login-pass" v-model="loginPass" placeholder="请输入您的密码"/>
			</div>
			<div class="reg-forget clearfix">
				<div class="to-reg">没有账号？<a class="reg-link" @click="goRegister" href="javascript:void(0);">创建账号</a>
				</div>
				<div class="forget" @click="goForgetPass">忘记密码?</div>
			</div>
			<div class="login-btn" @click="login">快保账号登录</div>
			<div class="login-agree">登录表示同意<span class="agree-red" @click="agreeContact">《快保协议》</span></div>
		</form>
		<div class="login-chat" v-show="isWeiXin">
			<div class="chat-title">
				<div class="title-line"></div>
				<div class="title-name">微信快速登录</div>
				<div class="title-line"></div>
			</div>
			<img @click="goWeiXin" class="chat-link" src="../../../../assets/images/login/chat.png" alt="">
		</div>
		<div class="download-box">
			<div class="download" @click="downloadApp">
				立即下载APP
			</div>
		</div>
		<kbContact :isOpen="showAlert" @close="closeAlert"></kbContact>
		<!-- <Popup position="bottom" v-model="showAlert">
			
			 <kbContact></kbContact>
		</Popup> -->
	</div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	.logo-box {
		text-align: center;
		margin-top: 0.6rem;
	}

	.login-img {
		width: 0.9rem;
		height: 0.9rem;
	}

	.logo-title {
		margin-top: 0.24rem;
		font-size: 0.28rem;
	}

	.login-form {
		padding: 0 0.3rem;
		margin-top: 0.7rem;
	}

	.txt-item {
		border-bottom: 1px solid #DEDEDE;
		height: 1rem;
	}

	.txt {
		width: 100%;
		height: 1rem;
		background-color: #fff;
		font-size: 0.3rem;
	}

	#login-phone {
		font-size: 0.32rem;
	}

	.reg-forget {
		color: #999999;
		margin-top: 0.2rem;
		font-size: 0.24rem;
	}

	.to-reg {
		float: left;
	}

	.reg-link {
		color: #FF3333;
	}

	.forget {
		float: right;
	}

	.login-btn {
		color: #fff;
		background-color: #FF3333;
		height: 0.7rem;
		line-height: 0.7rem;
		border-radius: 3px;
		text-align: center;
		margin-top: 0.84rem;
	}

	.login-agree {
		margin-top: 0.2rem;
		color: #999999;
		font-size: 0.24rem;
	}

	.agree-red {
		color: #FF3333;
	}

	.login-chat {
		padding: 0 0.3rem;
		color: #999999;
		font-size: 0.24rem;
		text-align: center;
		margin-top: 1.8rem;
	}

	.chat-title {
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
	}

	.title-line {
		flex: 1;
		height: 1px;
		background-color: #DEDEDE;
		margin: 0.12rem 0;
	}

	.chat-link {
		width: 0.8rem;
		height: 0.8rem;
		margin-top: 0.3rem;
	}

	.title-name {
		margin: 0 0.24rem;
	}

	.download-box {
		padding: 0 0.3rem;
		margin-top: 0.8rem;
	}

	.download {
		color: #999999;
		height: 0.7rem;
		line-height: 0.7rem;
		text-align: center;
		border: 1px solid #999999;
		border-radius: 3px;
	}
</style>

