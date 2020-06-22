<template>
    <!-- <router-link to="/">你的名字叫City</router-link> -->
  <div class="header">
    <span>城市选择</span>
    <router-link to="/">
      <div class="iconfont header-back">&#xe645;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
//   .header-city
//     color #ffffff
  .header-back
    position absolute
    left 0
    top 0
    width .64rem
    text-align center
    // font-size .4rem
    color $color
</style>
