<template>
  <div class="targetHeader">
    <div class="targetLogo">
        <p>{{list.targetLogo}}</p>
    </div>
    <div class="targetToc">
        <i>{{list.targetToc}}</i>
    </div>
    <div class="targetLive">
        <div v-for="(item, index) in list.targetLive" :key="index">
            <i class="iconfont" :class="item.icon"></i><p>{{item.name}}</p><span>{{item.iconName}}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'targetHeader',
  props: {
    list: ''
  },
  data () {
    return {
      lists: this.list
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/stylus/target.styl'
</style>
