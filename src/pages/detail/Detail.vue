<template>
  <div>
    <banner :sightName='sightName' :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
    <detail-header></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import detailList from './components/List'
import axios from 'axios'
// import qs from 'qs'
export default {
  name: 'Detail',
  props: ['id'],
  components: {
    Banner,
    DetailHeader,
    detailList
  },
  data () {
    return {
      list: [],
      categoryList: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      idDetail: this.$route.params.id
    }
  },
  // create: function () {
  //   console.log(this.idDetail)
  // },
  methods: {
    getDetailInfo () {
      axios.get('/static/mock/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      // const data = res.data
      // console.log(this.idDetail)
      const detail = res.data.data.dataDetail
      // console.log(detail)
      for (let i = 0; i < detail.length; i++) {
        for (let n = 0; n < detail.length; n++) {
          // console.log(n)
          if (this.idDetail === detail[n][i]['id']) {
            // console.log(1)
            this.categoryList = detail[n][i].categoryList
            this.bannerImg = detail[n][i].bannerImg
            this.sightName = detail[n][i].sightName
            this.gallaryImgs = detail[n][i].gallaryImgs
          // console.log(this.sightName)
          }
        }
        console.log(i)
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
  // activated () {
  //   if(this.list) {
  //     this.$router.go(0)
  //     }
  // }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
