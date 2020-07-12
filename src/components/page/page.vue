<style lang="less" scoped>
// .page {
//   text-align: center;
//   margin: 3% auto;
// }
</style>

<template>
  <div class="container">
    <Page class="page"
          :total="pageData.total"
          :page-size="pageData.size"
          :show-total="true"
          @on-change="pageChange"
          @on-page-size-change="pageSizeChange"
          size="small"
          show-elevator
          show-sizer />
  </div>
</template>
<script>


export default {
  name: "page",
  props: {
    pageData: {
      type: Object,
      default: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    pageChange (e) {
      console.log(e)
      this.$emit("pageChange", e)

    },
    pageSizeChange (e) {
      this.$emit("pageSizeChange", e)

    },
  }


}
</script>
