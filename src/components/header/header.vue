
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 1200px;
  margin: 0 auto;
  height: auto;
  padding: 0px 3%;
}
@media screen and (max-width: 1080px) {
  .container {
    width: 868px !important;
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
}
.nav {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
}
.logo {
  width: 10%;
  height: 100%;
  border: 1px solid red;
}
ul {
  width: 90%;
  padding: 1% 0;
  box-sizing: border-box;
  height: 100%;
  display: flex;
}
li {
  margin: 0 1%;
  text-align: center;
  list-style: none;
}
</style>
<template>
  <div class="container">
    <div class="nav">
      <router-link tag="div"
                   class="logo"
                   :to="{ name: 'index'}"></router-link>
      <ul>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>
          <Reg></Reg>
        </li>
        <li>
          <Login></Login>
        </li>
      </ul>
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




