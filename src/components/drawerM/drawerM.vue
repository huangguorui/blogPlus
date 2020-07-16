<template>
  <div>
    <!-- @on-close="colseDrawer :closable="false"" :value防止报错 ，@on-close监听右上角 -->
    <Drawer :value="isCloseDrawer"
            width="390"
            @on-close="colseDrawer"
            :title="
            titleDrawer"
            :mask-closable="false"
            :styles="styles">
      <Form :model="formData">
        <slot name="formData">
        </slot>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px"
                @click="colseDrawer">取消</Button>
        <Button type="primary"
                @click="sumbit">提交</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  props: {
    formData: {
      type: Object,
      default: Object
    },
    titleDrawer: {
      type: String,
      default: "默认标题"
    },
    isCloseDrawer: {
      type: Boolean,
      default: false
    },
  },

  methods: {

    sumbit () {
      this.$emit('submitData', this.formData)
    },
    colseDrawer () {
      this.$emit('closeDrawer')


      //       [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "isCloseDrawer"

      // found in

      // ---> <DrawerM> at src/components/drawerM/drawerM.vue
      //        <Permission>
      //          <App> at src/App.vue
      //            <Root>
      // this.isCloseDrawer = false
      //不能在组件内部修改传入的porps的值，我们返回到父组件进行处理

    }
  },
  data () {
    return {
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      //   formData: {
      //     position: 'static'
      //   }
      //该变量使用了props就不能在使用它定义为变量了
      //     vue.runtime.esm.js?0261:619 [Vue warn]: The data property "formData" is already declared as a prop. Use prop default value instead.

      // found in

      // ---> <DrawerM>
      //        <Permission> at src/views/permission.vue
      //          <App> at src/App.vue
      //            <Root>

    }
  }
}
</script>
<style>
.demo-drawer-footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
}
</style>