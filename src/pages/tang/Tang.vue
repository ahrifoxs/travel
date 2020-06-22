<template>
  <div>
      <tang-header :list="tangHeader"></tang-header>
      <tang-main></tang-main>
      <tang-footer></tang-footer>
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import tangHeader from './components/header'
import tangMain from './components/main'
import tangFooter from './components/footer'
import axios from 'axios'
export default {
  name: 'Tang',
  components: {
    tangHeader,
    tangMain,
    tangFooter
  },
  data () {
    return {
      tangHeader: []
    }
  },
  methods: {
    tangHeaderInfo () {
      axios.get('/static/mock/tang.json')
        .then(this.getTangHeaderInfoSucc)
    },
    getTangHeaderInfoSucc (res) {
      const data = res.data
      // console.log(data)
      // console.log(data.data.tangHeaderList)
      this.tangHeader = data.data.tangHeaderList
      // console.log(this.tangHeader)
    }
  },
  activated () {
    this.tangHeaderInfo()
  }
}

</script>

<style lang="stylus" scoped>

</style>
