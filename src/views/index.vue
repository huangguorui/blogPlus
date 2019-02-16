
<style  lang="scss" scoped>
.box {
  width: 98%;
  height: auto;
  background: #fff;
  border-radius: 1%;
  padding: 2%;
  margin-bottom: 2%;
  box-sizing: border-box;
}
.box span {
  margin: 0 1%;
}
.mian-text {
  display: flex;
}
.img {
  width: 100%;
  height: auto;
  margin-right: 2%;
  overflow: hidden;
  border-radius: 5px;
  img {
    display: block;
    width: 100%;
    height: 130px;
    transition: all 0.6s;
  }
  &:hover img {
    transform: scale(1.2) rotate(5deg);
  }
}
.text {
  margin-left: 2%;
}
.status {
  margin-top: 0.1%;
  display: flex;
  justify-content: space-around;
  span {
    display: inline-block;
    padding: 1.1% 1%;
    text-align: center;
    width: 23%;
    height: 32px;
  }
    span:first-child {
      width: 31%;
    }
  span:last-child {
    border-radius: 5px;
    transition: all 0.6s;
    border: 1px solid #ccc;

    &:hover {
      box-sizing: border-box;
      border: 1px solid #57a3f3;
      cursor: pointer;
    }
  }
}
</style>
<template>
  <div class="container" style="padding-bottom: 6.5%;">
    <Banner></Banner>
    <Row align="top" >
      <Col :xs="48"
           :sm="16"
           :md="17"
           :lg="17">

      <div class="box"
           v-for="item in list"
           :key="item.id">
        <div class="mian-text">
          <Row>
            <Col :xs="24"
                 :sm="24"
                 :md="8"
                 :lg="6">
            <router-link exact
                         tag="div"
                         class="img"
                         style="cursor:pointer;"
                         :to="{path:'/article/id/'+item.id}"><img src="../assets/login-background.png"></router-link>
            </Col>
            <Col :xs="24"
                 :sm="24"
                 :md="16"
                 :lg="18">
            <div class="text">
              <h2>测试demo</h2>
              在出现一些开关灯的按钮，那么这些效果是如何做在出现一些开关灯的按钮，那么这些效果是如何做出来的呢，今天我们就来探 在一些小游戏界面，都会出现一些开关灯的按钮，那么这些效果是如何做出来的呢，今天我们就来探讨一下，其实制作这些效果非常的简单，就是利用了js操作DOM的特性，通过点击跟换样式来实现，源码如下：
            </div>
            <div class="status">
              <span>2019年01月01日</span>
              <span>访问量：999</span>
              <span>2人评论</span>
              <span  class="none">1人赞同</span>
              <router-link exact
              class="none"
                           tag="span"
                           :to="{path:'/article/id/'+item.id}" >Primary</router-link>
            </div>
            </Col>
          </Row>
        </div>
      </div>
      </Col>
      <Slide></Slide>
    </Row>
    <Page></Page>
  </div>
  </div>

</template>
<script>
// Do not use built-in or reserved HTML elements as component id: XXX  https://blog.csdn.net/shooke/article/details/72801735  模板为关键字
// @ is an alias to /src
import Banner from '@/components/banner/banner.vue'
import Slide from '@/components/slide/slide.vue'
import Page from '@/components/page/page.vue'
export default {
  name: 'Index',
  components: {
    Banner,
    Slide,
    Page
  },
  data () {
    return {
      value1: 0,
      value: '',
      list: [
        {
          id: 1,
        }, {
          id: 2,
        }, {
          id: 3,
        }, {
          id: 4,
        }, {
          id: 5,
        }, {
          id: 6,
        }, {
          id: 7,
        }, {
          id: 8,
        }
      ]
    }
  }
}
</script>
