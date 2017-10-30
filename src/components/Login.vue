<template>
  <div id="login">
    <section class="login-box">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox class="remember" v-model="checked" checked>记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
          <!--<el-button>重置</el-button>-->
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  import { requestLogin } from '../api/api'

  export default {
    data () {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        checked: true
      }
    },
    methods: {
      handleReset2 () {
        this.$refs.ruleForm2.resetFields()
      },
      handleSubmit2 (ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass }
            requestLogin(loginParams).then(data => {
              this.logining = false
              let { msg, code, user } = data
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                })
              } else {
                console.log(user)
                sessionStorage.setItem('user', JSON.stringify(user))
                this.$router.push({ path: '/index' })
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #login
    background url('../assets/img/login-bg.png') no-repeat center
    background-size 100% 100%
    position absolute
    width 100%
    height 100%
    .login-box
      -webkit-border-radius 5px
      border-radius 5px
      -moz-border-radius 5px
      background-clip padding-box
      margin 6% 10%
      padding 4% 0
      box-shadow 0 0 25px #cac6c6
      background-color #ffffff
      .login-container
        width 350px
        padding 35px 35px 15px 35px
        margin 0 auto
        background #fff
        border 1px solid #eaeaea
        .title
          margin 0px auto 40px auto
          text-align center
          color #505458
          font-size 18px
          font-weight bold
        .remember
          margin 0px 0px 35px 0px
</style>
