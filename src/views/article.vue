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
  line-height: 200%;
  word-break: break-all;
}

h1 {
  text-align: center;
  margin: 1% 0;
}
.text {
  width: 100%;
  text-indent: 2em;
  height: auto;
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  a {
    display: block;
    text-indent: 2em;
  }
}

.tag {
  a {
    display: inline-block;
    height: auto;
    margin: 1% 2%;
  }
}
strong {
  margin: 1% 0;
  display: block;
}
.list a {
  display: block;
  margin: 0.5%;
  padding: 1.5%;
}
.hots {
  padding: 1.5% 0;
  text-align: center;
}
h3 {
  text-indent: 0em;
}
</style>

<template>
  <div>
    <div class="layout">
      <div class="container">
        <Content :style="{padding: '0 0',marginTop:'2%'}">
          <Row align="top">
            <Col class="a"
                 :xs="48"
                 :sm="16"
                 :md="17"
                 :lg="17">
            <div class="box">
              <h1>解决iview中表格变色问题</h1>
              <div class="hots">
                <span>2019年01月01日</span>
                <span>200views</span>
                <span>200 当前传入的参数为:{{id}}
                </span>
                <Button @click="fonts('+')">+</Button>
                <Button @click="fonts('-')">-</Button>
                <Button @click="fonts('default')">Default</Button>
                当前字体大小:{{styles.fontSize}}
                <ColorPicker v-model="styles.color" />
              </div>
              <!-- contenteditable="true" -->
              <div class="text"
                   :style="styles">
                解决iview中表格变色问题，iview中提供了给表格修改颜色的功能，但是咋一看，还是不好理解的，接下来我就为大家来解析一下如何实现表格的隔行变色。
                <h3>1、给Table添加一个自定义属性</h3>
                <pre><table row-class-name="rowClassName"></table></pre>
                <h3>2、在methods中添加rowClassName事件</h3>
                <p>详细代码如下：</p>
                <pre> 
    rowClassName (row, index) {
      if (index % 2 === 1) {
        return 'demo-table-info-row';
      } else if (index % 2 !== 1) {
        return 'demo-table-error-row';
      }
      return '';
    }
                  </pre>
                <h3>3、给表格上色</h3>
                <p>详细代码如下：</p>
                <pre>
    .demo-table-info-row {
      background: #ccc;
    }
    .demo-table-error-row {
      background: #f1f1f1;
    }
                  </pre>
                <h3>4、如果还不了解，可以访问</h3>
                <a href="https://www.iviewui.com/components/table#TDYS"
                   target="_blank">https://www.iviewui.com/components/table#TDYS</a>
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
                  <Tag type="dot">标签一</Tag>
                </a>
                <a href="javascript:;">
                  <Tag type="dot">标签一</Tag>
                </a>
                <a href="javascript:;">
                  <Tag type="dot">标签一</Tag>
                </a>
                <a href="javascript:;">
                  <Tag type="dot">标签一</Tag>
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
//  <img src="../assets/logo.png"> <img src="../assets/login-background.png"> -->
import Comment from '@/components/comment/comment.vue'
import Slide from '@/components/slide/slide.vue'
import moneyPay from '@/components/money/money.vue'
export default {
  name: 'Article',
  data () {
    return {
      id: '',
      styles: {
        fontSize: '16px',
        color: '#000'
      },
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
    },
    fonts (e) {
      console.log("parseInt", parseInt('16px'))
      console.log(e)
      let fontSize = parseInt(this.styles.fontSize)
      this.styles.fontSize = (this.styles.fontSize = parseInt(e === '+' ? fontSize + 1 : fontSize - 1)) + "px"
      if (e === 'default') {
        this.styles.fontSize = "16px"
      }
    }
  },
  components: {
    Comment,
    Slide,
    moneyPay
  }
}


</script>

