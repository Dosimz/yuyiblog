<template>
  <div id="app">
    <!-- 组件刷新 -->
    <router-view v-if="isRouterAlive"></router-view>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import MainHeader from '@/components/common/MainHeader'
import axios from 'axios'
export default {
  name: 'App',
  provide (){
    return {
      reload: this.reload
    }
  },
  data (){
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    }
  },
  components: {
    MainHeader
  },
  // mounted(){
  //   var _this = this;
  //   axios.get('http://127.0.0.1:8000/test/').then(function(data){
  //   // console.log(data.data);
  //   _this.$store.state.allList = data.data;
  //   })
  // }
}
</script>

<style>
/* #app {
} */
a {
  text-decoration: none;
}

ul {
  list-style-type: none;
}
</style>
