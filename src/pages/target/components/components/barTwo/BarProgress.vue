<template>
  <div class="barProgress">
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70"></el-progress>
    <el-progress type="circle" :percentage="50"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'BarProgress'
}
</script>

<style lang="stylus" scoped>

</style>
