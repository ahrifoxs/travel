<template>
  <div class="fizzMain">
    <!-- <div class="menuList">
      <ul>
        <li ref="cons" v-for="(item,index) in lists.list" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="tabCon">
      <div ref="cont" v-for='(itemCon,index) in lists.tabContents' v-show="index == num" :class="{acitve:isAuto}" :key="index">
        {{itemCon}}
      </div>
    </div> -->
    <!-- 测试Vuex -->
    <!-- <div class="vx">
      购物车中有{{this.number}}件商品
    </div> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Login'
  // props: {
  //   lists: ''
  // },
  // data () {
  //   return {
  //     fizzList: this.lists,
  //     num: 0,
  //     isAuto: false
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     number: 'num'
  //   })
  // },
  // methods: {
  //   getNum (index) {
  //     this.num = index
  //   },
  //   codfdf: function () {
  //     // console.log(this.fizzList)
  //     const tabContents = this.lists.tabContents
  //     for (let i in tabContents) {
  //       console.log(this.$refs.cont[0].innerText)
  //       if (tabContents[i].indexOf('张三丰') > -1) {
  //         // tabContents[i].itemCon = tabContents[i].itemCon.replace(eval("/"+this.$refs.cons.innerText+"/g"),"<span style='background-color: yellow;color:red'>"+this.$refs.cons.innerText+"</span>");
  //       // arr.push(tabContents[i].indexOf("张三丰"))
  //         // this.isAuto = true
  //       }
  //     }
  //   }
  // },
  // mounted () {
  //   this.codfdf()
  // }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/stylus/management.styl'
html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: #58596b;
    }

    .active {
      color: #fff;
      background: #e74c3c;
    }

    .fizzMain {
      width: 800px;
      height: 400px;
      margin: 10px auto;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1);

    }

    .menuList {
      width: 800px;
      height: 60px;
      background-color: #33344a;
    }

    ul {
      width: 100%;
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
      color: #717181;
      font-size: 16px;
      line-height: 60px;

    }

    ul li {
      flex: 1;
      text-align: center;
      cursor: pointer;
    }

    .tabCon {
      width: 700px;
      margin: 0 auto;
      padding: 40px 20px;
      color: #999;
      font-size: 14px;
      background-color: #fff;
    }
    .acitve{
      color red
    }
</style>
