<template>
    <!-- <el-carousel height="200px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in laohuangli" :key="item">
        <span class="medium">{{ item }}</span>
      </el-carousel-item>
  </el-carousel> -->
  <div class="block" style="text-align: center;">
    <!-- <span class="demonstration">Click 指示器触发</span> -->
    <!-- <el-carousel trigger="click" height="40px" indicator-position="outside">
      <el-carousel-item v-for="item in laohuangli" :key="item">
        <span class="small">{{ item }}</span>
      </el-carousel-item>
    </el-carousel> -->
    
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      http-request=""
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
      return {
        laohuangli: ["庚子(鼠)年三月十五", "白蜡金 建执位", "白蜡金 建执位", "庚不经络织机虚张 辰不哭泣必主重丧", "天恩 月恩 守日 玉宇 青龙", "月建 小时 土府 月刑", "祭祀 解除 教牛马 出行 馀事勿取", "动土 破土 行丧 开光 作梁 安葬 探病"],
        dialogImageUrl: '',
        dialogVisible: false
    };
  },
  methods: {
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(this.dialogImageUrl)
      }
  }
}

</script>

<style>
.el-carousel__item span {
    color: #475669;
    font-size: 1rem;
    opacity: 0.79;
    /* line-height: 200px; */
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel {
    width: 20rem;
    height: 40px;
    text-align: center;
    top: 100px;
    /* margin-right: auto; */
    /* margin-left: auto; */
  }

.block {
  margin-right: auto;
  margin-left: auto;
  top: 100px;
}
</style>