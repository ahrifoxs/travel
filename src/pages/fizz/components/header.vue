<template>
  <div class="fizzHeader">
    <!-- <div class="box">
      <div class="title">
        <img class="images01" src="images/logo01.jpg" alt="">
        <div>菲兹首页logo</div>
        <div class="navigation">
          <div>注册</div>
          <div>登录</div>
          <div>我的收藏</div>
          <div>我的订单</div>
          <div>购物篮</div>
        </div>
      </div>
    </div>
    <div class="logoCon">
      <img src="../../../assets/img/logo04.png" alt="" />
      <form>
        <input id="search" type="text" placeholder="搜商品">
        <input id="sousou" type="submit" value="搜索">
      </form>
      <ul class="nav">
        <li>毛呢外套</li>
        <li> 短靴</li>
        <li> 毛衣</li>
        <li> 男士外套</li>
        <li> 卫衣</li>
        <li> 睡衣</li>
        <li> 秋冬套装</li>
        <li> 打底裤</li>
        <li> 连衣裙</li>
      </ul>
    </div> -->
  <!-- 以下是测试bootstrap-vue -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fizzHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/management.styl'
</style>
