<style>
</style>

<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <head-nav></head-nav>
    <router-view />
    <foot-nav></foot-nav>
  </div>
</template>
<script>

import headNav from './components/header/header.vue'
//import vipHots from './components/vipHots/vipHots.vue'
import footNav from './components/footer/footer.vue'
export default {
  data () {
    return {
      routerFlag: true
    }
  },
  created () {
    this.load(),
      this.routerTo()
  },
  watch: {
    "$route": "routerLink"
  },
  methods: {
    start () {
      this.$Loading.start();
    },
    finish () {
      this.$Loading.finish();
    },
    error () {
      this.$Loading.error();
    },
    routerTo () {
      //order
      // if (this.$route.path === "/g" || this.$route.path === "/404") {
      //   this.routerFlag = false
      // }
      //console.log(this.$route.path === "/user")
    },
    load () {
      //console.log(1)

    },
    routerLink () {
      //console.log("aaa=", this.$route.path)
      // if (this.$route.path === "/user") {
      //   this.routerFlag = false
      // }
    }
  },
  components: {
    headNav,
    footNav

  }
}
</script>

<style lang="less">
-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  min-height: 100%;
  position: relative;
  background: #f1f1ef;
}
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Microsoft YaHei" !important;
  margin: 0;
  padding: 0;
  /*background-color: #eeeeee;*/
  color: #666 !important;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 2.5%;
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
  .none {
    display: none !important;
  }
}
@media screen and (max-width: 992px) {
  .container {
    width: 768px !important;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 18px !important;
  }
  .container {
    width: 100% !important;
  }
  .img {
    img {
      width: 160px !important;
      height: auto !important;
      margin: 1% auto;
    }
  }
  .box {
    margin-right: 0 !important;
    width: 100% !important;
    /* margin: 4% 0 5% 0 !important;*/
  }
}
::-webkit-scrollbar {
  width: 0px;
}

//(<768px)	小屏幕 平板 (≥768px)	中等屏幕 桌面显示器 (≥992px)	大屏幕 大桌面显示器 (≥1200px)
</style>
