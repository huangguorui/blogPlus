<style lang="less">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
</style>
<template>
  <div @click="handle">
    <div @click="modal = true">登录</div>
    <Modal title="用户登陆"
           v-model="modal"
           :maskClosable="false"
           :footerHide="true"
           width="320"
           class-name="vertical-center-modal">
      <Form ref="formInline"
            :model="formInline"
            :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text"
                 v-model="formInline.user"
                 placeholder="请输入用户名">
          <Icon type="ios-person-outline"
                slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password"
                 v-model="formInline.password"
                 placeholder="请输入密码">
          <Icon type="ios-lock-outline"
                slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary"
                  @click="handleSubmit('formInline')">登陆</Button>
        </FormItem>
      </Form>

    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0,
      modal9: false,
      modal: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 8, message: '密码的长度要大于或者等于8位', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    forData: {
      type: Object
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.modal = false;
          this.$Message.success('登录成功');
        } else {
          this.$Message.error('登录失败');
        }
      })
    },
    handle () {
      this.$emit('on-ok')
      //console.log('调用组件')
    }
  }
}
</script>
