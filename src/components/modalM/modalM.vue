<template>
  <div>
    isModalClose=={{isModalClose}}
    <Modal :value="isModalClose"
           @on-cancel="cancelModalClose"
           width="360">
      <p slot="header"
         style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>您当前的操作将会删除掉数据的ID为：</p>
        <p> {{this.delList}}</p>
        <p> 是否继续删除？</p>
      </div>
      <div slot="footer">
        <Button type="error"
                size="large"
                long
                :loading="isModalLoading"
                @click="deleteData">删除</Button>
      </div>
    </Modal>

  </div>
</template>

<script>
export default {
  name: "modalM",
  props: {
    isModalClose: {
      type: Boolean,
      default: false
    },
    delList: {
      type: Array,
      default: Array
    },
    isModalLoading: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {


    }
  },
  methods: {
    cancelModalClose (e) {
      this.$emit("cancelModalClose", e)

    },
    deleteData () {
      this.$emit("deleteData")
    }
  }

}
</script>

<style lang="scss" scoped>
</style>