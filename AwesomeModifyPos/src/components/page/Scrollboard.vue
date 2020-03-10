<template>
  <div>
      <header>
        <nav class="y-header">
          <ul class="y-nav-list">
            <li><a href="">热门</a></li>
            <el-divider direction="vertical"></el-divider>
            <li><a href="">最新</a></li>
            <el-divider direction="vertical"></el-divider>
            <li><el-input placeholder="请输入内容" v-model="search" clearable></el-input></li>
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
                  <li class="meta-item">博文</li>
                  <li class="meta-item"><a href="">{{blog.author.name}}</a></li>
                  <li class="meta-item">{{ blog.modified_time | formatDate }}</li>
                  <li class="meta-item"><span v-for="(tag, i) in blog.tags" :key="i"><a href="">{{tag}}/</a></span></li>
                </ul>
              </div>
              <div class="y-title"><a class="y-title_a">{{blog.title}}</a></div>
              <div>
                <svg class="icon icon-trans" aria-hidden="true">
                  <use xlink:href="#icon-xihuan2"></use>
                </svg>
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
        // blogs:'',
        blogId: '',
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
      router(blog) {
        // scrollTo(0, 0);
        // console.log(blog)
        this.$router.push({ //路由跳转
          // path: '/blog/' + 1
        });
      },
    },
    computed:{
      // getDatas(){
      //   return this.$store.state.allList;
      // }
    filteredBlogs:function(){
      return this.$store.state.allList.filter((blog) =>{
        var field = blog.title
        // if (blog.tags[0].match(this.search)) {
        //   return true
        // }
        // else
       if (field.toLowerCase().match(this.search)) {
          return true
        } else if (field.toUpperCase().match(this.search)) {
           return true
        } else {
        return blog.title.match(this.search);
        }
      })
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
    axios.get('http://127.0.0.1:8000/api/v1/blog').then(function(data){
    // console.log(data.data);
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
  padding: 1.5rem 2rem;
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

.y-title a {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  color: #212121;
  margin: .5rem 0 1rem;
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