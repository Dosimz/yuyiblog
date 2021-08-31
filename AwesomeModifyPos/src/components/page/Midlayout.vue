<template>
  <div class="main-container">
    <div class="view-container">
      <!-- <nav class="view-nav">
        <ul class="nav-list">
          <li>🏷️</li>
          <li class="nav-item"><a href="">标签</a></li>
        </ul>
      </nav> -->
    <!-- <transition name="fade">
      <loading v-if="this.$store.state.page_loading"></loading>
      <div class="timeline-container">
        <div class="timeline-list">
          <Scrollboard></Scrollboard>
        </div>
        <aside class="index-aside">
          <Yboard></Yboard>
        </aside>
      </div>
    </transition>
                    -->
    </div>
  </div>
</template>

<script>
// import Loading from '@/components/loading';
import Yboard from '@/components/page/Yboard';
import Scrollboard from '@/components/page/Scrollboard';

export default {
  name: 'Midlayout',
  components: {
      Yboard,
      Scrollboard,
      Loading,
  },
  data() {
    return {
      // isLoading: true
    }
  },
  
  mounted(){
    // if (this.$store.state.page_loading==false) {
    //   this.isLoading = this.$store.state.page_loading
    // }
    // console.log(this.$store.state.page_loading)
  }
}
</script>

<style>


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
.timeline-list {
  /* margin-right: 21.667rem; */
  border-radius: 2px;
  /* width: 700px; */
  max-width: 820px;
  background-color: #fff;
}

/* aside */
.index-aside {
  position: absolute;
  top: 0;
  right: 0;
  width: 14rem;
  z-index: 1;
}
</style>
