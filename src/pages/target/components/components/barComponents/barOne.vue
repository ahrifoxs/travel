<template>
  <div class="barOne">
    <bar-nav></bar-nav>
    <!-- <bar-search></bar-search> -->
    <bar-form></bar-form>
    <bar-paging></bar-paging>
  </div>
</template>

<script>
import BarNav from '../barOne/BarNav'
// import BarSearch from '../barOne/BarSearch'
import BarForm from '../barOne/BarForm'
import BarPaging from '../barOne/BarPaging'
import axios from 'axios'
export default {
  name: 'BarOne',
  components: {
    BarNav,
    // BarSearch,
    BarForm,
    BarPaging
  },
  methods: {
    barOne: function () {
      axios.get('/static/mock/target.json', {
        params: {id: this.$route.params.id}
      })
        .then(this.getBarOneInfo)
    },
    getBarOneInfo: function (res) {
      const data = res.data.data
      // console.log(data)
      this.tableData = data.tableDataList.tableData
      this.total = data.tableDataList.total
      // console.log(this.total)
    }
  },
  mounted () {
    this.barOne()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/target.styl'
</style>
