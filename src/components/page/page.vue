<style lang="scss" scoped>
.page {
  text-align: center;
  margin: 3% auto;
}
</style>

<template>
  <div class="container">
    <Page class="page"
          :total="40"
          size="small"
          show-elevator
          show-sizer />
  </div>
</template>
<script>
export default {
  name: "page",
  data () {
    return {
    }
  }
}
</script>
