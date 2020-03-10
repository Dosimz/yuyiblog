<template>
  <div class="detail-list">
    <div class="list-header">
      <div class="header-content">
        <router-link :to="'/user/articles'" class="link-item"><div class="link-item-title">文章</div></router-link>
        <router-link :to="'/user/likes'" class="link-item"><div class="link-item-title">点赞</div></router-link>
        <router-link :to="'/user/favors'" class="link-item"><div class="link-item-title">收藏</div></router-link>
        <router-link :to="'/user/action'" class="link-item"><div class="link-item-title">动态</div></router-link>
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
.link-item-title {
  font-size: 1.2rem;
  font-weight: 400;
  color: #31445b;
}
</style>