<template>
    <div class="user-info">
        <span class=" icon iconfont icon-head head" ></span>
        <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link" >
                 欢迎:   {{userInfo.name || userInfo.username}}
                <i class="el-icon-caret-bottom"></i>
                </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="UpdatePassword"><span class="el-icon-setting"></span>修改密码</el-dropdown-item>
                <el-dropdown-item command="loginout"><span class="el-icon-remove"></span>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
	export default {
		computed: {
			userInfo(){
				return this.$store.state.userInfo || {}
			}
		},
		methods: {
			handleCommand (command) {
				switch (command) {
					case 'loginout' :
						this.loginOut();
						break;
					case 'UpdatePassword':
                        this.$router.push({
                            path: "updatePassword",
                            query: { }
                        });
						break;
				}
			},
			openMessage(message, confirmText, doit) {
				this.$confirm(message, '提示', {
					cancelButtonText: '取消',
					confirmButtonText: confirmText
				}).then(() => {
					doit();
				}).catch(() => {
				});
			},
			loginOut () {
				this.openMessage('您确定要退出吗？', '确定', () => {
                    // 实现退出逻辑
                    let result = true//退出接口调用结果
                    if (result) {
                        history.go(0)
						this.$message({type: 'success', message: '退出成功'});
						setTimeout(() => {
							this.$router.replace('/');
						}, 500)
                    }
                    else {
                        this.$message({
                            showClose: true,
                            message: "error Message",
                            type: 'error'
                        });
                        setTimeout(() => {
                            this.$router.replace('/');
                        },500)
                    }
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
    @import "@/assets/styles/var.scss";
    .el-popper[x-placement^="bottom"] {
        // margin-top: 19px;
    }
    .el-dropdown-menu__item {
        [class^="el-icon-"] {
            margin-right: 5px;;
        }
    }
    .user-info {
        float: right;
        padding: 0 15px;
        .el-dropdown {
            color: #fff;
            cursor: pointer;
        }
        .head{
            background-color: $-color-primary;
            border-radius: 50%;
            height: 25px;
            width: 25px;
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            line-height: 25px;
            margin-right: 3px;
            
        }
        .iconfont{
            font-size: 25px;
        }
    }
</style>
