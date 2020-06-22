<template>
  <div class="enter">
    1
    <!-- <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: 'Enter'
  // data () {
  //   return {
  //     num: 1
  //   }
  // },
  // methods: {
  //   handleChange (value) {
  //     // console.log(value)
  //     const vmum = value
  //     this.change(vmum)
  //     console.log(vmum)
  //     // this.$store.commit('change', vmum)
  //   },
  //   ...mapMutations(['change'])
  // }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/management.styl'
</style>
