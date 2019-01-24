<style  lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.box {
  width: 98%;
  height: auto;
  background: #fff;
  border-radius: 1%;
  padding: 2%;
  margin: 0 1%;
  margin-bottom: 2%;
  box-sizing: border-box;
}
.box span {
  margin: 0 1%;
}
.text {
  line-height: 300%;
}
h1 {
  text-align: center;
}
.text {
  width: 100%;
  text-indent: 2em;
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  height: auto;
}
.tag button {
  margin: 3px 5px;
}
strong {
  margin: 0.5% 0;
  display: block;
}
.list a {
  display: block;
  margin: 0.5%;
  padding: 1.5%;
}
</style>

<template>
  <div>
    <div class="layout">
      <div class="container">
        <Content :style="{padding: '0 3%',marginTop:'2%'}">
          <Row align="top">
            <Col class="a"
                 :xs="48"
                 :sm="16"
                 :md="17"
                 :lg="17">
            <div class="box">
              <h1>测试demo</h1>
              <div class="hots">
                <span>2019年01月01日</span>
                <span>200views</span>
                <span>200
                  <Button type="primary">OK</Button>
                  当前传入的参数为:{{id}}
                </span>
                <div class="text">
                  <img src="../assets/logo.png"> <img src="../assets/login-background.png"> 测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试……
                </div>
              </div>
              <money-pay></money-pay>
            </div>
            <div class="box">
              <strong>tag</strong>
              <Row align="top">
                <Col :xs="24"
                     :sm="24"
                     :md="24"
                     :lg="24"
                     class="tag">
                <a href="javascript:;">
                  <Button>Default</Button>
                </a>
                <a href="javascript:;">
                  <Button>Default</Button>
                </a>
                <a href="javascript:;">
                  <Button>Default</Button>
                </a>
                <a href="javascript:;">
                  <Button>Default</Button>
                </a>
                </Col>
                <Col :xs="24"
                     :sm="24"
                     :md="24"
                     :lg="24">
                <strong>tag</strong>
                </Col>
                <Col :xs="24"
                     :sm="12"
                     :md="12"
                     :lg="12"
                     class="list">
                <a href="javascript:;">测试测试测试测试测试测试测试测试测试测试测试测试</a>
                </Col>
                <Col :xs="24"
                     :sm="12"
                     :md="12"
                     :lg="12"
                     class="list">
                <a href="javascript:;">测试测试测试测试测试测试测试测试测试测试测试测试</a>
                </Col>
                <Col :xs="24"
                     :sm="12"
                     :md="12"
                     :lg="12"
                     class="list">
                <a href="javascript:;">测试测试测试测试测试测试测试测试测试测试测试测试</a>
                </Col>
                <Col :xs="24"
                     :sm="12"
                     :md="12"
                     :lg="12"
                     class="list">
                <a href="javascript:;">测试测试测试测试测试测试测试测试测试测试测试测试</a>
                </Col>
              </Row>
            </div>
            <div class="box">
              <Comment></Comment>
            </div>
            </Col>
            <Slide></Slide>
          </Row>
        </Content>
      </div>
    </div>

  </div>
</template>
<script>
import Comment from '@/components/comment/comment.vue'
import Slide from '@/components/slide/slide.vue'
import moneyPay from '@/components/money/money.vue'

export default {
  name: 'Article',
  data () {
    return {
      id: ''
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {

      this.id = this.$route.params;
      console.log(this.$route.params)
    }
  },
  components: {
    Comment,
    Slide,
    moneyPay
  }
}
</script>

