<template>
<!-- 此处是头部 -->
  <div>
    <el-container>
  <el-header>
      <div class="study">
        <div class="header-img">
            <img class="img-message" :src="imgUrl" alt="">
        </div>
        <ul v-for="item in list" :key="item.id">
            <router-link tag="li" to="/tang">{{item}}</router-link>
        </ul>
    </div>
  </el-header>
  <!-- <el-container>
    <el-aside style="width: 201px">
      <el-row class="tac">
        <el-col :span="12">
            <el-menu
             default-active="2"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
    </el-aside>
    <el-container>
      <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
      </el-main>
    </el-container>
  </el-container> -->
  <!-- 此处是尾部 -->
  <!-- <el-footer>
    <div class="footer">
      <div class="shadow-img">
        <div class="cover">
          <div class="img-first">
            <img src="../../../assets/styles/img/2.png" alt="">
          </div>
          <div class="img-second">
            <i></i><img src="../../../assets/styles/img/4.png" alt=""><i></i>
          </div>
        </div>
      </div>
    </div>
  </el-footer> -->
  <!-- 此处是menu部分 -->
  <!-- <div class="Menu">
    <div class="Menu-list"></div>
    <div class="Menu-conter">The Menu</div>
  </div> -->
</el-container>
  </div>
<!-- 此处是swiper部分 -->
<!-- 此处是列表部分 -->
<!-- 此处是featured dishes部分 -->
<!-- 此处是the gallery部分 -->
</template>

<script>
import Oimg from '../../../assets/styles/img/1.png'
export default {
  name: 'HeaderList',
  data () {
    return {
      activeName: 'second',
      list: ['Our Story', 'Menu', 'Reservations', 'Rviews'],
      imgUrl: Oimg
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-header
  height 110px !important
  line-height 110px
.study ul
  float right
  padding-right 20px
  height 110px
  line-height 110px
.study ul li
  float left
  width 100px
  text-align center
  cursor pointer
.header-img
    width 180px
    height 54px
    line-height 54px
    overflow hidden
    float left
    background #ffffff
    margin 28px 0 28px 220px
  .img-message
    width 100%
.sty
  position relative
.active
  position absolute
  left 220px
  top 20px
// .el-col-12
//   width 100% !important
// .el-footer
//   width 1500px
//   height 588px !important
// .footer
//   width 1500px
//   height 568px
//   .shadow-img
//     background rgba(0, 0, 0, .5)
//     .cover
//       width 1500px
//       height 568px
//       position relative
//       text-align center
//       color #fff
//       margin 20px auto
//     .cover::before {
//       content ""
//       position absolute
//       top 0
//       left 0
//       width 1500px
//       height 568px
//       background transparent url("../../../assets/styles/img/3.png") center center no-repeat
//       filter blur(8px)
//       z-index -1
//       background-size cover
//     }
// .img-first
//   width 776px
//   height  106px
//   line-height 106px
//   position absolute
//   top 40%
//   left 40%
//   margin-left -338px
// .img-second
//   width 776px
//   height  106px
//   line-height 106px
//   position absolute
//   top 58%
//   left 40%
//   margin-left -338px
// .img-second i
//   width 40px
//   height 1px
//   background #ffffff
//   display inline-block
//   margin 0 26px 0 26px
//   vertical-align middle
// .Menu
//   position relative
// .Menu-list
//   width 100%
//   height 5px
//   background #f34949
// .Menu-conter
//   position absolute
//   top 0
//   left 50%
//   margin-left -78px
//   width 155px
//   height 71px
//   background #f34949
//   text-align center
//   color #ffffff
//   line-height 71px
//   font-size 16px
//   font-family 'Times New Roman', Times, serif
// .Menu-conter:after {
//     position absolute
//     content ''
//     left 0
//     bottom 0
//     width 0
//     height 0
//     border-left 78px solid transparent
//     border-right 78px solid transparent
//     border-bottom 10px solid #fff
// }
</style>
