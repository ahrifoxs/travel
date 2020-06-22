<template>
  <div class="shopping">
    <div class="albumLogo">
      <span class="jingxuan">{{shop.jingxuan}}</span>
      <span class="huigu">{{shop.huigu}}</span>
    </div>
    <div class="waterfall">
      <div class="box1" v-for="item of list" :key="item.id">
        <div class="pic" index="item.id">
          <img :src="item.imgSrc"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopping',
  props: {
    list: Array,
    shop: ''
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/less/waterfall.less'
@import '~@/assets/styles/stylus/tang.styl'
</style>
