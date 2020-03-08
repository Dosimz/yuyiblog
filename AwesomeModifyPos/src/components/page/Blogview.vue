<template>
  <div>
    <div class="main-container">
      <div class="view-container">
      <!-- <nav class="view-nav">
        <ul class="nav-list">
          <li>🏷️</li>
          <li class="nav-item"><a href="">标签</a></li>
        </ul>
      </nav> -->
        <div class="timeline-container">
          <div class="timeline-list">
            <el-card id="blog">
              <el-link :underline="false" @click="back()"><i class="el-icon-back">Back</i></el-link>
              
              <!-- 为了blogId值改变事件会被watch到 -->
              <!-- <p style="display: none">{{blogId = this.$route.params.blogId}}</p> -->
              <!-- 放 retrun 里面不香吗？ -->

              <div id="article-title">
                <h2 style="text-align: center">{{blog.title}}</h2>
              </div>
              <div style="text-align: center">
                <p>
                  <span class="el-icon-time hidden-xs-only">&nbsp;{{blog.modified_time | formatDate}}</span>

                  <span class="el-icon-view hidden-xs-only" style="margin-left: 100px">&nbsp;{{blog.views}}</span>

                  <span class="el-icon-chat-line-square hidden-xs-only" style="margin-left: 100px">&nbsp;评论（开发中...）</span>
                  <span class="el-icon-user-solid hidden-xs-only" style="margin-left: 150px">&nbsp;{{blog.author.name}}</span>
                </p>
                <!-- <p>
                  <span>
                    <span v-for="tag in catchTagName(tags)">
                      <el-tag type="success" style="margin-left: 5px">标签</el-tag>
                    </span>
                  </span>
                </p> -->
              </div>


              <mavon-editor v-model="body" id="editor" :toolbarsFlag="false" :subfield="false" defaultOpen="preview"></mavon-editor>
              <!-- 以下是预览模式配置 -->
              <!-- v-model="body" -->
              <!--:toolbarsFlag="false"  :subfield="false" defaultOpen="preview"-->
              <!-- 
                    <div style="margin: 0 auto;width: 20%" class="hidden-xs-only" v-if="userReward!=undefined&&userReward!==null">
                      <br/>
                      <el-popover placement="bottom" width="250px" height="250px" trigger="hover">
                        <img alt="打赏码" :src="userReward" width="250px" height="250px"/>
                        <el-button type="text" slot="reference" icon="el-icon-trophy" round>写的不错，打赏一个</el-button>
                      </el-popover>
                    </div> -->

                      <!-- 分割线 -->
              <el-divider/>
              

              <div id="discuss" class="hidden-xs-only">

                <!-- <div style="width: 50%;margin-left: 2.5%;padding-top: 2%" v-if="getStoreName()!=''">
                  <el-input v-model="discussBody" placeholder="请输入评论内容" style="width: 40%" size="mini"></el-input>
                  <el-button type="primary" style="width: 10%" size="mini" @click="sendDiscuss">评论</el-button>
                </div> -->

                <!-- 评论部分 -->
            
                  <!-- 评论下的回复部分 -->
                
              </div>
            </el-card>
          </div>
          <aside class="index-aside">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>🗂标签集</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    </div>
                    <!-- <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    </div> -->
                </el-card>
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>🗂标签集</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    </div>
                    <!-- <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    </div> -->
                </el-card>
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>🗂标签集</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    </div>
                    <!-- <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    </div> -->
                </el-card>
          </aside>
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from 'mavon-editor'

export default {
  name: "Blogview",
  components: {
    mavonEditor
  },
  data() {
    return {
      id: this.$route.params.blogId,
      blog: {},
      body: ''
   }
  },
  filters: {
      // 自定义过滤器
     formatDate: function(value){
      var dateset = new Date(value);
      var year = dateset.getFullYear() + '年';
      var month = dateset.getMonth() + '月';
      var date = dateset.getDate() + '日';

      return [year, month, date].join('');
      
      // if (days >= 1) {
      //   return days + "天前"
      // } else if (hours >= 1) {
      //   return hours
      // } else if (mins >= 1) {
      //   return mins
      // }
     }
    },
    created(){
      let that = this
      axios.get('http://127.0.0.1:8000/api/v1/blog/' + that.id).then(function(data){
        console.log(data.data.title);
        that.blog = data.data
        that.body = data.data.body
      })
    },
    methods: {
      back() {
        history.back()
      }
    }
}
</script>

<style scoped>
#article-title {
  font-size: 1.5rem;
  line-height: 1.5;
}
h2 {
  font-weight: 444;
}


/* 通用了 Midlayout 和 Yboard 里 style */

  /* 960px */
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
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