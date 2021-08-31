<template>
  <div class="bbs-block">
    <div class="bbs-block-email bbs-block-item">
      留言请点击后面图标发送邮件<a href="mailto:921207964@qq.com?subject=留言&body=把想说的话用邮件发给我吧">  📪</a>
    </div>
    <div class="bbs-block-item">
      <!-- <iframe src="https://gate.ofo.moe/" id="myiframe" width="400" height="700"></iframe> -->
      <!-- <p>{{ this.text_list }}</p> -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>热搜</span>
            <el-button style="float: right; padding: 3px 0" type="text">更换榜单</el-button>
        </div>
        <div v-for="(item, i) in this.text_list" :key="i" class="text item">
          <a :href="link_list[i]">{{item}}</a>
        </div>
      </el-card>
      <!-- <ul class="hot-trends-ul">
        <li class="top3" v-for="(item, i) in this.text_list" :key="i">
            <a :href="link_list[i]">{{item}}</a>
        </li>
      </ul> -->
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      text_list: '',
      link_list: 'ss'
    }
  },
  mounted(){
    var _this = this;
    axios.get('http://127.0.0.1:8000/hosttrends').then(function(data){
    // console.log(data.data.text)
    // console.log(data.data.link)
    _this.text_list = data.data.text;
    _this.link_list = data.data.link;

    // var obj = {};
    // for (var i = 0; i < _this.text_list.length; i++) {
    //     obj[_this.text_list[i]] = _this.link_list[i]
    // }
    // console.log(obj)
    // console.log(_this.text_list)
    });
  }
}
</script>

<style>
.bbs-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bbs-block-email{
  font-size: 1.4rem;
  color: whitesmoke;
  margin: 3rem;
}
.hot-trends-ul {
  font-size: 1.2rem; 
}
.hot-trends-ul li a {
  color: black;
}
</style>