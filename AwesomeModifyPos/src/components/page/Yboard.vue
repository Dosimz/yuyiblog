<template>
  <div class="sidebar-block">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>✨Welcome</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
        <div class="text item">
          <div class="welcome-line">
            <svg class="icon icon-trans4" aria-hidden="true">
              <use xlink:href="#icon-chengshi"></use>
            </svg>
            <!-- <span>{{ infosbasic.admin_area }}</span> -->
            <!-- <span>{{ infosbasic.parent_city }}</span> -->
          </div>
          <!-- <div class="welcome-line">
            <svg v-if="weathernow.cond_txt == '晴'" class="icon icon-trans5" aria-hidden="true">
              <use xlink:href="#icon-qingtian"></use>
            </svg>
            <svg v-if="weathernow.cond_txt == '小雨'" class="icon icon-trans5" aria-hidden="true">
              <use xlink:href="#icon-xiaoyu"></use>
            </svg>
            <svg v-if="weathernow.cond_txt == '多云'" class="icon icon-trans5" aria-hidden="true">
              <use xlink:href="#icon-duoyun"></use>
            </svg>
            
            <svg class="icon icon-trans5" aria-hidden="true" style="margin-right: .5rem">
              <use xlink:href="#icon-wendu-sheshidu"></use>
            </svg>
            
          </div>
          <div class="welcome-line">
            <svg class="icon icon-trans5" aria-hidden="true">
              <use xlink:href="#icon-feng"></use>
            </svg>
            
          </div>
          <div class="welcome-line">
            <svg class="icon icon-trans5" aria-hidden="true">
              <use xlink:href="#icon-fengsu"></use>
            </svg>
            <span style="margin-right: 1.2rem;"><i style="color: #757575; margin-right: .5rem;">风速</i>{{ weathernow.wind_spd }}</span>
            
          </div> -->
        </div>
    </el-card>
    <el-card class="box-card" >
        <div slot="header" class="clearfix">
        <span>🗂标签集</span>
        </div>
        <el-tag v-for="tag in tags" :key="tag.name" @click="conveymatch($event)">{{ tag.name }}</el-tag>     
    </el-card>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span>🔥Hot Range by Views</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <div v-for="(blog_x, index) in blogs.sort((a,b)=>a.views-b.views).reverse()" :key="index" class="text item">
          <!-- <div v-for="(blog_x, index) in rangeblogs" :key="index" class="text item">           -->
          <!-- <el-button>{{ blog.title }}</el-button> -->
          <span>{{ blog_x.title }}</span>
        </div>
    </el-card>
  </div>
</template>

<script>
// import Loading from '@/components/loading';
import axios from 'axios'
export default {
  // components:{
  //   Loading,
  // },
  data() {
    return {
      tags: '',
      someinfos: '',
      infosbasic: '',
      weathernow: '',
      blogs: '',
      // loading: true,
    }
  },
  methods: {
    conveymatch(e) {
      console.log(e.target.innerHTML)
      this.$store.dispatch("handleConveyValue", e.target.innerHTML)
    },

  },
  mounted(){
    var _this = this;
    // axios.get('http://127.0.0.1:8000/blogs').then(function(data){
    axios.get('http://127.0.0.1:19700/tags').then(function(data){
    // console.log(data.data)
    _this.tags = data.data;
    // _this.loading1 = false
    // _this.$store.commit('reloading')
    // console.log(_this.$store.commit('reloading'))
    // _this.blogs = data.data
    // console.log(_this.$store.state.allList)
    });
    axios.get('http://127.0.0.1:19700/blogs').then(function(data){
    // console.log(data.data)
    _this.blogs = data.data;
    // _this.$store.commit('reloading')

    });
    // axios.get('https://free-api.heweather.net/s6/weather/now?location=auto_ip&key=0524de147edc467b86796cc558e3cbc7')
    //                     .then(function(res){
    //   // console.log(res.data.HeWeather6[0])
    //   _this.someinfos = res.data.HeWeather6[0]
    //   _this.infosbasic = res.data.HeWeather6[0].basic
    //   _this.weathernow = res.data.HeWeather6[0].now
    //   _this.loading = false
    //   // _this.$store.commit('reloading')
    // })
    
  },

  computed:{
    rangeblogs: function() {
      // return this.blogs.sort((a,b)=>a.views-b.views).reverse();
      function highest(){ 
      return [].slice.call(arguments).sort(function(a,b){ 
        return b.views - a.views; 
      }); 
      }
      return highest(this.blogs)
    },
    // weather_relate: function(weather_char) {
    //   var weather_dict = new Array();
    // }

    // filterHotBlogs:function(){
    //   return this.$store.state.allList.filter((blog) =>{
    //     // var field = blog.title
    //     console.log(blog.views)
    //     return blog.title.match(this.search);
        
    //   })
    //   // console.log(this.$store.state.ctom)
    // }
    },
}
</script>

<style>
/* .icon {
  font-size: 30px;
  color: darkorange;
} */
/* .el-tag + .el-tag {
  margin-left: 8px;
} */
.el-tag {
  margin-left: 10px;
  margin-bottom: 8px;
}
.box-card {
  margin-bottom: 1rem;
}
.icon-trans5 {
  font-size: 1.4rem;
}
.welcome-line {
  display: flex;
  margin-top: .4rem;
  align-items: center;
}
</style>