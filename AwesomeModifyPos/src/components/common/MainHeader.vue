<template>
    <div class="main-header-box">
    
    <!-- <transition name="slide-fade">
      <div id="mobile-bar" v-show="show" >
        <a class="menu-button" ref="menubutton">Menubutton</a>
        <router-link class="logo" to="/"></router-link>
      </div>
    </transition> -->
      <transition name="slide-fade">
      <header class="main-header" v-show="show">
      <div class="header-container">
            <nav class="header-nav">
              <ul class="header-nav-list">
                <li class="header-nav-item"><a href="">首页</a></li>
                <li class="header-nav-item"><a href="">留言板</a></li>
                <!-- <li class="header-nav-item"><a href="">话题</a></li> -->
                <li class="header-nav-item egg">这里用来展示地点和天气预报</li>
                <li class="header-nav-item add"><el-button type="info" plain="" size="medium" icon="el-icon-edit">写文章</el-button>
                <el-divider direction="vertical"></el-divider>
                </li>

                <li v-if="this.$store.state.token" class="header-nav-item sign menu">
                  <el-dropdown trigger="click">
                    <!-- <span class="el-dropdown-link">
                      下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span> -->
                    <el-avatar  class="el-dropdown-link" style="cursor: pointer" shape="square" :size="30"  :src="url"></el-avatar>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item @click.native="myHome()" icon="el-icon-user-solid">我的主页</el-dropdown-item>
                      <el-dropdown-item @click.native="myLike()" icon="el-icon-thumb">我赞过的</el-dropdown-item>
                      <el-dropdown-item @click.native="myFavor()" icon="el-icon-star-on">我的收藏集</el-dropdown-item>
                      <el-dropdown-item @click.native="myTag()" icon="el-icon-s-management">标签管理</el-dropdown-item>
                      <el-dropdown-item @click.native="setting()" icon="el-icon-s-tools">设置</el-dropdown-item>
                      <el-dropdown-item @click.native="about()" icon="el-icon-warning-outline">关于</el-dropdown-item>
                      <el-dropdown-item @click.native="logout()" icon="el-icon-switch-button">登出</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li> 
                
                
                <!-- 登录和注册 -->
                <li class="header-nav-item sign" v-if="this.$store.state.token==''">
                  <el-button type="text" @click="dialogLoginFormVisible=true" class="header-nav-item-button">登录</el-button>
                  <el-button type="text" @click="dialogSignupFormVisible=true" style="margin-left: -2rem;" class="header-nav-item-button">注册</el-button>
                    <!-- 登录弹窗 -->
                  <el-dialog title="登录" :visible.sync="dialogLoginFormVisible" width="20%" :modal-append-to-body="false" id="disableMouseDiv">
                      <el-form id="center-form-in" :model="form">
                      <el-form-item id="center-item">
                          <el-input v-model="form.loginName" autocomplete="off" placeholder="请输入手机号"></el-input>
                      </el-form-item>
                      <el-form-item id="center-item">
                          <el-input v-model="form.loginPwd" autocomplete="off" placeholder="请输入密码"></el-input>
                      </el-form-item>
                      <el-form-item id="center-item">
                          <el-button id="center-login" type="primary" @click="userLogin">登录</el-button>
                          <span>没有账号？<span id="signin" @click="turn">注册</span></span> 
                          <a id="pwdforget" href="">忘记密码</a>
                      </el-form-item>
                      </el-form>
                      <div class="oauth-box">
                          <div class="hint">第三方账号登录：</div>
                          <div class="oauth">
                              <div class="oauth-bg">
                                  <i class="el-icon-edit"></i>
                              </div>
                              <div class="oauth-bg">
                                  <i class="el-icon-edit"></i>
                              </div>
                              <div class="oauth-bg">
                                  <i class="el-icon-edit"></i>
                              </div>
                          </div>
                      </div>
                      <div slot="footer">
                          <span class="hint-foot">本网站承诺不遵循任何隐私政策</span>
                      </div>
                  </el-dialog>
                  

                  <!-- 注册 -->
                  <el-dialog title="注册" :visible.sync="dialogSignupFormVisible" width="20%" :modal-append-to-body="false" id="disableMouseDiv" >
                    <el-form id="center-form-up" :model="form">
                    <el-form-item id="center-item">
                        <el-input v-model="form.signUpName" autocomplete="off" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-input v-model="form.signUpPhone" autocomplete="off" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-input v-model="form.signUpPwd" autocomplete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-button id="center-signup" type="primary" >注册</el-button>
                        <span id="signin" @click="turn">已有账号，去登录</span>
                    </el-form-item>
                    </el-form>
                    <div class="oauth-box">
                        <div class="hint">第三方账号登录：</div>
                        <div class="oauth">
                            <div class="oauth-bg">
                                <i class="el-icon-edit"></i>
                            </div>
                            <div class="oauth-bg">
                                <i class="el-icon-edit"></i>
                            </div>
                            <div class="oauth-bg">
                                <i class="el-icon-edit"></i>
                            </div>
                        </div>
                    </div>
                    <div slot="footer">
                        <span class="hint-foot">本网站承诺不遵循任何隐私政策</span>
                    </div>
                </el-dialog>
              
                </li>
              </ul>
            </nav>
      </div>
    </header>
    </transition>
  </div>

</template>

<script>
import user from '@/api/user'
import axios from 'axios'
import qs from 'qs'

export default {
  data () {
    return {
      search:"",
      show: true,
      fits: ['fill'],
      // url:"http://127.0.0.1:8000/media/avatars/default_avatar.png",
      url: this.$store.state.user.avatar,
      // this.$store.state.user.avatar

      dialogLoginFormVisible: false,
      dialogSignupFormVisible: false,
      form: {
        loginName: '',
        loginPwd: '',
        signUpName: '',
        signUpPhone: '',
        signUpPwd: '',
      },
      // sign_in: true,
      // sign_up: false,
    }
  },
  created () {
  },
  computed:{
  },
  mounted: function () {
    // this.$nextTick(function () {
    //   this.initMobileMenu()
    // })
    // dialog 弹窗禁止滑动
    window.onload = function() {
      // div.onmousewheel = div.onmousewheel = this.scrollFuc
      // var div = document.getElementById('disableMouseDiv');
      // if (div.addEventListener) {
      //   div.addEventListener('DOMMouseScroll', this.scrollFuc, false);
      // }
      // div.onmousewheel = this.scrollFuc

          // 给页面绑定滑轮滚动事件
    if (document.addEventListener) { // firefox
      document.addEventListener('DOMMouseScroll', this.watchScroll, false)
    }
    
      // 滚动滑轮触发scrollFunc方法  //ie 谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll;
    }

  },
  methods: {
    // 将 dialog 由 sign in  转换为 sign up
    // in_turn_up: function() {
    //     if (this.sign_in) {
    //       this.sign_in = false
    //       this.sign_up = true
    //     } else {
    //       this.sign_in = true
    //       this.sign_up = false
    //     }
    // },
    // 不再使用 v-show
    turn: function () {
      if (this.dialogLoginFormVisible) {
        this.dialogLoginFormVisible = false
        this.dialogSignupFormVisible = true
      } else {
        this.dialogSignupFormVisible = false
        this.dialogLoginFormVisible = true
      }
    },
      userLogin() { 
        if (this.form.loginName.length <= 0 || this.form.loginPwd.length <= 0) {
          this.$message({
            message: '字段不完整',
            type: 'error'
          });
          return;
        }
        // 发送请求到服务端，实现登录
        user.login(this.form.loginName, this.form.loginPwd).then(response => {
          this.form.loginPwd = ''
          console.log(response.data)
          this.$store.commit('login', response)//存储token
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          // this.loginFormVisible = false
        })
        // 发送 post请求测试后端接口   application/x-www-form-urlencodedform
        // let data = {
        //     "username": this.form.loginName, 
        //     "password": this.form.loginPwd
        // };
        // axios({
        //   method: 'post',
        //   url: 'http://127.0.0.1:8000/user/login/',
        //   data: qs.stringify(data)
        //   }).then(function(response){
        //     console.log(response)
        //   }).catch(function (error){
        //     console.log(error)
        //   });
      },
      logout() {  //退出登录
        // user.logout().then(res => {
          this.$store.commit('logout')//清除token等信息
          this.$message({
            message: '退出成功',
            type: 'success'
          });
          this.$router.push({ //路由跳转
            path: '/'
          })
        // })
      },

      myHome() {
          this.$router.push({
            path: '/user/action'
          })
          // router.push({ //路由跳转
          //   path: '/'
          // })
          // 刷新
          // location.reload()
      },
      myLike() {
        this.$router.push({
            path: '/user/likes'
        })
      },
      myFavor() {
        this.$router.push({
            path: '/user/favors'
        })
      },
      myTag() {

      },
      setting() {

      },
      about() {
        
      },

    scrollFuc (evt) {
      evt = evt || window.event;
      if (evt.preventDefault) {
        evt.preventDefault();
        evt.stopPropagation();
      } else {
        evt.cancelBubble = true;
        evt.returnValue = false;
      }
      return false;
    },
    watchScroll (e) {
      // var x = document.getElementsByClassName("main-header")
      e = e || window.event
      if (e.wheelDelta) {
        if (e.wheelDelta > 88 && this.show === false) { // 当滑轮向上滚动
          this.show = true
          // x.style.transform = " translateZ(0)"
        }
        if (e.wheelDelta < -88 && this.show === true) { // 当滑轮向下滚动
          this.show = false
          // x.style.transform = "translate3d(0, -100%, 0)"
        }
      } else if (e.detail) {
        if (e.detail < 0 && this.show === false) { // 当滑轮向上滚动
          this.show = true
          // x.style.transform = " translateZ(0)"
        }
        if (e.detail > 0 && this.show === true) { // 当滑轮向下滚动
          this.show = false
          // x.style.transform = "translate3d(0, -100%, 0)"
        }
      }
    },
  }
}
</script>

<style scoped>
/* .slide-fade-leave-active for below version 2.1.8 */
/* transform: translateY(-70px); */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all .6s ease;
}
.slide-fade-leave-to,
.slide-fade-enter {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
}



.main-header-box {
  position: relative;
  height: 4.4rem;
}
  /* transform: translateZ(0); */
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .6s;
  /* transform: translate3d(0, -100%, 0); */
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 4.4rem;
  /* mavon-editor 默认 z-index 为 1500 */
  z-index: 1501;
}
.header-nav-list {
  display: flex;
  /* flex-direction: row; */
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  margin: auto;
}

.header-container {
  /* max-width: 960px; */
  max-width: 1100px;
  margin: auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
}
.header-nav {
  height: 100%;
  /* flex: 1 0 auto; */
}

/* 
.header-nav-item.menu {
  position: relative;
} */

.header-nav-item {
  color: #71777c;
  font-size: 1.1rem;
  padding: 0 .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0.6em;
  height: 100%;
}

.header-nav-item-button {
  color: #71777c;
  font-size: 1rem;
  padding: 0 0.1rem;
  margin: 0 2.5em;
  height: 100%;
}

/* 登录、注册弹窗 */
#center-form-in,
#center-form-up {
  padding: 0px 24px;
}
#center-login,
#center-signup {
  width: 100%;
}

#signin {
  color: #409EFF;
  cursor: pointer;
}
#pwdforget {
  float: right;
  color: #409EFF;
}

.oauth-box {
    padding: 0px 24px;
    margin-top: -14px;
}
.oauth {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
}
.oauth-bg {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #f4f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
}


.hint-foot {
    color: #606266;
    font-size: 1rem;
}

.add {
  right: -11rem;
  /* margin-left: 4rem; */
}
.sign {
  right: -10rem;
  /* margin-: 4rem; */

}
.egg {
  width: 26rem;
}
</style>