<style lang="scss" scoped>
.box {
  width: 100%;
  height: 160px;
  background: #000;
  padding: 1%;
  margin-bottom: 2%;
  box-sizing: border-box;
}
.title {
  color: #000;
  width: 80px;
  height: 30px;
  background: red;
  box-sizing: border-box;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
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
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 3%;
  position: relative;
  .title-slide {
    height: 30px;
    line-height: 30px;
    //background: red;
    box-sizing: border-box;
    text-align: left;
    color: #000;
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
  width: auto;
  padding: 0 1%;
  box-sizing: border-box;
  margin: 1%;
  height: 25px;
  a {
    display: block;
    text-align: center;
    line-height: 25px;
  }
}
.news {
  width: 100%;
  height: auto;
  li:nth-child(1) {
    margin-top: 3%;
  }
  li {
    width: 100%;
    margin-bottom: 3%;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  img {
    float: left;
    width: 70px;
    height: 40px;
  }
  p {
    float: left;
    margin-left: 3%;
    line-height: 40px;
  }
}
.uls {
  height: auto;
  li {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
}
</style>

<template>
  <div>
    <Col :xs="24"
         :sm="8"
         :md="7"
         :lg="7"
         :style="{padding: '0 0 0 0%'}">
    <div class="slide-style">
      <div class="title">测试测试</div>
      <div class="guide">
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试......
      </div>
    </div>
    <div class="slide-style">
      <div class="title-slide">测试测试</div>
      <ul class="news">
        <li v-for="item in list"
            :key="item.id">
          <a href="javascript:;">

            <img src="@/assets/logo.png">
            <router-link exact
                         tag="p"
                         :to="{path:'/article/id/'+item.id}">{{item.text|interceptStr(item.text)}}</router-link>
          </a>
        </li>
      </ul>
    </div>
    <div class="slide-style">
      <div class="title-slide">测试测试</div>
      <ul class="uls">
        <li v-for="(item,index) in list"
            :key="item.id">
          <p>
            <span style="margin-right:2%;">第{{index+1}}个</span>{{item.text|interceptStr(item.text)}}</p>
        </li>
        <li>1、</li>
        <li>1、</li>
        <li>1、</li>
        <li>1、</li>
      </ul>
    </div>
    <div class="slide-style">
      <div class="title-slide">测试测试</div>
      <ul class="tag">
        <li v-for="item in tag"
            :key="item.id">
          <a href="##">{{item.text}}</a>
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
      list: [
        { id: 1, text: '测试测试' },
        { id: 2, text: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测' },
        { id: 3, text: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
        { id: 4, text: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试' },
        { id: 5, text: '试测试测试' }
      ],
      tag: [
        { id: 1, text: '测试测试11', },
        { id: 2, text: '测试1', },
        { id: 3, text: '测试1', },
        { id: 4, text: '测试1测试1', },
        { id: 5, text: '测试测试11', },
        { id: 6, text: '测试测试11', },
        { id: 7, text: '测试测试11', },
        { id: 8, text: '测试测试1测试11测', },
        { id: 9, text: '测试1', },
        { id: 10, text: '测试1', },
        { id: 11, text: '测试测试11', },
        { id: 12, text: '测试测试11', },
        { id: 13, text: '测试测试1测试11测', },
        { id: 14, text: '测试测试11', },
        { id: 15, text: '测试测试11', },
        { id: 16, text: '测试测试1测试11测', }
      ]
    }
  },
  filters: {
    interceptStr: function (value) {
      if (value.length >= 10) {
        return value.substr(0, 10) + "……"
      } else {
        return value
      }
    }
  }
}
</script>

