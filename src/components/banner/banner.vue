<template>
  <div class="container">
    <Carousel v-model="value1"
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
  </div>
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
