
<style scoped>
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
.a {
  /* background: red; */
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
  padding: 1%;
  margin-bottom: 2%;
  box-sizing: border-box;
}
.box span {
  margin: 0 1%;
}
.text {
  line-height: 300%;
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
            <h2>测试demo</h2>
            <div class="hots">
              <span>2019年01月01日</span>
              <span>200views</span>
              <span>200
                <Button type="primary">OK</Button>
              </span>
              <div class="text">
                测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试......
              </div>
              <router-link exact
                           tag="Button"
                           type="primary"
                           :to="{path:'/article/id/'+item.id}">Primary</router-link>
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


