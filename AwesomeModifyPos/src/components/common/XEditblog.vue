<template>
<div>
  <header class="tapbar">
    <input v-model="title_value" type="text" class="tap-input" placeholder="输入文章标题..." maxlength="44">
    <div class="tap-rightbox">
      <!-- <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">ss</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <div class="tagsdisplay" ref="tagslist">
        <el-tag :key="tag" v-for="(tag) in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)" :title="tag.id">
          {{tag.name}}
          <!-- {{ tag.id }} -->
        </el-tag>
        <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
          @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
      <el-button type="info" @click="issue" plain>发布文章</el-button>
    </div>
  </header>
  <div class="editor">
      <mavon-editor v-model="value" id="editor" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" ></mavon-editor>
  </div>
</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import { Message } from 'element-ui';
import user from '@/api/user'
import axios from 'axios'
export default {
  name: "Editblog",
  components: {
    mavonEditor
  },
  data() {
      return {
          title_value: '',
          value: '',
          dynamicTags: '',
          inputVisible: false,
          inputValue: ''
      }
  },
  methods: {
    issue(){
        // console.log(this.$refs.tagslist.childNodes.length - 2)
        // console.log(this.$refs.tagslist.childNodes)
        var inner_tags = new Array()
        for (var i=0; i < this.$refs.tagslist.childNodes.length-2; i++){
          // console.log('循环中' + i)
          // str = str.replace(/(\s*$)/g,"");
          inner_tags[i] = this.$refs.tagslist.childNodes[i].innerText.replace(/(\s*$)/g,"")
          // console.log(inner_tags[i])
        }
        if (inner_tags[0]==undefined){
          this.$message({
            type: 'warning',
            message: '不能没有标签哦'
          });
        } else if (this.title_value == '' || this.value == ''){
          this.$message({
            type: 'warning',
            message: '不能为空哦'
          });
        } else {
          // console.log(inner_tags)
          // console.log(this.value + '/n' + this.title_value)
          // console.log(this.$store.state.token)
          var _it = this
          this.$axios({
            url: 'http://127.0.0.1:8000/blogs/',
            method: 'post',
            data: JSON.stringify({
              'title': this.title_value,
              'body': this.value,
              'tags': inner_tags,
            }),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT '+ _it.$store.state.token
            }
          }).then(res=>{
            // console.log(this.$store.state.token)
            this.$message({
              showClose: true,
              message: '发布成功'
            });
            // 组件刷新
          // 进入主页
          this.$router.push({
            path: '/'
          })
          })
        }

        
        // user.issue(this.title_value, this.value, inner_tags).then(response => {
        //   this.$message({
        //     message: '发布成功',
        //     type: 'success'
        //   });
        //   // this.loginFormVisible = false
        // })
        //   issue(title, body, tags) {
        //   // tags = tags.toString()
        //   return request({
        //     url: '/blogs/',
        //     method: 'post',
        //     data: JSON.stringify({
        //       'title': title,
        //       'body': body,
        //       'tags': tags,
        //     })
        //   })
        // },


    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push({'name': inputValue, });
          
          user.newtag(this.inputValue).then(response => {
            this.$message({
              message: '新建了一个标签',
            });
          // this.loginFormVisible = false
          })
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
    // 绑定 @imgAdd event
    $imgAdd(pos, $file){
      // 第一步，将图片上传到服务器
      var formdata = new FormData();
      formdata.append('image', $file);
      axios({
          url: 'server url',
          method: 'post',
          data: formdata,
          headers: { 'Content-Type': 'multipart/form-data' },
      }).then((return_data) => {
          // 处理返回的数据
          $vm.$img2Url(pos, url);
      })
    },
  },
    mounted(){
    var _this = this;
    // axios.get('http://127.0.0.1:8000/blogs').then(function(data){
    axios.get('http://127.0.0.1:8000/tags').then(function(data){
    // console.log(data.data)
    _this.dynamicTags = data.data;
    // _this.blogs = data.data
    console.log(_this.dynamicTags)
    });
  }
}
</script>

<style scoped>
.editor {
    /* height: 100%; */
    height: 960px;
}
#editor {
    height: 100%;
}
.tapbar {
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 1.4rem;
  height: 5rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 100;
}

.tap-input {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 600;
  color: #000;
  border: none;
  outline: none;
  flex: 1 1 auto;
  height: 100%;
}

.tap-rightbox {
  display: flex;
  align-items: center;
}
.tagsdisplay {
  display: flex;
  margin-right: 4rem;
}

.el-tag + .el-tag {
    margin-left: 10px;
  }
.button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
.input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

</style>