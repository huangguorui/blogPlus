<style  lang="less" scoped>
.box {
  width: 98%;
  height: auto;
  background: #fff;
  padding: 2%;
  margin-right: 2%;
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
    margin: 1% 1.5%;
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
.icon-user {
  height: 15px;
  margin-right: 3px;
  font-weight: 500;
}
</style>

<template>
  <div class="container">
    <Row align="top"
         style="margin-top:2%;">
      <Col :xs="48"
           :sm="16"
           :md="17"
           :lg="17"
           style="margin-bottom:8%;">
      <div class="box">
        <h1>{{article.title}}</h1>
        <div class="hots">
          <span>
            <Icon type="ios-clock-outline"
                  size="13"
                  class="icon-user" />2019年01月01日</span>
          <span>
            <Icon type="ios-eye-outline"
                  class="icon-user" />浏览量：999</span>
          <span>
            <Icon type="ios-text-outline"
                  size="13"
                  class="icon-user" />评论数：2
          </span>
          <span>
            <Icon type="ios-hand-outline"
                  size="13"
                  class="icon-user" />
            2人赞同</span>

          <p>
            <span>当前传入的参数为:{{id}}
            </span>
          </p>
          <p>
            <Button size="small"
                    @click="fonts('+')">+</Button>
            <Button size="small"
                    @click="fonts('-')">-</Button>
            <Button size="small"
                    @click="fonts('default')">Default</Button>
            当前字体大小:{{styles.fontSize}}
          </p>
          <p>
            字体颜色为:{{styles.color}}
            <ColorPicker size="small"
                         v-model="styles.color" />
          </p>
        </div>
        <!-- contenteditable="true" -->
        <div class="text"
             :style="styles">
          <h3>前言</h3>
          <p> {{article.description}}</p>
          <h3>正文</h3>
          <p> {{article.content}}</p>
        </div>
        <money-pay></money-pay>
      </div>
      <div class="box">
        <strong>当前标签</strong>
        <Row align="top">
          <Col :xs="24"
               :sm="24"
               :md="24"
               :lg="24"
               class="tag">
          <a href="javascript:;">
            <Tag color="default">Iview</Tag>
          </a>
          <a href="javascript:;">
            <Tag color="primary">UI框架</Tag>
          </a>
          <a href="javascript:;">
            <Tag color="success">JavaScript</Tag>
          </a>
          <a href="javascript:;">
            <Tag color="warning">前端小技巧</Tag>
          </a>
          <a href="javascript:;">
            <Tag color="default">Vue</Tag>
          </a>
          <a href="javascript:;">
            <Tag color="primary">Vue-Cli</Tag>
          </a>
          <a href="javascript:;">
            <Tag color="success">新手前端学习</Tag>
          </a>
          <a href="javascript:;">
            <Tag color="warning">WEB开发</Tag>
          </a>
          </Col>
          <Col :xs="24"
               :sm="24"
               :md="24"
               :lg="24">
          <strong>相关文章</strong>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="list">
          <a href="javascript:;">Iview为什么会受到开发者的青睐</a>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="list">
          <a href="javascript:;">如何更加高效的使用Iview来提高工作效率</a>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="list">
          <a href="javascript:;">iview中表格判断是否被选中</a>
          </Col>
          <Col :xs="24"
               :sm="12"
               :md="12"
               :lg="12"
               class="list">
          <a href="javascript:;">Iview中弹出框填写属性报错解决方法</a>
          </Col>
        </Row>
      </div>
      <div class="box">
        <Comment></Comment>
      </div>
      </Col>
      <Slide></Slide>
    </Row>
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
      article: {},
      styles: {
        fontSize: '16px',
        color: ''
      },
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.getList()
    this.fetchData()

  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.id = this.$route.params;
      //console.log(this.$route.params)
    },
    fonts (e) {
      //console.log("parseInt", parseInt('16px'))
      //console.log(e)
      let fontSize = parseInt(this.styles.fontSize)
      this.styles.fontSize = (this.styles.fontSize = parseInt(e === '+' ? fontSize + 1 : fontSize - 1)) + "px"
      if (e === 'default') {
        this.styles.fontSize = "16px"
      }
    },
    getList () {
      this.$axios({
        url: `http://localhost:8081/blog/${this.$route.params.id}`,
        method: "get",
        params: {}
      }).then(res => {
        this.article = res.data.data
        //设置标题
        document.title = this.article.title+"-前端博客"

        // 赋值以后添加，修改的值是不会被vue监听的
      })
    },
  },
  components: {
    Comment,
    Slide,
    moneyPay
  }
}


</script>

