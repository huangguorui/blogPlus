
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-main {
  width: 100%;
  height: auto;
  background: #c1c1c1;
}
.container {
  width: 1200px;
  margin: 0 auto;
  height: auto;
  padding: 0px 2.5%;
  box-sizing: border-box;
}

@media screen and (max-width: 1200px) {
  .container {
    width: 992px !important;
  }
}
@media screen and (max-width: 992px) {
  .container {
    width: 768px !important;
  }
  .nav {
    height: 40px !important;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 100% !important;
  }
  .nav {
    height: 30px !important;
  }
  .logo {
    width: 20% !important;
  }
}

.nav {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
}
.logo {
  cursor: pointer;
  width: 10%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid red;
  background: #f5f7f9;
}
ul {
  width: 90%;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
}
li {
  width: 20%;
  cursor: pointer;
  text-align: center;
  line-height: 25px;
  padding: 1.2%;
  list-style: none;
  box-sizing: border-box;
  transition: all 0.6s;
}
li:hover {
  background: #ccc;
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
      <div class="nav"
           v-show="flag">
        <router-link tag="div"
                     class="logo"
                     :to="{ name: 'index'}"></router-link>
        <ul>
          <li>全部文章</li>
          <li>给我留言</li>
          <router-link tag="li"
                       :to="{ name: 'game'}">游戏大厅</router-link>
          <li>
            <Reg></Reg>
          </li>
          <li>
            <Login></Login>
          </li>
        </ul>
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
    }
  },
  methods: {
    ok () {
      console.log(1)
    }
  }
}
</script>




