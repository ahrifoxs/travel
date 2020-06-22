<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.id"><img  class="swiper-img" :src="item.imgUrl" alt="锦绣中华4月特惠"></swiper-slide>
        <!-- <swiper-slide><img  class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/d5e75189aa77d8c57f97069d464739b4.jpg_890x330_4e33f263.jpg" alt="广州融创100W"></swiper-slide> -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
      // swiperList: [
      //   {
      //     id: '0001',
      //     imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/1b9c5f71a6cac45792ab25693bdadda0.jpg_890x330_ad787a32.jpg'
      //   },
      //   {
      //     id: '0002',
      //     imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/d5e75189aa77d8c57f97069d464739b4.jpg_890x330_4e33f263.jpg'
      //   }
      // ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 37.07%
  background #eee
  .swiper-img
    width 100%
</style>
