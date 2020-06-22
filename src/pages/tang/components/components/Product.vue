<template>
    <div class="product">
      <div class="albumLogo">
        <span class="jingxuan">{{list.jingxuan}}</span>
        <span class="huigu">{{list.huigu}}</span>
      </div>
      <div class="block">
        <div class="blockOne" v-for="item of list.blockOne" :key="item.id">
          <div class="image">
            <img :src="item.imgSrc" />
          </div>
          <div class="detail">
            <span>
              {{item.detailSpanOne}}
            </span>
            <span>
              {{item.detailSpanTwo}}
            </span>
            <span>
              {{item.detailSpanThree}}
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    list: ''
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/stylus/tang.styl'
// .product
//   margin-top 36px
//   .albumLogo
//     margin-bottom 34px
//     .jingxuan
//       font-size 18px
//       // color red
//     .huigu
//       float right
//       color $color
//       width 80px
//       height 29px
//       line-height 29px
//       background #22b4f6
//       text-align center
//   .block
//     .blockOne
//       display inline-block
//       margin 0 17px 0 0
//       width 223px
//       height 328px
//       font-size 13px
//       background $color
//       .image img
//         width 100%
//         height 225px
//       .detail
//         margin-top 16px
//         padding 0 0 0 12px
//       .detail span
//         display block
//       .detail span:nth-child(1)
//         margin-bottom 31px
//       .detail span:nth-child(2)
//         color #888
//         margin-bottom 8px
//       .detail span:last-child
//         color #888
//   .block .blockOne:last-child
//     margin 0 0
//     display inline-block
//     width 223px
//     height 328px
//   .block .blockOne:hover
//     box-shadow 5px 5px 5px #cecece
//     position relative
//     top -5px
</style>
