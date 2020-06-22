<template>
  <div class="main">
      <community-hotspot :list="communityHotspot" :hotspotList="hotspotList"></community-hotspot>
      <album :list="albumList"></album>
      <product :list="productList"></product>
      <intelligent :list="intelligentList"></intelligent>
      <shopping :list="waterfullList" :shop="shoppingList"></shopping>
  </div>
</template>

<script>
import communityHotspot from './components/Communityhotspot'
import album from './components/Album'
import product from './components/Product'
import intelligent from './components/Intelligent'
import shopping from './components/Shopping'
import axios from 'axios'
export default {
  name: 'tangMain',
  components: {
    communityHotspot,
    album,
    product,
    intelligent,
    shopping
  },
  data () {
    return {
      waterfullList: [],
      communityHotspot: [],
      hotspotList: '',
      albumList: '',
      productList: '',
      intelligentList: '',
      shoppingList: ''
    }
  },
  methods: {
    getWaterfullInfo () {
      axios.get('/static/mock/img.json')
        .then(this.getWaterfullInfoSucc)
    },
    getWaterfullInfoSucc (res) {
      const data = res.data
      // console.log(data)
      this.waterfullList = data.data.waterfull
      // console.log(this.waterfullList)
      // console.log(1)
    },
    getCommunityHotspotInfo () {
      axios.get('/static/mock/tang.json')
        .then(this.getCommunityHotspotInfoSucc)
    },
    getCommunityHotspotInfoSucc (res) {
      const data = res.data
      // console.log(data)
      this.communityHotspot = data.data.communityHotspot
      this.hotspotList = data.data.hotspotList
      this.albumList = data.data.albumList
      this.productList = data.data.productList
      this.intelligentList = data.data.intelligentList
      this.shoppingList = data.data.shoppingList
    }
  },
  activated () {
    this.getWaterfullInfo()
    this.getCommunityHotspotInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/less/tang.less'
@import '~@/assets/styles/stylus/tang.styl'
// .main
//   padding 106px 90px 0 74px
//   background #f1f2f3
//   margin-bottom 100px
</style>
