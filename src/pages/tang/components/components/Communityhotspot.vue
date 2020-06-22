<template>
    <div class="communityHotspot">
      <el-container>
        <el-main>
           <swiper :options="swiperOption">
             <swiper-slide v-for="item of list" :key="item.id"><img  class="swiper-img" :src="item.imgSrc" alt="锦绣中华4月特惠">
             </swiper-slide>
             <div class="swiper-pagination"  slot="pagination"></div>
             <div class="swiper-button-prev" slot="button-prev"></div>
             <div class="swiper-button-next" slot="button-next"></div>
             <div class="swiper-scrollbar"   slot="scrollbar"></div>
          </swiper>
        </el-main>
          <el-aside class="AsideOne" width="469px" height="447px">
            <div class="aside">
              <ul>
                <li class="sideTop">
                  <div class="hotspot">
                    <span>{{hotspotList.hotspot}}</span>
                  </div>
                  <div class="cold">
                    <ul>
                      <router-link tag="li" to="/" v-for="item of hotspotList.cold" :key="item.id">{{item.coldName}}</router-link>
                      <!-- <li v-for="item of hotspotList.cold" :key="item.id">
                       {{item.coldName}}
                      </li> -->
                    </ul>
                  </div>
                  <div class="dress">
                    {{hotspotList.dress}}<span>{{hotspotList.dressNew}}</span>
                  </div>
                  <div class="helper">
                    {{hotspotList.helper}}
                  </div>
                </li>
                <li class="sideButtom" @click="fromManage()">
                  <div>
                    <img :src="hotspotList.sideButtomSrc" alt="">
                  </div>
                </li>
                <!-- <router-view></router-view> -->
              </ul>
            </div>
          </el-aside>
  </el-container>
    </div>
</template>

<script>
export default {
  name: 'communityHotspot',
  props: {
    list: '',
    hotspotList: ''
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    fromManage: function () {
      this.$router.push('/fizz')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/stylus/tang.styl'
// .communityHotspot >>> .el-main
//   padding 0 20px
// .communityHotspot
//   padding 0 0 25px 0
//   border-bottom 1px solid #ccc
//   .swiper-img
//     width 745px
//     height 447px
//   .AsideOne
//     width 469px
//     height 447px
//     .aside
//       .sideTop
//         // width 469px
//         background $color
//         height 292px
//         padding 0 33px
//         margin-bottom 23px
//         .hotspot
//           // width 100%
//           height 53px
//           span
//             display block
//             // width 403px
//             height 53px
//             line-height 53px
//             // margin 0 33px
//             border-bottom 1px solid #ebebeb
//             font-size 16px
//             color #7d6695
//         .cold
//           margin 12px 0 12px 0
//           border-bottom 1px dashed #ebebeb
//           overflow auto
//           zoom 1
//         .cold:after
//             content ''
//             display block
//             clear both
//         .cold ul li
//           color #333
//           float left
//           margin 12px 0
//           padding 0 16px
//           border-right 1px solid #cecece
//           cursor pointer
//         .dress
//           clear both
//           padding 18px 0
//           border-bottom 1px solid #ebebeb
//         .helper
//           padding 18px 0
//       .sideButtom
//         width 469px
//         height 132px
//         img
//           width 469px
//           height 132px
</style>
