
<style lang="less" scoped>
.banner {
  margin: 2% 0 2% 0;
  background: #506b9e !important;
  overflow: hidden;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1080px) {
  .banner,
  .item {
    background: #506b9e !important;
    height: 280px !important;
  }
}
@media screen and (max-width: 768px) {
  .banner,
  .item {
    width: 100%;
    background: #506b9e !important;
    height: 190px !important;
  }
}
</style>
<template>

  <Carousel class="banner"
            v-model="value1"
            loop
            autoplay
            :height="350">
    <CarouselItem class="item">
      <img src="@/assets/login-background.png"
           alt="">
    </CarouselItem>
    <CarouselItem class="item">
      <img src="@/assets/login-background.png"
           alt="">
    </CarouselItem>
    <CarouselItem class="item">
      <img src="@/assets/login-background.png"
           alt="">
    </CarouselItem>
    <CarouselItem class="item">
      <img src="@/assets/login-background.png"
           alt="">
    </CarouselItem>
  </Carousel>
</template>
<script>
export default {
  name: 'Banner',
  data () {
    return {
      value1: 0
    }
  }
}
</script>
