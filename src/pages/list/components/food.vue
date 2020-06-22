<template>
  <div class="dishes">
    <div class="dishes-i">
      <span>{{dish}}</span><i></i>
    </div>
    <div class="food-list">
       <div>
           <ul>
               <li v-for="item in dishList" :key="item.id">
                   <div>
                     <img class="foodImg" :src="item.urlImg" alt="">
                   </div>
                   <div class="price">
                       <span class=" character">{{item.character}}</span>
                       <span class="money">{{item.money}}</span>
                   </div>
                   <div class="stars">
                      <div class="block">
                        <el-rate
                        v-model="value2"
                        :colors="colors">
                        </el-rate>
                      </div>
                   </div>
                </li>
           </ul>
       </div>
    </div>
  </div>
</template>

<script>
import Oimg1 from '../../../assets/styles/img/food1.png'
import Oimg2 from '../../../assets/styles/img/food2.png'
import Oimg3 from '../../../assets/styles/img/food3.png'
import Oimg4 from '../../../assets/styles/img/food4.png'
export default {
  name: 'Dishes',
  data () {
    return {
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      'dish': 'FEATURED DISHES',
      'dishList': [
        {
          'id': '001',
          'urlImg': Oimg1,
          'character': 'Fugiat nulla sint',
          'money': '$30'
        },
        {
          'id': '002',
          'urlImg': Oimg2,
          'character': 'Fugiat nulla sint',
          'money': '$24'
        },
        {
          'id': '003',
          'urlImg': Oimg3,
          'character': 'Fugiat nulla sint',
          'money': '$60'
        },
        {
          'id': '004',
          'urlImg': Oimg4,
          'character': 'Fugiat nulla sint',
          'money': '$17'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.dishes
  margin 80px 150px
  width 1100px
  overflow hidden
  .dishes-i span
    font-size 18px
    font-family 'Times New Roman', Times, serif
  .dishes-i i
    display inline-block
    width 200px
    height 1px
    background #e5e3e3
    vertical-align middle
    margin-left 20px
.food-list
  margin-top 80px
.food-list ul li
  float left
  margin-left 60px
.food-list ul li:nth-child(1)
  margin-left 0
.foodImg
  width 230px
  height 202px
.price
  font-size 12px
  margin-top 30px
  margin-bottom 26px
  .money
    float right
    overflow hidden
</style>
