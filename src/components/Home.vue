<template>
  <el-row class="container" id="app">
    <el-menu>
      <el-col :span="24" class="header">
        <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
          {{collapsed ? '' : sysName}}
          <span class="tools" @click.prevent="collapse">
          <i class="fa fa-align-justify"></i>
        </span>
        </el-col>
        <el-col :span="8" class="userinfo">
          <span index="huanfu" @click="skinDialogVisible = true">换肤</span>

          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner"><img src="../assets/img/user.png"/> {{sysUserName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
    </el-menu>

    <el-col :span="24" class="main">
      <!--导航菜单-->
      <aside class="aside" :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-折叠前-->
        <el-menu id="lastclass" class="el-menu-vertical-demo" v-show="!collapsed" :default-active="$route.path"
                 @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <!--if 有子列表-->
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
            <!--if 只有一个节点-->
            <el-menu-item v-if="item.leaf && item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>
              {{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
        <!--导航菜单-折叠后-->
        <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
          <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
            <template v-if="!item.leaf">
              <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)"
                   @mouseout="showMenu(index,false)">
                <i :class="item.iconCls"></i>
              </div>
              <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)"
                  @mouseout="showMenu(index,false)">
                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item"
                    style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''"
                    @click="$router.push(child.path)">{{child.name}}
                </li>
              </ul>
            </template>
            <template v-else>
              <div class="el-submenu">
                <div class="el-submenu__title el-menu-item nolist"
                     :class="$route.path==item.children[0].path?'is-active':''"
                     @click="$router.push(item.children[0].path)">
                  <i :class="item.iconCls"></i>
                </div>
              </div>
            </template>
          </li>
        </ul>
      </aside>
      <!--显示区域-->
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <!--导航条-->
          <el-col :span="24" class="breadcrumb-container">
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" v-if="item.name != '首页'"> {{ item.name
                }}
              </el-breadcrumb-item>
            </el-breadcrumb>
            <!--<strong class="title">{{$route.name}}</strong>-->
          </el-col>
          <!--内容区域-->
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>

    <el-dialog title="动态换肤" :visible.sync="skinDialogVisible" size="small">
      <span>
        <el-radio-group v-model="moreTheme" @change="changeTheme">
          <el-radio label="20a0ff">默认-20a0ff</el-radio>
          <el-radio label="fa4f52">红色-fa4f52</el-radio>
          <el-radio label="0000ff">蓝色-0000ff</el-radio>
          <el-radio label="008000">绿色-008000</el-radio>
          <el-radio label="00a597">绿色-00a597</el-radio>
        </el-radio-group>
        <h2>只修改了主色调</h2>
        <div class="block">
          <span class="demonstration">Button: </span>
          <span class="wrapper">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
            <el-button type="primary" :loading="true">加载中</el-button>
          </span>
        </div>
        <div class="block">
          <el-alert class='alert-item' title="成功提示的文案" type="success">
          </el-alert>
          <el-alert class='alert-item' title="消息提示的文案" type="info">
          </el-alert>
          <el-alert class='alert-item' title="警告提示的文案" type="warning">
          </el-alert>
          <el-alert class='alert-item' title="错误提示的文案" type="error">
          </el-alert>
        </div>
      </span>
    </el-dialog>

  </el-row>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        sysName: '管理平台',
        collapsed: false,
        sysUserName: '张三',
        sysUserAvatar: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        moreTheme: '20a0ff',
        skinDialogVisible: false
      }
    },
    mounted () {
      this.$router.push({path: '/index'})
      let themeClassName = ''
      let localTheme = localStorage.getItem('themeValue')
      themeClassName = localTheme || '20a0ff'
      this.changeClass(document.body, 'custom-' + themeClassName)
      this.moreTheme = themeClassName
    },
    methods: {
      handleopen () {
        console.log('handleopen')
      },
      handleclose () {
        console.log('handleclose')
      },
      handleselect: function (a, b) {
        console.log(a, b)
      },
      logout: function () { // 退出登录
        var _this = this
        this.$confirm('确认退出吗?', '提示', {
          // type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user')
          _this.$router.push('/login')
        }).catch(() => {

        })
      },
      collapse: function () {   // 折叠导航栏
        this.collapsed = !this.collapsed
        // 解决左侧显示不全
        var uiwidth = document.getElementById('lastclass')
        if (uiwidth.offsetWidth === 0) {
          uiwidth.style.width = '230px'
        }
      },
      showMenu (i, status) {
        console.log(i, status)
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none'
      },
      changeClass (element, className) {
        if (!element || !className) return
        element.className = className
      },
      changeTheme (themeValue) {
        this.changeClass(document.body, 'custom-' + themeValue)
        this.moreTheme = themeValue
        localStorage.setItem('themeValue', themeValue)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50

  .container
    position absolute
    top 0px
    bottom 0px
    width 100%
    .header
      height 60px
      line-height 60px
      .tools
        font-size 18px
        height 60px
        line-height 60px
        cursor pointer
        display inline
        float right
        color #212121
      .userinfo
        text-align right
        padding-right 35px
        float right
        color #212121
        .userinfo-inner
          cursor pointer
          color #212121
          img
            width 40px
            height 40px
            border-radius 20px
            margin 10px 0px 10px 10px
            float right
      .logo
        height: 60px
        font-size: 22px
        padding-left: 20px
        padding-right: 20px
        border-color: rgba(238, 241, 146, 0.3)
        border-right-width: 1px
        border-right-style: solid
        color: #212121
        img
          width: 40px
          float: left
          margin: 10px 10px 10px 18px
      .logo-width
        width 230px
      .logo-collapse-width
        width 60px
    .main
      display flex
      position absolute
      top 60px
      bottom 0px
      overflow hidden
      color #212121
      .aside
        flex 0 0 230px
        width 230px
        background-color rgb(246, 241, 238);
        .el-menu
          height 100%
        .collapsed
          width 60px
          .item
            position relative
          .submenu
            position absolute
            top 0px
            left 60px
            z-index 99999
            height auto
            display none
          .nolist
            min-width 0
            padding-left 20px
            height 56px
            line-height 56px
            padding 0 20px
      .menu-collapsed
        flex 0 0 60px
        width 60px
      .menu-expanded
        flex 0 0 230px
        width 230px
      .content-container
        flex: 1
        overflow-y scroll
        padding 20px
        background-color #fff
        .breadcrumb-inner
          float left
        .el-breadcrumb
          font-size 13px
          line-height 1
        .title
          font-weight bold
          padding-right 10px
          float right
          color #475669
</style>
