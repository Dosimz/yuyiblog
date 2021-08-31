<template>
  <div class="myarticle-list-box">
    <!-- <el-main v-loading="isLoading"> -->
    <div class="myarticle-list">
      <el-card shadow="hover" v-for="(myarti, index) in myarticles" :key="index">
        <div class="article-content">
          <div class="first-line">
            <div class="line-title">{{myarti.title}}</div>
            <div><el-tag type="info" v-for="(tag, indexx) in myarti.tags" :key="indexx">{{tag.name}}</el-tag></div>
          </div>
          <div class="lineto-body">{{myarti.body.slice(0, 80) | regChinese}}</div>
          <!-- <el-button type="danger" plain>删除</el-button> -->
          <div class="last-line">
            <div class="tool-bar">
              <el-button size="small" type="info" icon="el-icon-view" circle></el-button>
              <el-button size="small" type="primary" icon="el-icon-edit" circle></el-button>
              <el-button size="small" type="danger" icon="el-icon-delete" circle></el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <!-- </el-main> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      myarticles: '',
      isLoading: true,
    }
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
  },
  mounted(){
    this.myarticles = this.$store.state.user_article_info.my_article
    console.log(this.$store.state.user_article_info.my_article)
    // this.isLoading = false
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
  /* height: 164px; */
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
</style>