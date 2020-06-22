<template>
<div class="waterfall">
    <div class="box1" v-for="item of list" :key="item.id">
        <div class="pic" index="item.id">
            <img :src="item.imgSrc"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'WaterfullList',
  props: {
    list: Array
  }
}

</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/less/waterfall.less'

</style>
