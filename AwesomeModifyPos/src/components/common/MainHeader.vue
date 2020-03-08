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
                <li class="header-nav-item"><a href="">沸点</a></li>
                <li class="header-nav-item"><a href="">话题</a></li>
                <li class="header-nav-item">这里用来展示地点和天气预报</li>
                <li class="header-nav-item add"><el-button type="info" plain="" size="medium" icon="el-icon-edit">写文章</el-button></li>
                <li class="header-nav-item menu"><el-avatar shape="square" :size="30"  :src="url"></el-avatar></li>
                <li class="header-nav-item">
                  <el-button type="text" @click="dialogFormVisible=true" class="header-nav-item">登录</el-button>
                  <div v-show="sign_in">
                  <el-dialog title="登录" :visible.sync="dialogFormVisible" width="20%" :modal="false" id="disableMouseDiv">
                      <el-form id="center-form-in" :model="form">
                      <el-form-item id="center-item">
                          <el-input v-model="form.name" autocomplete="off" placeholder="请输入手机号"></el-input>
                          <!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input> -->
                      </el-form-item>
                      <el-form-item id="center-item">
                          <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input>
                      </el-form-item>
                      <el-form-item id="center-item">
                          <el-button id="center-login" type="primary" >登录</el-button>
                          <span>没有账号？<span id="signin" @click="in_turn_up">注册</span></span> 
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
                      <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
                      </div>
                  </el-dialog>
                  </div>
                <div v-show="sign_up">
                  <el-dialog title="注册" :visible.sync="dialogFormVisible" width="20%" :modal="false" id="disableMouseDiv" >
                    <el-form id="center-form-up" :model="form">
                    <el-form-item id="center-item">
                        <el-input v-model="form.name" autocomplete="off" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-input v-model="form.name" autocomplete="off" placeholder="请输入手机号"></el-input>
                        <!-- <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input> -->
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-input v-model="form.name" autocomplete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item id="center-item">
                        <el-button id="center-signup" type="primary" >注册</el-button>
                        <span id="signin" @click="in_turn_up">已有账号，去登录</span>
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
                    <!-- <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
                    </div>
                </el-dialog>
              </div>
                </li>
              </ul>
            </nav>
            <!-- </el-col> -->
          <!-- </el-row> -->
        <!-- </el-header> -->
      </div>
    </header>
    </transition>
  </div>

</template>

<script>
export default {
  data () {
    return {
      search:"",
      show: true,
      fits: ['fill'],
      url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",

      dialogFormVisible: false,
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
      sign_in: true,
      sign_up: false,
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
    var div = document.getElementById('disableMouseDiv');
    if (div.addEventListener) {
      div.addEventListener('DOMMouseScroll', this.scrollFuc, false);
    }
    div.onmousewheel = div.onmousewheel = this.scrollFuc

    // 给页面绑定滑轮滚动事件
    if (document.addEventListener) { // firefox
      document.addEventListener('DOMMouseScroll', this.watchScroll, false)
    }
    
      // 滚动滑轮触发scrollFunc方法  //ie 谷歌
      window.onmousewheel = document.onmousewheel = this.watchScroll;

  },
  methods: {
    // initMobileMenu () {
    //   // 显示手机端的菜单
    //   var sidebar = this.$refs.sidebar
    //   this.$refs.menubutton.addEventListener('click', function () {
    //     sidebar.toggleSideBar()
    //   })
    // },

    // 将 dialog 由 sign in  转换为 sign up
    in_turn_up: function() {
        if (this.sign_in) {
          this.sign_in = false
          this.sign_up = true
        } else {
          this.sign_in = true
          this.sign_up = false
        }
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
  z-index: 250;
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


.header-nav-item.menu {
  position: relative;
}

.header-nav-item {
  color: #71777c;
  font-size: 1.22rem;
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0.6em;
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
/* #f {
  padding: 0;
} */

</style>