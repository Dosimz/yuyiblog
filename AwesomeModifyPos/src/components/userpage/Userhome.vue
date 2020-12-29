<template>
  <div class="main-container">
    <div class="view-container">
      <!-- <nav class="view-nav">
        <ul class="nav-list">
          <li>🏷️</li>
          <li class="nav-item"><a href="">标签</a></li>
        </ul>
      </nav> -->
      <div class="timeline-container">
        <div class="timeline-list-userhome">
          <Major></Major>
        </div>
        <aside class="index-aside">
          <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="font-weight: bold; font-size: 1.4rem;">👩‍💻站内信息</span>
              </div>
              <div class="box-row">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use>
                </svg>
                <span class="box-card-content" style="font-size: 1.2rem;">喜欢的文章  {{userrestinfo.like_articles | ArrayLength}}</span>
              </div>
              <div class="box-row">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-baogao"></use>
                </svg>
                <span class="box-card-content" style="font-size: 1.2rem;">文章被阅读  {{userrestinfo.article_viewed}}</span>
              </div>
              <div class="box-row">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dingwei"></use>
                </svg>
                <span class="box-card-content" style="font-size: 1.2rem;">发布的文章 {{userrestinfo.my_article | ArrayLength}}</span>
              </div>
            </el-card>
           <el-card class="box-card">
            <div class="box-card-onerow">
              <div class="pointer-box" href="">
                <el-popover
                  placement="top-start"
                  title="QQ"
                  width="70"
                  trigger="hover">
                  <!-- <el-image :src="">
                  </el-image> -->
                  <img src="../../assets/myqq.jpeg"  alt="">
                  <el-button slot="reference">QQ</el-button>
                </el-popover>
              </div>
              <el-divider direction="vertical"></el-divider>
              <div class="pointer-box" href="">
                <el-popover
                  placement="top-start"
                  title="标题"
                  width="70"
                  trigger="hover">
                  <img src="../../assets/mywechat.jpeg"  alt="">
                  <el-button slot="reference">微信</el-button>
                </el-popover>
                </div>
            </div>
          </el-card>
          <div class="more-block">
            <!-- <a href="" class="more-item">
              <div class="more-item-title">收藏集</div>
              <div class="more-item-count">0</div>
            </a>
            <a href="" class="more-item">
              <div class="more-item-title">关注标签</div>
              <div class="more-item-count">0</div>
            </a> -->
            <a href="" class="more-item">
              <div class="more-item-title">加入于</div>
              <div class="more-item-count">{{userrestinfo.date_joined | timeFormat}}</div>
            </a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Yboard from '@/components/page/Yboard';
import Major from '@/components/userpage/Major';
// import Scrollboard from '@/components/page/Scrollboard';
import user from '@/api/user';
import axios from 'axios'

export default {
  name: 'Userhome',
  components: {
      Yboard,
      Major,
  },
  data(){
    return {
      userrestinfo: '',
    }
  },
  filters:{
    ArrayLength:function(arrayValue){
      return arrayValue.length
    },
    timeFormat:function(joined_time){
        let datetime = new Date(joined_time);
        let year = datetime.getFullYear();
        let month = datetime.getMonth();
        let date = datetime.getDate();
        let hour = datetime.getHours();
        let minute = datetime.getMinutes();
        let second = datetime.getSeconds();
        let result1 = year + 
                    '-' + 
                    ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                    '-' + 
                    ((date + 1) < 10 ? '0' + date : date) + 
                    ' ' + 
                    ((hour + 1) < 10 ? '0' + hour : hour) +
                    ':' + 
                    ((minute + 1) < 10 ? '0' + minute : minute) + 
                    ':' + 
                    ((second + 1) < 10 ? '0' + second : second);
        return result1
      
    }
  },
  mounted() {
    user.retrieuserinfo().then(res => {
      // console.log(res)
      this.userrestinfo = res;
      this.$store.state.user_article_info = res;
    })
  }
}

</script>

<style scoped>
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  /* 960px */
}

/* 标签 nav  */
.view-nav, .view-nav:before {
  left: 0;
  background-color: #fff;
}
.view-nav {
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 3.883rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
  transition: .2s;
  transform: translateZ(0);
}
/* .view-nav:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  height: 200%;
  z-index: -1;
} */

.nav-list {
  position: relative;
  /* max-width: 960px; */
  max-width: 1100px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  line-height: 1;
}

.view-nav .nav-list .nav-item {
  height: 100%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  color: #71777c;
  padding: 0 1rem;
}
.nav-item {
  position: relative;
  cursor: pointer;
}

/* 主体 container */
.timeline-container {
  position: relative;
  margin-top: .33rem;
}

.view-container {
  margin-top: 5.6rem;
}

/* list-view */
.timeline-list-userhome {
  /* margin-right: 21.667rem; */
  border-radius: 2px;
  /* width: 700px; */
  width: 820px;
  /* background-color: #fff; */
}

/* aside */
.index-aside {
  position: absolute;
  top: 0;
  right: 0;
  width: 14rem;
  z-index: 1;
}

.box-row {
  display: flex;
  align-items: center;
  margin-bottom: .8rem;
}
.box-card {
    margin-bottom: 1.1rem;
}
.box-card-onerow {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}
.pointer-box {
  flex: 1 1 auto;
  text-align: center;
  color: #31445b;
}

/* more-block (colorless) */
.more-block .more-item {
  display: flex;
  padding: .8rem .4rem;
  font-size: 1.2rem;
  color: rgb(192, 190, 190);
  border-top: 1px solid rgba(125, 125, 128, 0.8);
}
.more-block .more-item:last-child {
  border-bottom: 1px solid rgba(125, 125, 128, 0.8);
}
.more-item-title {
  margin-right: auto;
  font-size: 1rem;  
}
.more-item-count {
  font-size: 1rem;
}
</style>