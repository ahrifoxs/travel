<template>
    <div>
      <!-- <router-link to="/">你的名字</router-link>
      <div>你的名字</div> -->
      <header-list></header-list>
      <!-- <aside-list></aside-list> -->
      <shadow-list></shadow-list>
      <menu-list></menu-list>
      <dishes></dishes>
      <!-- <waterfull :list="waterfullList"></waterfull> -->
      <magic></magic>
      <tang-footer></tang-footer>
      <!-- <gallery></gallery> -->
    </div>
</template>

<script>
import HeaderList from './components/header'
import AsideList from './components/aside'
import ShadowList from './components/shadow'
import MenuList from './components/Menu'
import Dishes from './components/food'
import Gallery from './components/gallary'
import Waterfull from './components/waterfull'
import Magic from './components/magic'
import tangFooter from '../tang/components/footer'
import axios from 'axios'
export default {
  name: 'List',
  components: {
    HeaderList,
    AsideList,
    ShadowList,
    MenuList,
    Dishes,
    Gallery,
    Waterfull,
    Magic,
    tangFooter
  },
  data () {
    return {
      waterfullList: []
    }
  },
  methods: {
    getWaterfullInfo () {
      // var root = process.env.API_ROOT
      axios.get('/static/mock/img.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getWaterfullInfoSucc)
    },
    getWaterfullInfoSucc (res) {
      const data = res.data
      // console.log(data)
      this.waterfullList = data.data.waterfull
      // console.log(this.waterfullList)
    }
  },
  activated () {
    this.getWaterfullInfo()
    this.getSUcc()
  }
}
</script>

<style lang="stylus" scoped>

</style>
