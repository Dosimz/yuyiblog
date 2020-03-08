<template>
  <div class="tab-card-box">
    <el-tabs type="border-card" id="tab-card">
      <el-tab-pane label="注册">
        <form action="">
          <input type="text">
        </form>
      </el-tab-pane>
      <el-tab-pane label="密码重置">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tab-card-box {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
#tab-card {
  margin: 6rem auto;
  width: 40rem;
  max-width: 100%;
}
</style>