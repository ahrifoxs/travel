<template>
  <div class="nav">
      <div class="navLogo"><h1>Charts</h1>
      <slot>
        你的名字
      </slot>
      </div>
      <div class="navList">
        <el-steps :active="1" simple>
          <el-step title="home" icon="el-icon-edit"></el-step>
          <el-step title="Tabs & Panels" icon="el-icon-upload"></el-step>
          <el-step title="Data" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
    </div>
</template>
<script>
export default {
  name: 'BarNav'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/target.styl'
</style>
