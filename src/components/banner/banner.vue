
<style scoped>
.banner {
  margin: 2% 0 2% 0;
  background: #506b9e !important;
}
@media screen and (max-width: 1080px) {
  .banner {
    background: #506b9e !important;
    height: 280px !important;
  }
}
@media screen and (max-width: 768px) {
  .banner {
    background: #506b9e !important;
    height: 190px !important;
  }
}
</style>
<template>
  <Carousel class="banner"
            v-model="value1"
            loop
            style="height:350px;">
    <CarouselItem>
      <div class="demo-carousel">1</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">2</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">3</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">4</div>
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
