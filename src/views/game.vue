<style lang="less" scoped>
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
      border: 1px solid #ccc;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
.nav-game {
  border: 1px solid #ccc;
  padding: 0.5%;
  min-height: 500px;
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
          <li @mouseover="tabGame(1)">第一个游戏</li>
          <li @mouseover="tabGame(2)">第二个游戏</li>
          <li @mouseover="tabGame(3)">第三个游戏</li>
          <li @mouseover="tabGame(4)">第四个游戏</li>
        </ul>
        </Col>
        <Col :xs="24"
             :sm="20"
             :md="20"
             :lg="20"
             class="nav-game">{{current}}
        <templateGame :message="current"></templateGame>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import templateGame from '../game/template.vue'

export default {
  name: 'abc',
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

  },
  components: {
    templateGame
  }

}
/*
第一关 +10
第二关 +15
*/
</script>

