<template>
    <el-row class="flex flex-ai-center flex-row">
        <div class="header-title">
            <slot name="title"></slot>
        </div>
        <div class="flex1"></div>
        <div class="cw flex-ai-center" v-if="userInfo.token">
            <user-info></user-info>
        </div>
        <div class="user-info flex flex-center cw" v-else>
          <router-link to="login" class="fs16">登录</router-link>
          <router-link to="register" class="fs16">注册</router-link>
        </div>
    </el-row>
</template>

<script>
	import userInfo from './UserInfo';

	export default {
    name: 'v-header',
		data() {
			return {}
		},
		components: {
			userInfo
		},
		computed: {
			userInfo() {
				return this.$store.state.userInfo || {}
			}
		}
	}
</script>
<style lang="scss" scoped rel="stylesheet/scss">
    .cw {
        color: #ffffff;
        a {
            margin-left: 10px;
            cursor: pointer
        }
    }
    .el-row{
        flex:1;
    }
    .header-title{
        color: #FFF;
        font-size: 20px;
    }
</style>
