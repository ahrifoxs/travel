<template>
    <div class="form">
      <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      :row-key="getRowKeys"
      :expand-row-keys="expands">
        <el-table-column
        type="index"
        label="编号">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
       <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
      </el-table>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'BarForm',
  props: {
    list: Array
  },
  data () {
    return {
      search: '',
      // 获取row的key值
      getRowKeys (row) {
        return row.id
      },
      // 要展开的行，数值的元素是row的key值
      expands: [10],
      currentPage: 1,
      pagesize: 5,
      tableData: [],
      total: 1
    }
  },
  methods: {
    handleDelete (index, row) {
      // console.log(index, row)
    },
    barFormmessage: function () {
      Axios.get('/static/mock/target.json')
        .then(this.barFormmessageInfo)
    },
    barFormmessageInfo: function (res) {
      // console.log(res)
      const data = res.data.data
      this.tableData = data.tableDataList.tableData
      this.total = data.tableDataList.total
      // console.log(data)
    }
  },
  mounted () {
    this.barFormmessage()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/target.styl'
</style>
