<template>
  <div>
      <el-backtop> </el-backtop>
      <header>
        <nav class="y-header">
          <ul class="y-nav-list">
            <li>
              <!-- <div class="block"> -->
                <!-- <span class="demonstration">无默认值</span> -->
                <el-color-picker v-model="color2" size="small"></el-color-picker>
              <!-- </div> -->
            </li>
            <el-divider direction="vertical"></el-divider>
            <li>
              <!-- <a href="">XX</a> -->
              <el-color-picker v-model="color" size="small" show-alpha></el-color-picker>
            </li>
            <el-divider direction="vertical"></el-divider>
            <li><el-input placeholder="请输入内容" v-model="search" @focus="clearvalue" clearable></el-input></li>
          </ul>
        </nav>
        </header>
      <ul class="e-list">
        <li v-for="(blog, i) in filteredBlogs" :key="i" class="item">
          <router-link :to="'/blog/' + blog.id">
            <div class="content-box">
              <div class="list-view">
                <div class="info-row">
                  <ul class="meta-list">
                    <li>
                      <div>
                      <svg class="icon icon-trans2" aria-hidden="true">
                        <use xlink:href="#icon-wenzhang"></use>
                      </svg>
                      </div>
                    </li>
                    <li class="meta-item"><a href="">{{blog.author}}</a></li>
                    <li class="meta-item">{{ blog.modified_time | formatDate }}</li>
                    <li class="meta-item">                
                      <span v-for="(tag, i) in blog.tags" :key="i">
                      <svg class="icon icon-trans3" aria-hidden="true">
                        <use xlink:href="#icon-biaoqian"></use>
                      </svg>
                        <a href="">{{tag.name}}</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="y-title"><a class="y-title_a">{{blog.title}}</a></div>
                <div>
                  <ul class="y-title-action-list">
                    <li>
                      <div class="action-list-element">
                        <svg class="icon icon-trans4" aria-hidden="true">
                          <use xlink:href="#icon-xin"></use>
                        </svg>
                        <span class="meta-item">{{ blog.like_num }}</span>
                      </div>
                    </li>
                    <li>
                      <div class="action-list-element">
                        <svg class="icon icon-trans4" aria-hidden="true">
                          <use xlink:href="#icon-pinglun"></use>
                        </svg>
                        <span class="meta-item">{{ blog.review_num }}</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <svg class="icon icon-trans4" aria-hidden="true">
                          <use xlink:href="#icon-dianji"></use>
                        </svg>
                        <span class="meta-item">{{ blog.views }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </router-link>
        </li>
      </ul>
      <!-- <ul> 
        <li v-for="(blog, i) in blogs" :key="i">
          {{ blog.title }}
        </li>
      </ul> -->
      <!-- <h2>{{ ctom_value }}lll</h2> -->
  </div>

  <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul> -->
</template>
<script>
import axios from 'axios'
  export default {
    data () {
      return {
        search: '',
        // search: mid_value,
        // blogs:'',
        blogId: '',
        color2: '',
        color: 'rgba(19, 206, 102, 0.8)',
      }
    },
    filters: {
      // 自定义过滤器
     formatDate: function(value){
      var dateset = new Date(value);
      var datenow = new Date();
      var dateminus = datenow.getTime() - dateset.getTime()
      var days = Math.floor(dateminus/(24*3600*1000))

      var days_remainder = dateminus%(24*3600*1000)    // 计算天数后剩余的毫秒数
      var hours = Math.floor(days_remainder/(3600*1000))

      var hours_remainder = days_remainder%(3600*1000)    // 计算小时后剩余的毫秒数
      var mins = Math.floor(hours_remainder/(60*1000))

      var mins_remainder = hours_remainder%(60*1000)
      var seconds = Math.round(mins_remainder/1000)
      
      if (days >= 1) {
        return days + "天前"
      } else if (hours >= 1) {
        return hours + "小时前"
      } else if (mins >= 1) {
        return mins + "分钟前"
      }
     }
    },
    methods: {
      clearvalue(){
        this.$store.state.ctom_value = ''
        // console.log('+1')
      },
      router(blog) {
        // scrollTo(0, 0);
        // console.log(blog)
        this.$router.push({ //路由跳转
          // path: '/blog/' + 1
        });
      },
    },
    computed:{
      // get_ctom_value:function(){
      //   var mid_value;
      //   mid_value =  this.$store.state.ctom_value
      // },
      
      // ctom_value:function(){
      //   console.log('kk')
      //   return this.$store.state.ctom_value
      // },
    filteredBlogs:function(){
      return this.$store.state.allList.filter((blog) =>{
        if (this.$store.state.ctom_value) {
          this.search = this.$store.state.ctom_value
        }
        var field = blog.title
        // var bool = false
        // console.log(blog.tags.find(obj =>obj.name === this.search))
        if (blog.tags.find(obj =>obj.name === this.search)) {
          return true
        }
        else if (field.toLowerCase().match(this.search)) {
          return true
        } else if (field.toUpperCase().match(this.search)) {
           return true
        } else {
        return blog.title.match(this.search);
        }
      })
      // console.log(this.$store.state.ctom)
    }
    },
    
    created(){
    //   let that = this
    //   axios.get('http://127.0.0.1:8000/test/').then(function(data){
    //     console.log(data.data);
    //     that.blogs = data.data
    //   })
      // this.articleId = this.$route.params.blogId;

    },
    mounted(){
    var _this = this;
    axios.get('http://127.0.0.1:8000/blogs').then(function(data){
    // axios.get('http://127.0.0.1:8000/api/v1/blog').then(function(data){
    // console.log(data.data)
    _this.$store.state.allList = data.data;
    // _this.blogs = data.data
    // console.log(_this.$store.state.allList)
    });
  }
  }
</script>

<style scoped>
header {
  /* background-color: #FFFFFF; */
  /* margin: 20px 0; */
  /* padding: 1px; */
  /* padding: 1.3rem 1rem; */
  border-bottom: 3px solid hsla(0, 0%, 59.2%, .1)
}
.y-header{
  justify-content: flex-start;
  display: flex;
}
.y-nav-list {
  display: flex;
  align-items: center;
  line-height: 1;
  padding-left: 1.4rem;
}
.y-header ul li {
  display: inline-block;
  position: relative;
  margin: 0 0.6em;
  font-size: 1.1rem;
}
.y-header a {
  color: #757575;
}

/* list-view */
.e-list {
  width: 100%;

}
.item:not(:last-child) {
  border-bottom: 3px solid rgba(178, 186, 194, .15)
}
.content-box {
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem;
}


.info-row ul{
  display: flex;
  align-items: baseline;
  white-space: nowrap;
  font-size: 14px;
  /* 清除浏览器 ul 样式 */
  padding-inline-start: 0px;
  margin-block-start: 0%;
  margin-block-end: 0%;
}
.y-title {
    margin: .3rem 0 1rem;
}
.y-title a {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  color: #212121;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
}

.list-view {
  /* background-color: #FFFFFF; */
  /* padding: 20px; */
  /* margin-bottom: 1px; */
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* .meta-list li {

} */
.meta-list a{
  color: #757575;
}
.meta-list .meta-item:not(:last-child)::after {
  content: "·";
  color: #757575;
  margin: 0px 0.2rem;
}

.meta-item {
  color: #757575;
}

.icon-trans {
  font-size: 1.4rem;
}
.icon-trans2 {
  font-size: 1rem;
}
.icon-trans3{
  font-size: .8rem;
  margin-right: 0;
}
.icon-trans4 {
  font-size: 1.4rem;
  margin-right: 0rem;
}

.y-title-action-list {
  display: inline-flex;
  white-space: nowrap;
}
.action-list-element {
  margin-right: 3rem;
}

  /* .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  } */
/* .el-card__header {
  padding: 12px 20px;
} */
  
</style>