<style lang="scss">
.introduce {
  border: 1px solid red;
  box-sizing: border-box;
  padding: 1%;
  h3 {
    margin: 3px 0;
  }
  p {
    line-height: 18px;
  }
}
.grade {
  border: 1px solid red;
  box-sizing: border-box;
  padding: 1%;
}
.grade > div {
  height: 25px;
  text-align: center;
}
.bg {
  border: 1px solid red;
  box-sizing: border-box;
  background: pink;
}
.login {
  margin: 15px 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
  border: 1px solid red;
  font-weight: 700;
  color: #fff;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.bg {
  margin-top: 2%;
}
.introduce,
.grade,
.bg,
.circle {
  margin-bottom: 2%;
}
/*进度环*/
.demo-i-circle -custom {
  & h1 {
    color: #3f414d;
    font-size: 28px;
    font-weight: normal;
  }
  & p {
    color: #657180;
    font-size: 14px;
    margin: 10px 0 15px;
  }
  & span {
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
    &:before {
      content: '';
      display: block;
      width: 50px;
      height: 1px;
      margin: 0 auto;
      background: #e0e3e6;
      position: relative;
      top: -15px;
    }
  }
  & span i {
    font-style: normal;
    color: #3f414d;
  }
}
/*进度环*/

.circle {
  display: flex;
  justify-content: space-around;
  border: 1px solid red;
  box-sizing: border-box;
  padding: 1%;
}
</style>
<template>
  <div class="layout">
    <div class="container">
      <Row class="">
        <Col :xs="24"
             :sm="24"
             :md="24"
             :lg="24">
        <div class="login">
          <Login></Login>
        </div>
        </Col>
      </Row>
      <div class="introduce">
        <a href="javascript:;"
           style="text-align:right">
          <h3>测试</h3>
        </a>
        <h3>测试测试</h3>
        <Progress :percent="percent" />
        <ButtonGroup size="large">
          <Button icon="ios-add"
                  @click="add"></Button>
          <Button icon="ios-remove"
                  @click="minus"></Button>
        </ButtonGroup>
        <h3>测试测试</h3>
        <p>测试测试测试测试测试测试测试测试</p>
        <h3>测试测试</h3>
        <p>测试测试测试测试测试测试测试测试</p>
        <h3>测试测试</h3>
        <p>测试测试测试测试测试测试测试测试</p>
        <h3>测试测试</h3>
        <p>测试测试测试测试测试测试测试测试</p>
      </div>
      <Row class="grade">
        <Col span="4">center</Col>
        <Col span="4">center</Col>
        <Col span="4">center</Col>
        <Col span="4">center</Col>
        <Col span="4">center</Col>
        <Col span="4">center</Col>
      </Row>
      <Row>
        <Col span="24">
        <div class="circle">
          <div>
            <i-circle :percent="80">
              <span class="demo-i-circle -inner"
                    style="font-size:24px">80%</span>
            </i-circle>
          </div>
          <div>
            <i-circle :percent="100"
                      stroke-color="#5cb85c">
              <Icon type="ios-checkmark"
                    size="60"
                    style="color:#5cb85c"></Icon>
            </i-circle>
          </div>
          <div>
            <i-circle :percent="35"
                      stroke-color="#ff5500">
              <span class="demo-i-circle -inner">
                <Icon type="ios-close"
                      size="50"
                      style="color:#ff5500"></Icon>
              </span>
            </i-circle>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
import Login from '@/components/login.vue'
export default {
  name: 'user',
  data () {
    return {
      percent: 0
    }
  },
  components: {
    Login
  },
  methods: {
    add () {
      if (this.percent >= 100) {
        return false;
      }
      this.percent += 10;
    },
    minus () {
      if (this.percent <= 0) {
        return false;
      }
      this.percent -= 10;
    }
  }
}
</script>

