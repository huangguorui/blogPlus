<template>
  <div>
    <oneGame v-if="message===1"
             :message="message"></oneGame>
    <twoGame v-if="message===2"
             :message="message"></twoGame>
    <threeGame v-if="message===3"
               :message="message"></threeGame>

  </div>
</template>
<script>
import oneGame from './01/01.vue'
import twoGame from './02/02.vue'
import threeGame from './03/03.vue'

export default {
  name: 'templateGame',
  data () {
    return {

    }
  },
  props: {
    message: {
      type: Number,
      default: -1
    }
  },
  methods: {

  },
  components: {
    oneGame,
    twoGame,
    threeGame
  }

}
</script>

