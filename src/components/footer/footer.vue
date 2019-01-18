<style lang="scss" scoped>
.top {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>

<template>
  <div>
    <BackTop :height="100"
             :bottom="100">
      <div class="top">返回顶端</div>
    </BackTop>
    <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'footerNav',
  components: {
  }
}
</script>
