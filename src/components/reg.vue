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
    <div @click="modal10 = true">login</div>
    <Modal title="reg"
           v-model="modal10"
           :footerHide="true"
           :maskClosable="false"
           class-name="vertical-center-modal">
      <Form ref="formInline"
            :model="formInline"
            :rules="ruleInline">
        <FormItem label="password"
                  prop="password">
          <Input v-model="formInline.password"
                 placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="user"
                  prop="password">
          <Input v-model="formInline.password"
                 placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="Date">
          <Row>
            <Col span="11">
            <FormItem prop="user">
              <Input v-model="formInline.user"
                     placeholder="Enter your name"></Input>
            </FormItem>
            </Col>
            <Col span="5"
                 style="text-align: center">=></Col>
            <Col span="5">
            <Button type="primary"
                    :disabled="isDisabled"
                    @click="openEmail">{{codeTime}}</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="Name"
                  prop="gender">
          <Input v-model="formInline.gender"
                 placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="Gender"
                  prop="gender">
          <RadioGroup v-model="formInline.gender">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>

        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
        <FormItem>
          <Button type="primary"
                  @click="handleSubmit('formInline')">Signin</Button>
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
      modal10: false,
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
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.modal10 = false;
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
