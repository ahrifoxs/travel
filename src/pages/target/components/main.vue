<template>
  <div class="targetMain">
    <el-container>
      <el-aside width="260px" class="left"><left-side-bar :list="leftSideBarList"></left-side-bar></el-aside>
      <el-main><right-side-bar></right-side-bar></el-main>
    </el-container>
  </div>
</template>

<script>
import leftSideBar from './components/leftsidebar'
import rightSideBar from './components/rightsidebar'
import axios from 'axios'
export default {
  name: 'targetMain',
  data () {
    return {
      leftSideBarList: []
    }
  },
  components: {
    leftSideBar,
    rightSideBar
  },
  methods: {
    leftSideBarInfo: function () {
      axios.get('/static/mock/target.json')
        .then(this.getLeftSideBarInfoSucc)
    },
    getLeftSideBarInfoSucc: function (res) {
      const data = res.data.data
      this.leftSideBarList = data.leftSideBarList
    }
  },
  mounted () {
    this.leftSideBarInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/target.styl'
</style>
