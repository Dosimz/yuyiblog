<template>
  <div class="major-area">
    <el-card>
    <div class="user-info-block">
      <div class="avatar">
        <!-- <el-avatar class="" shape="square" :size="30"  :src="url"></el-avatar> -->
      </div>
      <div class="info-box">
        <div class="top">
          <h1 class="username">余漪</h1>
        </div>
        <div class="position">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gongzuo"></use>
          </svg>
          <span class="content">
            <span>在校学习</span>
          </span>
        </div>
        <div class="intro">
          <div title="填写个人介绍" class="info-input">
            变动的字体
          </div>
        </div>
      </div>
      <div class="action-box">
        <div class="link-box">
          <a href="" title="微博">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
          </a>
          <a href="" title="Github">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Github"></use>
            </svg>
          </a>
          <a href="" title="微信">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weixin"></use>
            </svg>
          </a>
        </div>
        <div class="stat-action-block">
          <el-button style="font-size: 1.2rem;">编辑个人资料</el-button>
        </div>
      </div>
    </div>
    </el-card>
    <div class="list-block">
      <Detaillist></Detaillist>
    </div>
  </div>
</template>
<script>
import Detaillist from '@/components/userpage/Detaillist'

export default {
  name: 'Major',
  components: {
    Detaillist
  },
  data() {
      return {
        // url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      } 
  }
}
</script>

<style>
.user-info-block {
  display: flex;
  
}

.avatar {
    background-image: url(https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg);
  flex: 0 0 auto;
  margin-right: 2.4rem;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.info-box {
    flex: 1 1 auto;
    margin-right: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.info-box .top .username {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  color: #000;
}
.info-box .position {
  margin-top: 1rem;
  display: flex;
  font-size: 1rem;
  line-height: 1.5;
  color: #72777b;
  overflow: hidden;
}

 .icon {
  width: 1em; 
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 1.2rem;
  flex: 0 0 auto;
  height: 1.2em;
}
.intro {
  margin-top: .4rem;
  display: flex;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #72777b;
  overflow: hidden;
}

.action-box {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.link-box {
  margin-bottom: auto;
}
.stat-action-block {
  /* display: none;
  margin-top: 1.4rem;
  margin-bottom: 0;
  align-items: flex-end;
  justify-content: space-between; */

}



.list-block {
  margin-top: 1rem;
}
</style>