<template>
    <div class="barTwo">
      <bar-nav></bar-nav>
      <bar-progress></bar-progress>
    </div>
</template>

<script>
import BarNav from '../barTwo/BarNav'
import BarProgress from '../barTwo/BarProgress'
export default {
  name: 'BarTwo',
  components: {
    BarNav,
    BarProgress
  }
}
</script>

<style lang="stylus" scoped>

</style>
