<template>
    <div class="barThree">
      <bar-nav><template>
        <slot>
          我的名字
        </slot>
      </template></bar-nav>
    </div>
</template>

<script>
import BarNav from '../barThree/BarNav'
export default {
  name: 'BarThree',
  components: {
    BarNav
  }
}
</script>

<style lang="stylus" scoped>

</style>
