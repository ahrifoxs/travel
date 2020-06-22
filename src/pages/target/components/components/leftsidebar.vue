<template>
<div class="leftSideBar">
  <el-row class="tac">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item v-for="item in list" :index="item.id.toString()" @click="publicClick(item.id)" :key="item.id">
          <i :class="item.icon"></i>
          <span slot="title">{{item.navigation}}</span>
        </el-menu-item>
    </el-menu>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'leftSideBar',
  props: {
    list: Array
  },
  data () {
    return {
      id: 1
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    publicClick (val) {
      // console.log(this.list)
      // console.log(val)
      if (typeof val === 'number') {
        switch (val) {
          case 1:
            // this.clickChang(val)
            this.$router.push({ path: '/target/barone' })
            // this.$router.push({ name: target, params: {name:barone} })
            break
          case 2:
            // this.clickChang(val)
            // this.$router.push({ name: 'target', params: {name:'bartwo'} })
            this.$router.push({ path: '/target/bartwo' })
            break
          case 3:
            // this.clickChang(val)
            // this.$router.push({ name: 'target', params: {name:'barthree'} })
            this.$router.push({ path: '/target/barthree' })
            break
          case 4:
            // this.clickChang(val)
            // this.$router.push({ name: 'target', params: {name:'barfour'} })
            this.$router.push({ path: '/target/barfour' })
            break
        }
      }
    },
    handleClick: function (val) {
      console.log(this.$route.name)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/target.styl'
</style>
