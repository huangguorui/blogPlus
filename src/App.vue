<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <head-nav></head-nav>
    <router-view/>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
import headNav from './components/header/header.vue'
import footNav from './components/footer/footer.vue'
export default {
  created () {
    this.load()
  },
  methods: {

    load () {
      console.log(1)

    }
  },
  components: {
    headNav,
    footNav

  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei' !important;
  margin: 0;
  padding: 0;
  background-color: #eeeeee;
  color: #666 !important;
}
#app {
  width: 100%;
  height: 100%;
}
.container {
  width: 1200px;
  margin: 0 auto;
  height: auto;
  box-sizing: border-box;
}

/* 超小屏幕（手机，小于 768px） */

/* 小屏幕（平板，大于等于 768px） */

/* 中等屏幕（桌面显示器，大于等于 992px） */

/* 大屏幕（大桌面显示器，大于等于 1200px） */

@media screen and (max-width: 1200px) {
  .container {
    width: 992px !important;
  }
}
@media screen and (max-width: 992px) {
  .container {
    width: 768px !important;
  }
}

@media screen and (max-width: 768px) {
  .container {
    width: 100% !important;
  }
}
//(<768px)	小屏幕 平板 (≥768px)	中等屏幕 桌面显示器 (≥992px)	大屏幕 大桌面显示器 (≥1200px)
</style>
