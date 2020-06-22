<template>
  <div class="target">
    <target-header :list="targetHeaderList"></target-header>
    <target-main></target-main>
    <target-footer></target-footer>
  </div>
</template>

<script>
import targetHeader from './components/header'
import targetMain from './components/main'
import targetFooter from './components/footer'
import axios from 'axios'
export default {
  name: 'Target',
  components: {
    targetHeader,
    targetMain,
    targetFooter
  },
  data () {
    return {
      targetHeaderList: ''
    }
  },
  methods: {
    headerInfo: function () {
      axios.get('/static/mock/target.json')
        .then(this.headerInfoSucc)
    },
    headerInfoSucc (res) {
      const data = res.data.data
      this.targetHeaderList = data.targetHeaderList
    }
  },
  mounted () {
    this.headerInfo()
  }
}
</script>

<style lang="stylus" scoped>
.target
  font-family 'Open Sans', sans-serif
</style>
