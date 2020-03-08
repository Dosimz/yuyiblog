<template>
  <div id="app">
    <!-- <MainHeader></MainHeader> -->
    <router-view/>
  </div>
</template>

<script>
// import MainHeader from '@/components/common/MainHeader'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    // MainHeader
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
