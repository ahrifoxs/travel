<template>
  <div class="dishes">
    <div class="dishes-i">
      <span>{{dish}}</span>
    </div>
    <div>
        <ul>
            <li v-for="item in GalleryList" :key="item.id">
                <div>
                    <img class="foodImg" :src="item.imgUrl" alt="">
                </div>
            </li>
        </ul>
       </div>
  </div>
</template>

<script>
import Oimg1 from '../../../assets/styles/img/g1.png'
import Oimg2 from '../../../assets/styles/img/g2.png'
import Oimg3 from '../../../assets/styles/img/g3.png'
import Oimg4 from '../../../assets/styles/img/g4.png'
export default {
  name: 'Gallery',
  data () {
    return {
      dish: 'The Gallery',
      'GalleryList': [
        {
          'id': '001',
          'imgUrl': Oimg1
        },
        {
          'id': '002',
          'imgUrl': Oimg2
        },
        {
          'id': '003',
          'imgUrl': Oimg3
        },
        {
          'id': '004',
          'imgUrl': Oimg4
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.dishes
  margin 0 150px
  width 1100px
  .dishes-i
    margin-bottom 150px
  .dishes-i span
    // margin-bottom 200px
    font-size 18px
    font-family 'Times New Roman', Times, serif
</style>
