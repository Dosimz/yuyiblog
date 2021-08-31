<template>
  <div class="myarticle-list-box">

    <!-- 
        element-loading-background="rgba(0, 0, 0, 1)"    
        element-loading-spinner="~@/assets/loadinge.svgloading"
        element-loading-text="拼命加载中" -->

    <div class="myarticle-list">
      <el-card shadow="hover" v-loading="isLoading" v-if="birth_already">
        <div class="stars-title">        
          <svg class="icon icon-title" aria-hidden="true">
            <use xlink:href="#icon-xingzuo"></use>
          </svg>
          <span class="stars-infos-title">{{ starInfos.name }}</span>
          <span class="stars-title-text"><i>今日运势</i></span>
        </div>
        <div class="stars-box">
          <div class="line first-line">
            <div class="stars-box-meta">
                <svg class="icon stars-infos-icon" aria-hidden="true">
                  <use xlink:href="#icon-yiliaozhishu"></use>
                </svg>
              <div class="stars-infos-span">健康指数:</div>
              <span>{{starInfos.health}}</span>
            </div>
            <div class="stars-box-meta">
                <svg class="icon stars-infos-icon" aria-hidden="true">
                  <use xlink:href="#icon-shuzi"></use>
                </svg>
              <span class="stars-infos-span">
                幸运数字:</span>
              <span>{{starInfos.number}}</span>
            </div>
          </div>
          <div class="line second-line">
            <div class="stars-box-meta">
                <svg class="icon stars-infos-icon" aria-hidden="true">
                  <use xlink:href="#icon-qingshu"></use>
                </svg>
              <span class="stars-infos-span">爱情指数:</span>
              <span>{{starInfos.love}}</span>
            </div>
            <div class="stars-box-meta">
              <svg class="icon stars-infos-icon" aria-hidden="true">
                <use xlink:href="#icon-yanse"></use>
              </svg>
              <span class="stars-infos-span">幸运色:</span>              
              <span>{{starInfos.color}}</span>
            </div>
          </div>
          <div class="line third-line">
            <div class="stars-box-meta">
                <svg class="icon stars-infos-icon" aria-hidden="true">
                  <use xlink:href="#icon-qian"></use>
                </svg>
              <span class="stars-infos-span">
                财运指数:</span>
              <span>{{starInfos.money}}</span>
            </div>
            <div class="stars-box-meta">
                <svg class="icon stars-infos-icon" aria-hidden="true">
                  <use xlink:href="#icon-xingzuo1"></use>
                </svg>
              <span class="stars-infos-span">
                速配星座:</span>
              <span>{{starInfos.QFriend}}</span>
            </div>

          </div>
          <div class="line fourth-line">
            <div class="stars-box-meta">
                <svg class="icon stars-infos-icon" aria-hidden="true">
                  <use xlink:href="#icon-daima"></use>
                </svg>
              <span class="stars-infos-span">
                工作指数:</span>
              <span>{{starInfos.work}}</span>
            </div>
            <div class="stars-box-meta">
                <svg class="icon stars-infos-icon" aria-hidden="true">
                  <use xlink:href="#icon-shangshengzhishu"></use>
                </svg>
              <span class="stars-infos-span">
                综合指数:</span>
              <span>{{starInfos.all}}</span>
            </div>            
          </div>
        </div>

        <el-divider></el-divider>

        <div class="summary-box">
          <span class="stars-summary-title"><i>今日概述</i></span>
          <div class="starInfos-summary">{{starInfos.summary}}</div>
        </div>

      </el-card>
      <el-card shadow="hover" v-else>
        <div class="stars-title">        
          <span class="stars-infos-title"></span>
          <span class="stars-title-text"></span>
        </div>
        <!-- <el-divider></el-divider> -->
        <div class="summary-x">
          <div class="starInfos-summary">快去点击编辑个人资料按钮设置生日吧！</div>
        </div>
      </el-card>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
// import Loading from '@/components/loading';

import axios from 'axios'
export default {
  // components: {
  //   Loading },
  data() {
    return {
      starInfos: '',
      isLoading: true,
      birth_already: false,
    }
  },
  created(){
    var _this = this
    this.$axios({
          url: 'http://127.0.0.1:8000/constellation/',
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT '+ _this.$store.state.token
          }
        }).then(res=>{
          // console.log(res.data.msg)
          if (res.data.msg){
            this.$notify({
              title: '星座♈️运势',
              message: '您还没设置生日🎂，没法查看今天的运势哦',
              position: 'bottom-left',
              type: 'warning'
          });
          } else {
            _this.birth_already = true
            _this.starInfos = res.data
            _this.isLoading = false
          }

        })
  }
}
</script>

<style scoped>
.el-card {
  /* text-align: center; */
  display: flex;
  align-items: center;
}
.stars-box {
  display: flex;
  flex-flow: column;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}

.line {
  display: flex;
  width: 700px;
}

.stars-box-meta {
  margin: .8rem;
  display: flex;
  font-size: 1rem;
  margin-right: 8rem;
}
.stars-infos-icon {
  margin-right: .6rem;
  font-size: 1.6rem;
}
.stars-infos-title {
  font-size: 1.4rem;
  font-weight: 400;
}
.stars-title-text {
  font-size: 1.1rem;
}
.icon-title {
  margin-right: 1rem;
  font-size: 3rem;
  margin-left: 2rem;
}
.stars-title {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  /* text-align: center; */
}
 .stars-infos-span {
   margin-right: 1rem;
 }


 /* summary */
.summary-box {
  width: 84%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-flow: column;
}
 .starInfos-summary {
   /* text-align: center; */
   font-size: 1rem;

 }
.stars-summary-title {
  font-size: 1.6rem;
}
</style>