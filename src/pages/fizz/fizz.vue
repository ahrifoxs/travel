<template>
    <div>
      <fizz-header></fizz-header>
      <fizz-main></fizz-main>
      <fizz-footer></fizz-footer>
      <router-view></router-view>
    </div>
</template>

<script>
import fizzHeader from './components/header.vue'
import fizzMain from './components/main.vue'
import fizzFooter from './components/footer.vue'
export default {
  name: 'Fizz',
  components: {
    fizzHeader,
    fizzMain,
    fizzFooter
  }
  // data () {
  //   return {
  //     fizzMainList: []
  //   }
  // },
  // methods: {
  //   fizzInfo () {
  //     Axios.get('/static/mock/tang.json')
  //       .then(this.getFizzInfo)
  //   },
  //   getFizzInfo (res) {
  //     res = res.data
  //     if (res.ret && res.data) {
  //       this.fizzMainList = res.data.fizzMainList
  //       // console.log(this.fizzMainList)
  //     }
  //   }
  // },
  // activated () {
  //   this.fizzInfo()
  // }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/management.styl'
</style>
