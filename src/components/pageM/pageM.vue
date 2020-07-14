<style lang="less" scoped>
.page {
  text-align: center;
  margin-bottom: 3%;
}
</style>

<template>
  <div class="container">
    <Page class="page"
          :total="pageData.total"
          :page-size="pageData.size"
          :show-total="true"
          @on-change="pageChange"
          size="small" />

    <!-- 
 show-sizer
          @on-page-size-change="pageSizeChange"
 show-elevator

           -->
  </div>
</template>
<script>


export default {
  name: "pageM",
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
      this.$emit("pageChange", e)

    },
    pageSizeChange (e) {
      this.$emit("pageSizeChange", e)

    },
  }


}
</script>
