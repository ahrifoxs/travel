<template>
  <el-footer>
    <div class="footer">
      <div class="shadow-img">
        <div class="cover">
          <div class="img-first">
            <img src="../../../assets/styles/img/2.png" alt="">
          </div>
          <div class="img-second">
            <i></i><img src="../../../assets/styles/img/4.png" alt=""><i></i>
          </div>
        </div>
      </div>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'ShadowList'
}
</script>

<style lang="stylus" scoped>
.el-footer
  width 1500px
  height 568px !important
.footer
  width 1500px
  height 568px
  .shadow-img
    background rgba(0, 0, 0, .5)
    .cover
      width 1500px
      height 568px
      position relative
      text-align center
      color #fff
      margin 20px auto
    .cover::before {
      content ""
      position absolute
      top 0
      left 0
      width 1500px
      height 568px
      background transparent url("../../../assets/styles/img/3.png") center center no-repeat
      filter blur(8px)
      z-index -1
      background-size cover
    }
.img-first
  width 776px
  height  106px
  line-height 106px
  position absolute
  top 40%
  left 40%
  margin-left -338px
.img-second
  width 776px
  height  106px
  line-height 106px
  position absolute
  top 58%
  left 40%
  margin-left -338px
.img-second i
  width 40px
  height 1px
  background #ffffff
  display inline-block
  margin 0 26px 0 26px
  vertical-align middle
</style>
