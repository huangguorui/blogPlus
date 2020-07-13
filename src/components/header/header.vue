
<style lang="less" scoped>
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
.nav ul {
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;

  line-height: 50px;
  text-align: center;
  font-size: 19px;
  li {
    margin: 0 auto;
    padding: 0 20px;
    cursor: pointer;
  }
}
</style>
<template>
  <div class="container-main">

    <div class="nav">
      <ul>
        <li>
          <router-link tag="a"
                       :to="{ name: 'index'}">首页</router-link>
        </li>
        <li>
          <Reg></Reg>
        </li>
        <li>
          <Login></Login>
        </li>
        <li>
          <router-link tag="a"
                       :to="{ name: 'user'}">控制台</router-link>
        </li>
        <li>
          <router-link tag="a"
                       :to="{ name: 'role'}">角色管理</router-link>
        </li>
        <li>
          <router-link tag="a"
                       :to="{ name: 'permission'}">资源管理</router-link>
        </li>
        <li>
          <router-link tag="a"
                       :to="{ name: 'role'}">角色管理资源</router-link>
        </li>
        <li>
          <router-link tag="a"
                       :to="{ name: 'role'}">用户关联角色</router-link>
        </li>
        <li>
          <router-link tag="a"
                       :to="{ name: 'about'}">关于</router-link>
        </li>
      </ul>

      <!-- <span>
       
      </span>
      <span>
        
      </span> -->

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




