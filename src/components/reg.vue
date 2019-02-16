<style lang="scss">
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
  <div>
    <div @click="modal = true">注册</div>
    <Modal title="用户注册"
           v-model="modal"
           :footerHide="true"
           :maskClosable="false"
           class-name="vertical-center-modal">
      <Form ref="formInline"
            :model="formInline"
            :label-width="100"
            :rules="ruleInline">
        <FormItem label="请输入用户名"
                  prop="user">
          <Input v-model="formInline.user"
                 placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="请输入密码"
                  prop="password">
          <Input v-model="formInline.password"
                 placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="请输入邮箱"
                  prop="email">
          <Row>
            <Col span="15">
            <FormItem prop="email">
              <Input v-model="formInline.email"
                     placeholder="请输入邮箱"></Input>
            </FormItem>
            </Col>
            <Col span="2"
                 style="text-align: center">-</Col>

            <Col span="5">
            <Button type="primary"
                    :disabled="isDisabled"
                    @click="openEmail">&nbsp;&nbsp;&nbsp;{{codeTime}}&nbsp;&nbsp;&nbsp;</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="验证码"
                  prop="gender">
          <Input v-model="formInline.code"
                 placeholder="验证码"></Input>
        </FormItem>
        <FormItem label="性别"
                  prop="gender">
          <RadioGroup v-model="formInline.gender">
            <Radio label="male">小哥哥</Radio>
            <Radio label="female">小姐姐</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="上传用户图片"
                  prop="gender">
          <Upload action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
          </Upload>
        </FormItem>
        <FormItem>
          <Button type="primary"
                  @click="handleSubmit('formInline')">立即注册</Button>
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
      emailCode: '',
      codeTime: 5,
      modal9: false,
      modal: false,
      isDisabled: false,
      formInline: {
        user: '',
        password: '',
        gender: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        code: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.modal = false;
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    openEmail () {
      this.isDisabled = true;
      let timer = setInterval(() => {
        this.codeTime--;
        if (this.codeTime === 0) {
          this.codeTime = 60
          this.isDisabled = false;
          clearInterval(timer)
        }
      }, 1000)

    }
  }
}
</script>
