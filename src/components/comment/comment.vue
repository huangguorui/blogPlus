<template>
  <div>
    <Form ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          label-position="left"
          :label-width="80">
      <FormItem label="~星级"
                style="margin-bottom: 10px;">
        <Rate show-text
              v-model="valueText" />
      </FormItem>
      <FormItem label="评论"
                prop="desc">
        <Input v-model="formValidate.desc"
               type="textarea"
               :autosize="{minRows: 5,maxRows: 10}"
               placeholder="请填写您的评论内容"></Input>
      </FormItem>
      <FormItem label="名字"
                prop="name">
        <Input v-model="formValidate.name"
               placeholder="请填写您的名字"></Input>
      </FormItem>
      <FormItem label="邮箱"
                prop="mail">
        <Input v-model="formValidate.mail"
               placeholder="请填写您的邮箱"></Input>
      </FormItem>
      <FormItem label="地区"
                prop="city">
        <Select v-model="formValidate.city"
                placeholder="请填写您的地区">
          <Option value="beijing">武汉</Option>
          <Option value="shanghai">上海</Option>
          <Option value="shenzhen">深圳</Option>
        </Select>
      </FormItem>

      <FormItem>
        <Button type="primary"
                @click="handleSubmit('formValidate')">提交评论</Button>
        <Button @click="handleReset('formValidate')"
                style="margin-left: 8px">重填</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: 'Comment',
  data () {
    return {
      valueText: 5,
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '请填写您的名字', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请填写您的邮箱', trigger: 'blur' },
          { type: 'email', message: '请填写正确的邮箱', trigger: 'blur' }
        ],
        city: [
          { required: true, message: '请填写您的地区', trigger: 'change' }
        ],
        gender: [
          { required: true, message: '请填写您的地址', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写您的评论内容', trigger: 'blur' },
          { type: 'string', min: 10, message: '评论字符需要大于或者等于10个', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('恭喜，您已经评论成功');
        } else {
          this.$Message.error('评论失败');
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  }
}
</script>
