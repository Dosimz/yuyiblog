<template>
  <div class="mylike-list-box">
    <div class="myarticle-list">
      <el-card shadow="hover" v-for="(myarti, index) in myarticles" :key="index">
        <div class="float-article">
          <el-avatar :size="60" :src="myarti.author.avatar | mixUrl"></el-avatar>
          </div>
        <div class="article-content">
          <div class="first-line">
            <div class="line-title">{{myarti.title}}</div>
            <div><el-tag type="info" v-for="(tag, indexx) in myarti.tags" :key="indexx">{{tag.name}}</el-tag></div>
          </div>
          <div class="lineto-body">{{myarti.body.slice(0, 90) | regChinese}}</div>
          <!-- <el-button type="danger" plain>删除</el-button> -->
          <div class="last-line">
            <div class="tool-bar">
              <el-button size="small" type="info" icon="el-icon-view" circle></el-button>
              <!-- <el-button size="small" type="danger" icon="el-icon-delete" circle></el-button> -->
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      myarticles: '',
    }
  },
  computed:{

  },
  filters:{
    regChinese:function(content) {
      // \u4E00-\u9FA5\uF900-\uFA2D
        var pattern = new RegExp("[#>]");
        var rs = '';
        for (var i = 0; i < content.length; i++) {
          rs = rs + content.substr(i, 1).replace(pattern, '')
        }
        return rs + '...'
    },
    mixUrl: function(avatarUrl) {
      // console.log('http://127.0.0.1:8000/media/' + avatarUrl)
      return 'http://127.0.0.1:8000/media/' + avatarUrl
    }
  },
  mounted(){
    this.myarticles = this.$store.state.user_article_info.like_articles
    // console.log(this.$store.state.user_article_info.my_article)
  }
}
</script>

<style scoped>
.first-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.line-title {
  font-size: 1.4rem;
  font-weight: 444;
}
.lineto-body {
  color: rgb(99, 100, 102);
  /* width: ; */
}
.article-content {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.el-card {
  margin-top: .1rem;
}
.el-tag {
  margin-right: .5rem;
}
.last-line {
  display: flex;
  /* margin-left: auto; */
}
.tool-bar {
  margin-left: auto;
  margin-right: .5rem;
}
.float-article{
  float: left;
  margin-right: 1rem;
}
</style>