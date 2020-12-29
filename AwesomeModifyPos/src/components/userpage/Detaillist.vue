<template>
  <div class="detail-list">
    <div class="list-header">
      <div class="header-content">
        <router-link :to="'/user/articles'" class="link-item">
          <el-link icon="el-icon-notebook-2" type="info">文章</el-link>
        </router-link>
        <router-link :to="'/user/likes'" class="link-item">
          <el-link icon="el-icon-date" type="info">日历</el-link>
        </router-link>
        <router-link :to="'/user/favors'" class="link-item">
          <el-link icon="el-icon-collection" type="info">收藏</el-link>
        </router-link>
        <router-link :to="'/user/action'" class="link-item">
          <el-link icon="el-icon-s-marketing" type="info">星座</el-link>
        </router-link>
      </div>
    </div>   
    <div class="list-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.list-header {
  position: relative;
  margin: 0;
  padding: 0;
  height: 4rem;
  background-color: #fff;
  border-radius: .2rem .2rem 0 0;
  border-bottom: 1px solid #ebebeb;
  z-index: 100;
}

.header-content {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  /* max-width: ; */
  white-space: nowrap;
}

.link-item {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 7rem;
  height: 100%;
}
.el-link {
  font-size: 1.1rem;
  font-weight: 400;
  /* color: #31445b; */
}
</style>