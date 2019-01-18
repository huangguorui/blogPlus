<style lang="scss" scoped>
.a {
  background: red;
}
.b {
  background: #ccc;
}
.c {
  background: #abc;
}
.box {
  width: 100%;
  height: 160px;
  background: #000;
  padding: 1%;
  margin-bottom: 2%;
  box-sizing: border-box;
}
.title {
  width: 80px;
  height: 30px;
  background: red;
  box-sizing: border-box;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  position: absolute;
  left: 3%;
  top: 0%;
}
.guide {
  margin-top: 10%;
}
.slide-style {
  margin-bottom: 3%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 3%;
  position: relative;
  .title-slide {
    height: 30px;
    line-height: 30px;
    background: red;
    box-sizing: border-box;
    text-align: left;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
  }
}
li {
  list-style: none;
}
.uls li {
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  margin: 2% 0;
}
.tag {
  display: flex;
  flex-wrap: wrap;
}
.tag li {
  background: #ccc;
  width: 23%;
  box-sizing: border-box;
  margin: 1%;
  height: 25px;
  a {
    display: block;
    text-align: center;
    line-height: 25px;
  }
}
</style>

<template>
  <div>
    <Col class="c"
         :xs="24"
         :sm="8"
         :md="7"
         :lg="7"
         :style="{padding: '0 1%'}">
    <div class="slide-style">
      <div class="title">测试测试</div>
      <div class="guide">
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试......
      </div>
    </div>
    <div class="slide-style">
      <div class="title-slide">测试测试</div>
      <ul class="uls">
        <li>1、</li>
        <li>1、</li>
        <li>1、</li>
        <li>1、</li>
        <li>1、</li>
      </ul>
    </div>

    <div class="slide-style">
      <div class="title-slide">测试测试</div>
      <ul class="tag">
        <li>
          <a href="##">测试</a>
        </li>
        <li>
          <a href="##">测试</a>
        </li>
        <li>
          <a href="##">测试</a>
        </li>
      </ul>
    </div>
    <div class="slide-style">
      <div class="title-slide">测试测试</div>
      <ul class="uls link">
        <li>
          <a href="javascript:;">测试</a>
        </li>
        <li>
          <a href="javascript:;">测试</a>
        </li>
        <li>
          <a href="javascript:;">测试</a>
        </li>
        <li>
          <a href="javascript:;">测试</a>
        </li>
        <li>
          <a href="javascript:;">测试</a>
        </li>
      </ul>
    </div>

    </Col>
  </div>
</template>
<script>
export default {
  name: 'Slide',
  data () {
    return {

    }
  }
}
</script>

