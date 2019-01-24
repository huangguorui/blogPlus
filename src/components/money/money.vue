<style lang="scss">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
.money-box {
  box-sizing: border-box;
  padding: 3%;
}
.money-list {
  position: relative;
  height: 8%;
  line-height: 54px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  font-weight: normal;
  color: #999999;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 5%;
  text-align: center;
}
.option {
  color: #ea6f5a;
  border-color: #ea6f5a;
  font-weight: 700;
}
.money {
  font-size: 28px;
  font-weight: bold;
  color: #ea6f5a;
  text-align: center;
  line-height: 54px;
  span {
    font-size: 13px;
    line-height: 20px;
    color: #999999;
  }
}
.pay {
  display: flex;
  justify-content: space-around;
  div {
    width: 25%;
    height: auto;
    background: red;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
  <div>
    <Button style="display:block;margin:5% auto"
            @click="moneyPay"
            type="success">测试测试</Button>
    <Modal title="Title"
           v-model="modelFlag"
           :footerHide="true"
           class-name="vertical-center-modal">
      <div class="money-box">
        <Row type="flex"
             justify="space-between">
          <Col :class="{'money-list':true,'option':curVal===index}"
               v-for="(item,index) in moneyList"
               :key="index"
               :xs="7"
               :sm="7"
               :md="7"
               :lg="7">
          <div v-if="item.number!==false"
               @click="current(index,item.number)">{{item.number}}</div>
          <div v-if="item.number===false">
            <Input v-model="customNumber"
                   @on-change="custom"
                   placeholder=""
                   :number="true"
                   :min="0"
                   :max="10000"
                   size="large"
                   type="text"
                   style="width:60%;border:none;outline:medium;" />
          </div>
          </Col>
        </Row>
        <Row>
          <Input v-model="desc"
                 type="textarea"
                 :rows="3"
                 placeholder="" />
        </Row>
        <Row type="flex"
             justify="center">
          <Col class="money-list"
               :xs="7"
               :sm="7"
               :md="7"
               :lg="7"
               style="border:none;text-align:center;font-size:20px;">
          </Col>
        </Row>
        <div class="money"> ${{money}}
          <span v-show="!tab">用微信支付
            <a href="javascript:;"
               @click="tab=true">更换</a>
          </span>
        </div>
        <transition name="fade">
          <div class="pay"
               v-show="tab">
            <div><img src="@/assets/cs.png"
                   alt=""></div>
            <div><img src="@/assets/cs.png"
                   alt=""></div>
          </div>
        </transition>
        <Button style="display:block;margin:5% auto"
                type="success"
                @click="submit"
                :loading="loading">测试测试</Button>
      </div>

    </Modal>
  </div>
</template>
<script>
export default {
  name: 'moneyPay',
  data () {
    return {
      loading: false,
      moneyList: [
        {
          number: 5
        }, {
          number: 10
        }, {
          number: 20
        }, {
          number: 30
        }, {
          number: 50
        }, {
          number: '自定义'
        },
      ],
      customNumber: '',
      modelFlag: false,
      curVal: 0,
      desc: 0,
      money: 0,
      tab: false
    }
  },
  props: {
    forData: {
      type: Object,
      Default: 'default'
    }
  },
  methods: {
    submit () {
      //为空不可提交
      this.loading = true
      if (this.money === '' || this.money === 0) {
        console.log('~~~')
        this.$Message.error('error');
        this.$Notice.error({
          title: 'error',
          desc: ''
        });
      } else {
        this.modelFlag = false
        this.$Message.success('success');
        this.$Notice.success({
          title: 'success',
          desc: ''
        });
        console.log('当前提交的数值为', this.money)
      }
      setTimeout(() => {
        this.loading = false
      }, 1500)
    },
    moneyPay () {
      this.modelFlag = true
    },
    current (e, num) {
      this.curVal = e
      console.log(this.curVal)
      if (num !== '自定义') {
        this.money = num
        this.moneyList[this.moneyList.length - 1].number = '自定义'
      } else {
        this.moneyList[this.moneyList.length - 1].number = false
      }
    },
    custom () {
      if (this.customNumber === '') this.customNumber = 0
      if (!isNaN(this.customNumber)) {
        if (this.customNumber > 10000) this.customNumber = 10000
        if (this.customNumber <= 0) this.customNumber = 0
        this.money = this.customNumber
      } else {
        this.customNumber = 0
      }
      this.money = this.customNumber
    }
  }
}
</script>
 