<template>
  <div>
    <el-backtop></el-backtop>   
    <div class="main-container">
      <div class="view-container">
      <!-- <nav class="view-nav">
        <ul class="nav-list">
          <li>🏷️</li>
          <li class="nav-item"><a href="">标签</a></li>
        </ul>
      </nav> -->
        <div class="timeline-container">
          <div class="timeline-list-duplication">
            <el-card id="blog">
              <el-page-header @back="goBack" content="详情页面"></el-page-header>
              <div id="article-title">
                <h2 style="text-align: center">{{blog.title}}</h2>
              </div>
              <div style="text-align: center">
                <p>
                  <!-- <span class="el-icon-time hidden-xs-only">&nbsp;{{blog.modified_time}}</span> -->
                  <span class="el-icon-view hidden-xs-only">&nbsp;{{blog.views}}</span>
                  <!-- <span class="el-icon-chat-line-square hidden-xs-only" style="margin-left: 100px">&nbsp;{{blog.review_num}}</span> -->
                  <span class="el-icon-user-solid hidden-xs-only" style="margin-left: 150px">&nbsp;{{blog.author}}</span>
                </p>
              </div>
              <mavon-editor v-model="body" id="editor" :toolbarsFlag="false" :subfield="false" defaultOpen="preview" />
                <p>
                  <span>
                    <span v-for="(tag, index) in blog.tags" :key="index">
                      <el-tag type="info" style="margin-left: 5px">{{tag.name}}</el-tag>
                    </span>
                  </span>
                </p>
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
              



                <!-- <div style="width: 50%;margin-left: 2.5%;padding-top: 2%" v-if="getStoreName()!=''"> -->
              <!-- <div class="comment-input" style="width: 100%; background-color:#fafbfc;" @mouseleave="dispearbtn">
                <el-avatar :src="this.$store.state.user.avatar"></el-avatar> 
                <div class="form-box">                  
                  <el-input style="margin-left: 1rem; width: 97%" v-model="comment_input_value" @focus="showbtn" ref="saveInputFocus" placeholder="请输入评论内容" ></el-input>                  
                  <div class="input-action-box" v-show="submitinputbtn">
                    <span>表情</span>
                    <el-button id="elrightbtn" @click="newcomment">提交</el-button>
                  </div>
                </div>
              </div> -->
                <!-- <h2>ssssss</h2> -->            
                  <!-- 评论下的回复部分 -->
                
            </el-card>
            <!-- 评论部分 -->
            <!-- <el-card class="eltwo">
              <div :key="index" v-for="(review, index) in comments" id="commentsList" class="comment-box comment-divider-line">                  
                <el-avatar :src="'http://127.0.0.1:8000/media/' + review.reviewer.avatar"></el-avatar>
                <div class="comment-content-box">
                  <div class="comment-meta-box">
                    <span>{{ review.reviewer.name }}</span>
                  </div>                   
                  <div class="comment-content-content">{{review.content}}</div>
                  <div class="reply-stat">
                    <div class="timestramp">{{review.created_time | formatDate}}</div>
                    <div class="reply-delete">删除</div>
                    <div class="reply-action-box">
                      <div class="reply-like re-action">
                        <svg class="icon comment-like" aria-hidden="true">
                          <use xlink:href="#icon-ziyuan"></use>
                        </svg>
                      </div>
                      <div class="reply-reply re-action">
                        <i class="el-icon-chat-dot-square"></i>
                        <span>回复</span>
                      </div>
                    </div>
                  </div>                
                </div>                  
                </div>
            </el-card> -->
          </div>
          <aside class="index-aside">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>
                      <svg class="icon icon-trans3" aria-hidden="true">
                        <use xlink:href="#icon-resou"></use>
                      </svg>
                      数据来自第三方网站
                    </span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    <iframe src="http://isoyu.com/?a=code&type=top" frameborder="0" scrolling="no" width="190" height="300"></iframe>
                    </div>
                    <!-- <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    </div> -->
                </el-card>
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>
                      <svg class="icon icon-trans3" aria-hidden="true">
                        <use xlink:href="#icon-zuifan"></use>
                      </svg>
                      数据来自官方媒体
                    </span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    <iframe src="https://api.isoyu.com/gy/tj.html" frameborder="0" scrolling="no" width="200" height="500"></iframe>
                    <!-- <iframe src="https://api.isoyu.com/gy/tj.html" allowTransparency="true"  frameborder="0" scrolling="no" width="100%" height="100%"></iframe> -->
                    </div>
                    <!-- <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    </div> -->
                </el-card>
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                    <span>
                      <svg class="icon icon-trans3" aria-hidden="true">
                        <use xlink:href="#icon-ertongshouyang"></use>
                      </svg>
                      失踪儿童信息
                    </span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    <iframe src="https://api.isoyu.com/gy/" frameborder="0" scrolling="no" width="200" height="400"></iframe>
                    </div>
                    <!-- <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                    </div> -->
                    <!-- <el-button @click="deleteheart">点</el-button> -->
                </el-card>
          </aside>
        </div>
      </div>
    </div>
    <!-- <div class="article-suspend-panel">
      <a v-if='hasFavor' @click="deleteheart" class="like-btn panel-btn" >
        <svg class="icon icon-trans" aria-hidden="true">
          <use xlink:href="#icon-xihuan2-copy"></use>
        </svg>
      </a>
      <a v-else @click="addheart" class="like-btn panel-btn" >
        <svg class="icon icon-trans" aria-hidden="true">
          <use xlink:href="#icon-xihuan2"></use>
        </svg>
      </a>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import user from '@/api/user'
import { mavonEditor } from 'mavon-editor'
// import func from '../../../vue-temp/vue-editor-bridge'

export default {
  inject: ['reload'],
  name: "Blogview",
  components: {
    mavonEditor
  },
  data() {
    return {
      id: this.$route.params.blogId,
      blog: {},
      body: '',
      // author: '',
      hasFavor: false,
      comments: '',
      comment_input_value: '',
      submitinputbtn: false,
      // avatar_url: '',
   }
  },
  // computed: {
  //   bondurl: function() {
  //     basicurl = 'http://127.0.0.1:8000/media'
  //     avatar_url = basicurl + review.reviewer.avatar
  //     return avatar_url
  //   }
  // },
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
      axios.get('http://127.0.0.1:19700/blogs/' + that.id).then(function(data){
        that.blog = data.data
        that.body = data.data.body
        // that.mtime = data.d
      });

      // if (that.$store.state.token) {
      //   user.getFavor(that.id).then(response => {
      //     console.log(response.id)
      //       thats.hasFavor = true
      //   });
      // }
    },
    methods: {
      goBack() {
        history.back()
        console.log('go back');
      },
      deleteheart() {
        this.hasFavor = false
        console.log(this.hasFavor)
        user.delFavor(this.id).then((response)=> {
        });
      },
      addheart() {
        this.hasFavor = true
        // this.hasFavor = this.hasFavor ? false : true;
        console.log(this.hasFavor)
        user.addFavor(this.id).then((response)=> {
        });
      },
      newcomment(){
        user.newreviews(this.comment_input_value, this.id).then(response => {
          this.$message({
            message: '评论成功',
            type: 'success'
          });

          // location.reload() 我觉得不行
          this.reload()
        })
      },
      showbtn() {
        this.submitinputbtn = true
        // console.log('我做出了一些改变true')
      },
      dispearbtn(){
        this.submitinputbtn = false
        this.$refs.saveInputFocus.$refs.input.blur();
        // console.log('我做出了一些改变false')
      },
      // holdonfocus() {
      //   this.$refs.saveInputFocus.$refs.input.focus();
      //   console.log(this.$refs.saveInputFocus)
      // },
      tests() {
        // console.log(this.$store.state.user)
        // this.$refs.saveInputFocus.$refs.input.focus();
        // console.log()
        var myDate = new Date();
        console.log(myDate.toLocaleDateString());
        console.log(myDate.getFullYear());        
        console.log(myDate.getMonth());
        console.log(myDate.getDate());
      }
      // deleteheart() {
      //   this.hasFavor = false
      // },
      // addheart() {
      //   this.hasFavor = true
      // },
      // back() {
      //   history.back()
      // }
    },
    mounted(){
      let _this = this
      user.listreview().then(response => {
        let article_filter = response.filter((currentValue) => {
          return currentValue.article == _this.id;
          })
          console.log( article_filter)
          this.comments =  article_filter
          });
      
      if (this.$store.state.token) {
        user.getFavor(this.id).then(response => {
          console.log(response.id)
          this.hasFavor = true
        });
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

.timeline-container {
  position: relative;
  margin-top: .33rem;
}

.view-container {
  margin-top: 5.6rem;
}

  /* 960px */
.main-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
}

/* list-view */
.timeline-list-duplication {
  /* margin-right: 21.667rem; */
  border-radius: 2px;
  /* width: 700px; */
  max-width: 820px;
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

.box-card {
  margin-bottom: 1rem;
}


/* article-suspend-panel */
.article-suspend-panel {
  position: fixed;
  margin-left: 20rem;
  top: 16rem;
}
.panel-btn {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgb(0, 0, 0, .04);
}
.like-btn {
  cursor: pointer;
}
.eltwo {
  margin-top: 4rem;
}

.comment-box {
  display: flex;
}
.comment-content-box {
  margin-left: .9rem;
  flex: 1 1 auto;
}
.comment-meta-box {
  display: flex;
  align-items: center;
  font-size: .8rem;
  line-height: 1.1;
  white-space: nowrap;
  color: #333;
}
.comment-content-content {
  margin-top: .44rem;
  font-size: 1rem;
  line-height: 1.6rem;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-all;
  color: #505050;
}

.reply-stat {
  display: flex;
  margin: .9rem 0;
  font-weight: 300;
}
.timestramp {
  font-size: .9rem;
  color: #8a9aa9;
  cursor: default;
}
.reply-delete {
  font-size: .95rem;
  color: #8a9aa9;
  cursor: pointer;
}
.reply-action-box {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  min-width: 7.8rem;
  color: #8a93a0;
  user-select: none;
}
.comment-like {
  font-size: 1.4rem;
}
.re-action {
  display: flex;
  align-items: center;
  margin-left: .5rem;
  cursor: pointer;
}

.reply-delete {
  margin-left: 4rem;
}
.comment-divider-line {
  margin-right: auto;
  margin-left: auto;
  width: 84%;
  margin-top: 1rem;
  border-bottom: 1px solid #f1f1f1;
}
/* .sub-comment-list {
  margin: 1rem 0;
  padding: 0 0 0 5rem;
  background-color: black;
  border-radius: 3px;
} */
.comment-input {
  display: flex;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;

}
.input-action-box {
  display: flex;
  align-items: center;
  margin: .55rem 0 0;
  margin-left: 1rem; 
  width: 97%
}
.form-box {
  flex: 1 1 auto;
  position: relative;
  /* z-index: 100; */
}
#elrightbtn {
  flex: 0 0 auto;
  margin-left: auto;
  padding: .4rem .9rem;
}
</style>