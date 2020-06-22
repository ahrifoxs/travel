<template>
  <div class="header">
      <div class="contents">
          <div class="tangLeft">
              <div class="tangLogo"><img :src="list.tangImg" alt=""></div>
              <div class="classify">
                  <el-select v-model="list.selectValue" placeholder="分类">
                    <el-option
                        v-for="item in list.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
              </div>
              <div class="tangInput">
                <el-input v-model="list.inputValue" placeholder="Search here..." class="search"></el-input>
              </div>
              <div class="tangRight">
                <ul>
                    <router-link tag="li" to="/">{{list.home}}<span>{{list.inew}}</span></router-link>
                    <!-- <li><span>{{list.login}}</span></li> -->
                    <li>
                      <el-popover placement="right" width="400" trigger="click">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
                          <el-form-item label="密码" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="年龄" prop="age">
                            <el-input v-model.number="ruleForm.age"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                          </el-form-item>
                        </el-form>
                        <el-button class="loginButton" slot="reference">{{list.login}}</el-button>
                      </el-popover>
                    </li>
                    <li>{{list.enter}}</li>
                    <li>{{list.phone}}</li>
                </ul>
               </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tangHeader',
  props: {
    list: ''
  },
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/less/tang.less'
@import '~@/assets/styles/stylus/tang.styl'
// .header >>> .el-input__inner
//   height 33px
//   line-height 33px
// .tangRight >>> .el-button
//   color $color
//   padding 0
//   background #f46
//   border none
// .header
//   position fixed
//   z-index 9
//   background $color
//   width $width
//   .contents
//     width $width
//     height 65px
//     padding 17px 0 15px 0
//     box-shadow 0 1px 1px #e0e0e0,0 1px 1px #cecfd0
//   .headerLogin
//     background rgba(0,0,0,0.2)
//     position fixed
//     width 100%
//     height 100%
//     z-index 99
//     .headerLoginOne
//       position absolute
//       left 50%
//       width 500px
//       height 300px
//       margin-left -250px
//       background $color
//   .tangLeft
//     display flex
//     // justify-content space-between
//     // flex-direction row
//     padding 0 0 0 4.9%
//     height 32px
//     line-height 32px
//     .tangInput
//       // width 608px
//       width 45%
//       height 32px
//       padding-left 4.9%
//       padding-right 12.2%
//       .search
//         height 33px !important
//         line-height 33px
//     .classify
//       width 8%
//       height 26px !important
//       font-size 12px
//       padding-left 2%
//     .tangRight
//       width 43%
//       text-align center
//     .tangRight ul li
//       float $left
//       padding 0 5.8%
//       height 32px
//       line-height 32px
//       color $darkTextColor
//       border-left 1px solid #ebebeb
//       cursor pointer
//     .tangRight ul li:nth-child(1) span
//       width 1%
//       color $color
//       background #ff4466
//       padding 1px 4px
//       border-radius 3px
//     .tangRight ul li:nth-child(2) span
//       width 1%
//       color $color
//       background #ff4466
//       padding 4px 13px
//       border-radius 3px
</style>
