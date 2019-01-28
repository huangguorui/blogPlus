<style lang="scss">
.nav-list {
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 1%;
  ul {
    height: 500px;
    li {
      display: block;
      width: 100%;
      height: 7%;
      margin: 1%;
      padding: 1%;
      border: 1px solid red;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
.nav-game {
  border: 1px solid #ccc;
  padding: 0.5%;
  height: 500px;
}
.game {
  margin: 5% auto;
}
</style>

<template>
  <div>
    <div class="container">
      <Row class="game">
        <Col :xs="24"
             :sm="4"
             :md="4"
             :lg="4"
             class="nav-list">
        <ul>
          <li @click="tabGame(1)">11</li>
          <li @click="tabGame(2)">11</li>
          <li @click="tabGame(3)">11</li>
          <li @click="tabGame(4)">11</li>
        </ul>
        </Col>
        <Col :xs="24"
             :sm="20"
             :md="20"
             :lg="20"
             class="nav-game">{{current}}</Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [{
        id: 0,
        text: '测试测试测试测试',
        status: 1
      }, {
        id: 1,
        text: '测试测试测试测试',
        status: 2
      }],
      current: 1
    }
  },
  methods: {
    tabGame (e) {
      this.current = e
    }
  },
  watch: {

  }

}
</script>

