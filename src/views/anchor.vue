<style scoped>
.box {
  width: 500px;
  height: auto;
}
.box a {
  display: block;
  height: 300px;
}
.goodShow {
  position: relative;
  overflow-y: scroll;
  border: 1px solid red;
  height: 500px;
}
#static_position {
}
.fixed {
  position: absolute;
  right: 30px;
  top: 30px;
  width: 100px;
  height: 200px;
  border: 1px solid red;
}
#t div {
  margin-left: 100px;
  height: 500px;
  border: 1px solid black;
  display: block;
}
</style>

<template>
  <div>
    <div class="goodShow">
      <div id="a"
           style="height:30rem;">1111111111</div>
      <div id="t">
        <div id="t1">1</div>
        <div id="t2">2</div>
        <div id="t3">3</div>
      </div>
      <div id="b"
           style="height:10rem;">1111111111</div>
      <div id="c"
           style="height:10rem;">1111111111</div>
    </div>
    <div class="fixed">
      <Anchor show-ink
              container=".goodShow">
        <AnchorLink href="#a"
                    title="Basic Usage" />
        <AnchorLink href="#t"
                    title="API">
          <AnchorLink href="#t1"
                      title="Anchor props" />
          <AnchorLink href="#t2"
                      title="Anchor events" />
          <AnchorLink href="#t3"
                      title="AnchorLink props" />
        </AnchorLink>
        <AnchorLink href="#b"
                    title="Static Position" />
        <AnchorLink href="#c"
                    title="Basic Usage" />
      </Anchor>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    select (e) {
      console.log(e)
    }
  }
}
</script>

