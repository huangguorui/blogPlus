<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
}
</style>

<template>
  <div class="footer">
    <Footer v-show="flag"
            class="layout-footer-center"> &copy; 2019-至今</Footer>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'footerNav',
  components: {
  },
  props: {
    flag: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
