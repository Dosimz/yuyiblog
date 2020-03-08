<template>
  <div class="editor">
      <mavon-editor id="editor" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel" ></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import axios from 'axios'
export default {
  name: "Editblog",
  components: {
    mavonEditor
  },
  data() {
      return {
        //   value: ''
      }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
.editor {
    height: 100%;
}
#editor {
    height: 100%;
}

</style>