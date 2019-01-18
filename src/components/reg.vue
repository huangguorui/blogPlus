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
    <Button type="primary"
            @click="next"
            v-show="false">login</Button>
    <div @click="modal10 = true">login</div>
    <Modal title="Title"
           v-model="modal10"
           :footerHide="true"
           class-name="vertical-center-modal">
      <p>当前正在进行第 {{ current + 1 }} 步</p>
      <Steps :current="current"
             style="margin:6%">
        <Step title="步骤1"></Step>
        <Step title="步骤2"></Step>
        <Step title="步骤3"></Step>
      </Steps>
      <Form ref="formInline"
            :model="formInline"
            :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text"
                 v-model="formInline.user"
                 placeholder="Username">
          <Icon type="ios-person-outline"
                slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password"
                 v-model="formInline.password"
                 placeholder="Password">
          <Icon type="ios-lock-outline"
                slot="prepend"></Icon>
          </Input>
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
      modal9: false,
      modal10: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    next () {
      if (this.current == 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.modal10 = false;
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>
