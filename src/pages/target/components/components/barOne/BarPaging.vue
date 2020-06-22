<template>
     <!-- 以下是分页 -->
    <div class="paging">
      <el-pagination @current-change="pagesChange"
        background
        layout="prev, pager, next"
        :page-count="total">
      </el-pagination>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'BarPaging',
  // props: {
  //   total: ''
  // },
  data () {
    return {
      pageSize: 4,
      total: 10,
      currentPage: 1
      // total: ''
      // totals: this.total
    }
  },
  methods: {
    pagesChange: function (currentPage) {
      Axios.get('/static/mock/target.json', {
        params: {
          currentPage,
          pageSize: this.pageSize
        }
      })
        .then(this.pagesChangeInfo)
      // console.log(currentPage)
      this.currentPage = currentPage
    },
    pagesChangeInfo: function (res) {
      const data = res.data.data
      this.total = data.tableDataList.total
    }
  },
  mounted () {
    this.pagesChange()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/target.styl'
</style>
