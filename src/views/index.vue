
<style  lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
.b {
  background: #ccc;
}
.c {
  background: #abc;
}
.box {
  width: 100%;
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
  margin-right: 2%;
  height: auto;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.text {
  margin-left: 2%;
}
.status {
  margin-top: 0.1%;
  display: flex;
  justify-content: space-around;
}
</style>
<template>
  <div class="layout">
    <Banner></Banner>
    <div class="container">
      <Content :style="{padding: '0 3%'}">
        <Row align="top">
          <Col class="a"
               :xs="48"
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
                  测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                </div>
                <div class="status">
                  <span>2019-1-1</span>
                  <span>v2019-1-1</span>
                  <span>o2019-1-1</span>
                  <span>2019-1-1</span>
                  <router-link exact
                               tag="span"
                               style="border:1px solid #ccc;cursor:pointer;"
                               :to="{path:'/article/id/'+item.id}">Primary</router-link>
                </div>

                </Col>
              </Row>
            </div>

          </div>
          </Col>
          <Slide></Slide>
        </Row>
      </Content>
    </div>
    <Page></Page>
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
        }
      ]
    }
  }
}
</script>
