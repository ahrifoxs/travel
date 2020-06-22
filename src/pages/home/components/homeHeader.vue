<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe645;</span></div>
    <div class="header-input">
      <!-- <span class="iconfont">&#xe6c6;</span> -->
      <!-- <input type="text" class="iconfont" placeholder="&#xe6c6;输入城市/景点/游玩主题" name="keyword"> -->
      <span class="iconfont spanIcon">&#xe6c6;</span>输入城市/景点/游玩主题
      </div>
    <router-link to="./city" class="header-right">{{this.currentCity}}<span class="iconfont">&#xe6aa;</span></router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  computed: {
    ...mapState({currentCity: 'city'})
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
  background $bgColor
  color #ffffff
  display flex
  line-height $headerHeight
  .header-left
    width .64rem
    float left
    text-align center
  .header-input
    flex 1
    height .64rem
    line-height .64rem
    margin-top .12rem
    margin-left .2rem
    background #ffffff
    border-radius .1rem
    color #ccc
    .spanIcon
      margin 0 .1rem
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    text-align center
    float right
    color $color
</style>
