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
  <div @click="handle">
    <div @click="modal10 = true">login</div>
    <Modal title="Title"
           v-model="modal10"
           :maskClosable="false"
           :footerHide="true"
           class-name="vertical-center-modal">
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
  props: {
    forData: {
      type: Object
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
    handle () {
      this.$emit('on-ok')
      console.log('调用组件')
    }
  }
}
</script>
