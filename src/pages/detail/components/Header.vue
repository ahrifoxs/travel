<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs"><span class="iconfont header-icon">&#xe645;</span></router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <span>景点详情</span>
        <router-link to="/">
          <div class="iconfont header-back">&#xe645;</div>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      console.log(top)
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  text-align center
  background rgba(0, 0, 0, .8)
  .header-icon
    color #ffffff
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  .header-back
    position absolute
    left 0
    top 0
    width .64rem
    text-align center
    // font-size .4rem
    color $color
</style>
