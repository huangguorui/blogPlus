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
  overflow-y: scroll;
}
.box span {
  margin: 0 1%;
}
.text {
  text-indent: 2em;
  line-height: 300%;
}
h1 {
  text-align: center;
}
.goodShow {
  overflow-y: scroll;
}

/*右侧锚点*/
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

.box a {
  display: block;
  height: 300px;
}
.fixed {
  position: absolute;
  right: 30px;
  top: 30px;
  width: 100px;
  height: 200px;
  border: 1px solid red;
}
#t div {
  margin-left: 100px;
  height: 500px;
  border: 1px solid black;
  display: block;
}
.main {
  position: relative;
  height: auto;
  overflow-x: scroll;
}
/*右侧锚点*/
</style>

<template>
  <div class="main">
    <div class="layout">
      <div class="container">
        <Content :style="{padding: '0 3%',marginTop:'5%'}">
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
                </span>
                <div class="text">
                  <div id="a"
                       style="height:30rem;">1111111111</div>
                  <div id="t">
                    <div id="t1">1</div>
                    <div id="t2">2</div>
                    <div id="t3">3</div>
                  </div>
                  <div id="b"
                       style="height:10rem;">1111111111</div>
                  <div id="c"
                       style="height:10rem;">1111111111</div>
                </div>
              </div>
            </div>
            <div class="box">
              <Comment></Comment>
            </div>
            </Col>
            <Col :xs="24"
                 :sm="8"
                 :md="7"
                 :lg="7">
            <div class="slide-style">
              <div class="title-slide">测试测试</div>
              <Anchor show-ink
                      :scrollOffset="150"
                      container=".box">
                <AnchorLink href="#a"
                            title="1" />
                <AnchorLink href="#t"
                            title="API">
                  <AnchorLink href="#t1"
                              title="Anchor props" />
                  <AnchorLink href="#t2"
                              title="Anchor events" />
                  <AnchorLink href="#t3"
                              title="AnchorLink props" />
                </AnchorLink>
                <AnchorLink href="#b"
                            title="Static Position" />
                <AnchorLink href="#c"
                            title="Basic Usage" />
              </Anchor>
            </div>

            </Col>
          </Row>
        </Content>
      </div>
    </div>

  </div>
</template>
<script>
import Comment from '@/components/comment/comment.vue'

export default {
  name: 'Article',
  data () {
    return {
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
      console.log(this.$route.params)
    }
  },
  components: {
    Comment
  }
}
</script>

