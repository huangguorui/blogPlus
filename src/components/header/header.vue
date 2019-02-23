
  <style scoped>
.index-nav {
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  height: 50px;
  box-sizing: border-box;
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}

.index-nav-frame {
  width: 1200px;
  margin: 0 auto;
}

.index-nav-frame-line {
  color: #333333;
  background: white;
  float: left;
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;
  width: 100px;
  line-height: 50px;
  text-align: center;
  font-weight: 700;
}

.index-nav-frame-line.active {
  /*color: #b63b4d;*/
}

.index-nav-frame-line-center {
  opacity: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  width: 100%;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  /* Firefox 4 */
  -o-transition: all 0.5s;
  /* Opera */
}

.index-nav-frame-line-li {
  width: 100%;
  font-weight: 500;
  text-align: center;
  background: white;
  color: #666666;
}

.index-nav-frame-line-li:hover {
  background: #444359;
  color: white;
}

.index-nav-frame-line-li:hover a {
  background: #444359;
  color: white;
}

.index-nav-frame-line-focus:focus {
  display: none;
}

.index-nav-frame-line:hover .index-nav-frame-line-center {
  height: auto;
  opacity: 1;
}

.nav-line {
  height: 50px;
  width: 100%;
  position: relative;
  display: none;
  outline: none;
}

.nav-small {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  display: none;
  outline: none;
}

.nav-small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-small-focus {
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
}

.nav-small-focus:focus {
  display: none;
}

@media only screen and (max-width: 800px) {
  .index-nav-frame-line-li a {
    display: block;
    color: white;
  }

  .nav-line {
    display: block;
    border-bottom: 1px solid #eeeeee;
  }

  .nav-small {
    display: block;
  }

  .nav-small:focus ~ .index-nav-frame-line {
    height: auto;
    border-bottom: 1px solid #ccc;
  }

  .nav-small:focus .nav-small-focus {
    display: block;
  }

  .index-nav-frame {
    width: 100%;
  }

  .index-nav-frame-line {
    width: 100%;
    height: 0;
    overflow: hidden;
  }

  .index-nav-frame-line-center {
    position: relative;
    background: #444359;
  }

  .index-nav-frame-line:hover .index-nav-frame-line-center {
    height: 0;
    opacity: 0;
  }

  .index-nav-frame-line-li {
    border-bottom: 1px solid #4b4a5e;
    color: #d9d9d9;
    background: #444359;
  }

  .index-nav-frame-line-li:hover {
    background: #b63b4d;
  }

  .index-nav-frame-line:focus {
    height: auto;
    border-bottom: 1px solid #ccc;
  }

  .index-nav-frame-line:focus > .index-nav-frame-line-center {
    height: auto;
    opacity: 1;
  }

  .index-nav-frame-line:focus .index-nav-frame-line-header {
    color: #b63b4d;
  }

  .index-nav-frame-line-focus {
    display: none;
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .index-nav-frame-line:focus .index-nav-frame-line-focus {
    display: block;
  }
}

.container-main {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  background: #c1c1c1;
  z-index: 9;
}
.active {
  color: #b63b4d;
}
.top {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>
<template>
  <div class="container-main">

    <div class="container">
      <div class="index-nav">
        <div class="index-nav-frame clearfix">
          <div class="nav-line">
          </div>
          <div class="nav-small"
               tabindex="-1">
            <div class="nav-small-focus"
                 tabindex="-1">
            </div>
            <img src="../../assets/images/icon.png">
          </div>
          <router-link tag="div"
                       class="index-nav-frame-line"
                       tabindex="-1"
                       :to="{ name: 'index'}">首页</router-link>
          <router-link tag="div"
                       class="index-nav-frame-line"
                       tabindex="-1"
                       :to="{ name: 'game'}">游戏大厅</router-link>
          <div class="index-nav-frame-line"
               tabindex="-1">
            <Reg></Reg>
            <!-- <div class="index-nav-frame-line-center">
              <div class="index-nav-frame-line-li">
                第二页面1
              </div>
            </div>
            <div class="index-nav-frame-line-focus"
                 tabindex="-1"></div> -->
          </div>
          <div class="index-nav-frame-line"
               tabindex="-1">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
    <BackTop :height="35"
             :bottom="12">
      <div class="top">返回顶端</div>
    </BackTop>
  </div>
  </div>
</template>
<script>
import Reg from '@/components/reg.vue'
import Login from '@/components/login.vue'

export default {
  name: 'headerNav',
  components: {
    Reg,
    Login
  },
  props: {
    flag: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      modal1: true
    }
  },
  methods: {
    ok () {
      this.$Message.info('Clicked ok');
    },
    cancel () {
      // this.$Message.info('Clicked cancel');
    }
  }
}
</script>




