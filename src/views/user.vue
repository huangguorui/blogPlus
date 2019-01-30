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
.perfect {
  display: block;
  text-align: right;
}
.user li {
  height: auto;
  p {
    display: inline-block;
    padding: 1%;
  }
  .label {
    width: 25%;
  }
  .info {
    width: 50%;
  }
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
           class="perfect">
          <span>测试</span>
        </a>
        <h3>测试测试</h3>
        <Progress :percent="percent" />
        <ButtonGroup size="large">
          <Button icon="ios-add"
                  @click="add"></Button>
          <Button icon="ios-remove"
                  @click="minus"></Button>
        </ButtonGroup>
        <ul class="user">
          <li v-for="(item,index) in userInfo"
              :key="index">
            <p class="label">{{item.label}}:</p>
            <p class="info">{{item.text}}</p>
          </li>

        </ul>

      </div>
      <Row class="grade">
        <Col span="4"
             style="line-height:25px;">VIP1</Col>
        <Col span="4"
             style="line-height:25px;">VIP2</Col>
        <Col span="4"
             style="line-height:25px;">VIP3</Col>
        <Col span="4"
             style="line-height:25px;">VIP4</Col>
        <Col span="4"
             style="line-height:25px;">VIP5</Col>
        <Col span="4"
             style="line-height:25px;">VIP6</Col>
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
      percent: 0,
      // userInfoVal: {
      //   nickName: '张三',
      //   grade: '1',
      //   goldCoin: '1',
      //   diamonds: '1',
      //   qq: 123465,
      //   blog: '12345678',
      //   github: 123456,
      //   skill: ['a', 'b', 'c']

      // },
      // userInfoLabel: {
      //   nickName: '您的昵称',
      //   grade: '您的等级',
      //   goldCoin: '金币',
      //   diamonds: '钻石',
      //   qq: 'QQ账号',
      //   blog: '博客主页',
      //   github: 'Github',
      //   skill: '掌握技能'
      // }
      userInfo: [
        {
          label: '您的昵称',
          text: 111
        }, {
          label: '您的等级',
          text: 111
        }, {
          label: '金币',
          text: 111
        }, {
          label: '钻石',
          text: 111
        }, {
          label: 'QQ账号',
          text: 111
        }, {
          label: '博客主页',
          text: 111
        }, {
          label: 'Github',
          text: 111
        }, {
          label: '掌握技能',
          text: ['a', 'b', 'c']
        }
      ]
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

