<template>
  <div>
    <login :lists="fizzMainList"></login>
    <enter></enter>
  </div>
  <!-- <div class="fizzMain">
    <div class="menuList">
      <ul>
        <li v-for="(item,index) in lists.list" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="tabCon">
      <div v-for='(itemCon,index) in lists.tabContents' v-show="index == num" :class="{acitve:isAuto}" :key="index">
        {{itemCon}}
      </div>
    </div>
  </div> -->
</template>

<script>
import Login from './components/login'
import enter from './components/enter'
import Axios from 'axios'
export default {
  name: 'fizzMain',
  // props: {
  //   lists: ''
  // },
  components: {
    Login,
    enter
  },
  data () {
    return {
      fizzMainList: []
    }
  },
  methods: {
    fizzInfo () {
      Axios.get('/static/mock/tang.json')
        .then(this.getFizzInfo)
    },
    getFizzInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        this.fizzMainList = res.data.fizzMainList
        // console.log(this.fizzMainList)
      }
    }
  },
  activated () {
    this.fizzInfo()
  }
  // data () {
  //   return {
  //     fizzList: this.lists,
  //     num: 0,
  //     isAuto: false
  //   }
  // },

  // methods: {
  //   getNum (index) {
  //     this.num = index
  //   },
  //   codfdf: function () {
  //     console.log(this.fizzList)
  //     const tabContents = this.lists.tabContents
  //     // var arr = []
  //     for (let i in tabContents) {
  //       if (tabContents[i].indexOf('张三丰') > -1) {
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
