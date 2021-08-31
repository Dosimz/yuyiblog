<template>
  <div class="main-body">
    <!-- <div class="Awesome">
      <h1>Shall we began?</h1>
    </div> -->
    <!-- <MainHeader></MainHeader> -->
    <!-- <router-view></router-view> -->
    <Midlayout></Midlayout>
  </div>
</template>

<script>
// import MainHeader from '@/components/common/MainHeader'
import Midlayout from '@/components/page/Midlayout'
// import Userhome from '@/components/userpage/Userhome'
import axios from 'axios'
export default {
  name: 'Awesome',
  components: {
    // MainHeader,
    Midlayout,
    // Userhome,
  },
  //   mounted(){
  //   var _this = this;
  //   axios.get('http://127.0.0.1:8000/api/v1/blog').then(function(data){
  //   // console.log(data.data);
  //   _this.$store.state.allList = data.data;
  //   // console.log(_this.$store.state.allList)
  //   })
  // }
}
</script>


<style scoped>
/* .h1 {
  top: 10%;
} */
</style>
