<template>
  <div class="Menu">
    <div class="Menu-list"></div>
    <div class="Menu-conter">The Menu</div>
  </div>
</template>

<script>
export default {
  name: 'MenuList'
}
</script>

<style lang="stylus" scoped>
.Menu
  position relative
.Menu-list
  width 100%
  height 5px
  background #f34949
.Menu-conter
  position absolute
  top 0
  left 50%
  margin-left -78px
  width 155px
  height 71px
  background #f34949
  text-align center
  color #ffffff
  line-height 71px
  font-size 16px
  font-family 'Times New Roman', Times, serif
.Menu-conter:after {
    position absolute
    content ''
    left 0
    bottom 0
    width 0
    height 0
    border-left 78px solid transparent
    border-right 78px solid transparent
    border-bottom 10px solid #fff
}
</style>
