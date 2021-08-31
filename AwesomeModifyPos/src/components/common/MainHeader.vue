<template>
    <div class="main-header-box">s
    
    <!-- <transition name="slide-fade">
      <div id="mobile-bar" v-show="show" >
        <a class="menu-button" ref="menubutton">Menubutton</a>
        <router-link class="logo" to="/"></router-link>
      </div>
    </transition> -->

      <!-- <transition name="slide-fade">
      <header class="main-header" v-show="show">
      <div class="header-container">
            <nav class="header-nav">
              <ul class="header-nav-list">
                <li class="header-nav-item"><a href="">首页</a></li>
                <li class="header-nav-item"><a @click="bbs_href">留言板</a></li>
                
                <li class="header-nav-item egg">
                  <el-carousel trigger="click" height="40px" indicator-position="outside">
                    <el-carousel-item v-for="item in laohuangliInfos" :key="item">
                      <span class="small">{{ item }}</span>
                    </el-carousel-item>
                  </el-carousel>             
                </li>


                <li class="header-nav-item add"><el-button type="info" v-if="this.$store.state.token" plain="" size="medium" @click.native="issue()" icon="el-icon-edit">写文章</el-button>
                <el-divider direction="vertical"></el-divider>
                </li> -->

                <!-- <li v-if="this.$store.state.token" class="header-nav-item sign menu">
                  <el-dropdown trigger="click">
                                                  <span class="el-dropdown-link">
                                                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                                                  </span>
                    <el-avatar  class="el-dropdown-link" style="cursor: pointer" :size="40"  :src="url"></el-avatar>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item @click.native="myHome()" icon="el-icon-user-solid">我的主页</el-dropdown-item>
                      <el-dropdown-item @click.native="myLike()" icon="el-icon-thumb">今天几号</el-dropdown-item>
                      <el-dropdown-item @click.native="myFavor()" icon="el-icon-star-on">我的收藏集</el-dropdown-item>
                      <el-dropdown-item @click.native="myTag()" icon="el-icon-s-management">文章管理</el-dropdown-item>
                      <el-dropdown-item @click.native="setting()" icon="el-icon-s-tools">设置</el-dropdown-item>
                      <el-dropdown-item @click.native="about()" icon="el-icon-warning-outline">关于</el-dropdown-item>
                      <el-dropdown-item @click.native="logout()" icon="el-icon-switch-button">登出</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>  -->
                
                
                <!-- 登录和注册 -->
                <!-- <li class="header-nav-item sign" v-if="this.$store.state.token==''">
                  <el-button type="text" @click="dialogSignupFormVisible=true" style="margin-left: -2rem;" class="header-nav-item-button">注册</el-button>
                  <el-button type="text" @click="dialogLoginFormVisible=true"
                                            class="header-nav-item-button">登录</el-button>
                    
                  <el-dialog title="登录" :visible.sync="dialogLoginFormVisible" 
                                            width="20%" :modal-append-to-body="false" id="disableMouseDiv">
                      <el-form id="center-form-in" :model="form">
                      <el-form-item id="center-item">
                          <el-input v-model="form.loginName" autocomplete="off" placeholder="请输入邮箱"></el-input>
                      </el-form-item> 
                      <el-form-item id="center-item">
                          <el-input v-model="form.loginPwd" type="password" autocomplete="off" placeholder="请输入密码"></el-input>
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
                  

                  
                  <el-dialog title="注册" :visible.sync="dialogSignupFormVisible" width="20%" :modal-append-to-body="false" id="disableMouseDiv" >
                    <el-form id="center-form-up" :model="form">
                    <el-form-item id="center-item">
                        <el-input v-model="form.signUpName" autocomplete="off" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-input v-model="form.signUpEmail" autocomplete="off" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item-vercode">
                      <div class="vercode-box">
                        <el-input id="vercode-input" v-model="form.signUpCode" autocomplete="off" placeholder="请输入验证码"></el-input>
                        <el-button type="primary" id="code-send" :loading="sendistrue" @click="sendcode">发送验证码</el-button></div>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-input v-model="form.signUpPwd" type="password" autocomplete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-button id="center-signup" type="primary" @click="userRegister">注册</el-button>
                        <span id="signin" @click="turn">已有账号，去登录</span>
                    </el-form-item>
                    </el-form>
                    
                    <div slot="footer">
                        <span class="hint-foot">本网站承诺不遵循任何隐私政策</span>
                    </div>
                </el-dialog>
              
                </li> -->
              <!-- </ul>
            </nav>
      </div>
    </header>
    </transition> -->
  </div>

</template>

<script>
// import user from '@/api/user'
// import axios from 'axsios'
import qs from 'qs'

export default {
  data () {
    return {
      dialogLoginFormVisible: false,
      dialogSignupFormVisible: false,
      form: {
        loginName: '',
        loginPwd: '',
        signUpName: '',
        signUpEmail: '',
        signUpCode: '',
        signUpPwd: '',
      },
      search:"",
      show: true,
      fits: ['fill'],
      // url:"http://127.0.0.1:8000/media/avatars/default_avatar.png",
      url: '',
      // this.$store.state.user.avatar

      sendistrue: false,
      laohuangliInfos: '',
      timer: '',
      // sign_in: true,
      // sign_up: false,
    }
  },
  created () {
    // this.url = this.$store.state.user.avatar
    // var _this = this
      // axios.get('/api/d?date=' + fromatResult + '&key=6dafce8786d51b9598c1127f1061a25c').then(function(res){
      // axios.get('http://127.0.0.1:8000/laohuangli/').then(function(response){
      // console.log(res.data.HeWeather6[0])
      // console.log(response.data.result.yinli)
      // console.log(response.data.result.wuxing)
      // var laohuangliList = new Array('阴历：'+ response.data.result.yinli, '五行：' + response.data.result.wuxing, '冲煞：' + response.data.result.chongsha, '拜祭：' + response.data.result.baiji, '祭神：' + response.data.result.jishen, '凶神：' + response.data.result.xiongshen, '宜：' + response.data.result.yi, '忌：' + response.data.result.ji)
      // // console.log(laohuangliList)
      // _this.laohuangliInfos = laohuangliList
    // })
  },
  computed:{
    laohuangliInfosMix:function(){
      
    }
  },
  mounted: function () {

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
    this.timer = setTimeout(this.testforload, 1000);
  },
  beforeDestroy() {
      clearTimeout(this.timer);
    },
  methods: {
    testforload(){
      // alert('我被触发了')
      // console.log(this.$store.state.page_loading)
      this.$store.commit('reloading')
      // console.log(this.$store.state.page_loading)
    },
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
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if (this.form.loginName.length <= 0 || this.form.loginPwd.length <= 0) {
          this.$message({
            message: '不能为空哦',
            type: 'warning'
          });
          return;
        } else if (!reg.test(this.form.loginName)) {
          this.$message({
            message: '邮箱格式错误啦',
            type: 'warning'
          });
          return;
        }

        // 发送请求到服务端，实现登录
        user.login(this.form.loginName, this.form.loginPwd).then(response => {
          this.form.loginPwd = ''
          // console.log(response.data)
          // console.log(response)
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
      sendcode() {
        this.sendistrue = true
        user.sendMail(this.form.signUpEmail).then(response => {
          this.$message({
            message: '正在发送验证码哦。。。',
          });
        })
      },
      userRegister() {
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if (this.form.signUpName.length <= 0 || this.form.signUpPwd.length <= 0 || this.form.signUpPwd.length <= 0) {
          this.$message({
            message: '不能为空哦',
            type: 'warning'
          });
          return;
        } else if (!reg.test(this.form.signUpEmail)) {
          this.$message({
            message: '邮箱格式错误啦',
            type: 'warning'
          });
          return;
        }

        // 发送请求到服务端，实现登录
        user.register(this.form.signUpName, this.form.signUpEmail, this.form.signUpCode, this.form.signUpPwd).then(response => {
          this.$message({
            message: '注册成功',
            type: 'success'
          });
          this.dialogSignupFormVisible = false
          this.dialogLoginFormVisible = true
          this.form.loginName = response.email
        })
      },
      logout() {  //退出登录
        // user.logout().then(res => {
          this.$store.commit('logout')//清除token等信息
          this.$message({
            message: '退出成功',
            type: 'success'
          });
          // 组件刷新
          // location.reload()
          // 进入主页
          this.$router.push({
            path: '/'
          })
        
      },
      bbs_href(){
        this.$router.push({
          path: '/bbs'
        })
      },
      issue() {
          this.$router.push({
            path: '/edit'
          })
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
        // console.log(JSON.parse(this.$store.state.user).avatar)
        // console.log(this.$store.state.user.avatar)
        this.$router.push({
          path: '/user/articles'
        })
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
  cursor: pointer;
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
/* #center-item-vercode {
  display: flex;
} */
.vercode-box {
  display: flex;
}
#code-send{
  margin-left: 1.4rem;
}

.el-carousel {
    width: 22rem;
    height: 40px;
    text-align: center;
    /* top: 100px; */
    /* margin-right: auto; */
    /* margin-left: auto; */
  }


  .el-carousel__item span {
    color: #475669;
    font-size: 1rem;
    opacity: 0.79;
    /* line-height: 200px; */
    margin: 0;
  }
  
  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>