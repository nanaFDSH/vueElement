<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import '@/assets/theme/0000ff/index.css'    // 换肤版本0000ff css
  import '@/assets/theme/008000/index.css'    // 换肤版本008000 css
  import '@/assets/theme/fa4f52/index.css'    // 换肤版本fa4f52 css
  import '@/assets/theme/20a0ff/index.css'    // 换肤版本20a0ff css
  import '@/assets/theme/00a597/index.css'    // 换肤版本00a597 css

  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    margin: 0px
    padding: 0px
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif
    font-size: 14px;
    -webkit-font-smoothing: antialiased
    #app
      position: absolute
      top: 0px
      bottom: 0px
      width: 100%
      .el-submenu
        .fa
          color #333
          vertical-align: baseline
          margin-right: 10px
      .el-menu-item
        .fa
          color #333
          vertical-align: baseline;
          margin-right: 10px
      .toolbar
        background: #f2f2f2
        padding: 10px
        margin: 10px 0px
        .el-form-item
          margin-bottom: 10px
      .fade-enter-active
        transition: all .2s ease
      .fade-leave-active
        transition: all .2s ease
      .fade-enter
        opacity: 0
      .fade-leave-active
        opacity: 0
</style>
