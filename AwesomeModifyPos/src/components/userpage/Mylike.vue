<template>
  <div class="mylike-list-box">
    <div class="mylike-list">
      <el-calendar v-model="value">
      </el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style>

</style>