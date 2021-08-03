<template>
    <div class="login-container">
       <van-nav-bar
        class="app-nav-bar"
        title="登录"
        left-arrow
        @click-left="$router.back()"
      />
      <!-- 登录表单 -->
      <!--
        基于Vant的表单验证：
        1、使用vant-form组件包裹所有的表单项 van-field
        2、给van-form绑定submit事件
           当表单提交的时候会触发submit事件
           提示：只有验证通过的时候他才会调用submit
        3、使用Field的rules属性定义校验规则，验证规则可能有多个
       -->
      <van-form @submit="onLogin">
        <van-field
          v-model="user.mobile"
          icon-prefix="toutiao"
          left-icon="shouji"
          right-icon="warning-o"
          placeholder="请输入手机号"
          :rules=formRules.mobile
        />
        <van-field
          v-model="user.code"
          clearable
          icon-prefix="toutiao"
          left-icon="yanzhengma"
          placeholder="请输入验证码"
          :rules=formRules.code
        >
          <template #button>
            <van-button class="send-btn" size="small" round>获取验证码</van-button>
          </template>
        </van-field>
        <div class="login-btn-wrap">
          <van-button type="info" block>登录</van-button>
        </div>
     </van-form>
      <!-- /登录表单 -->
   </div>
</template>
<script>
import { login } from '@/api/user'
// import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  components: {

  },
  props: {

  },
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请填写用户名' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    async onLogin () {
      // Toast.loading({
      this.$toast.loading({
        message: '登录中...', // 加载中提示文案
        forbidClick: true, // 是否禁止背景点击
        duration: 0 // 展示时长(ms),值为0时，toast不会消失
      })
      // 找到数据接口
      // 封装请求方法
      // 请求调用登录
      try {
        const res = await login(this.user)
        // 处理响应结果
        console.log(res)
        this.$toast.success('登录成功') // 这里的新提示会覆盖旧的提示
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败,手机号或验证码错误！')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-container{
  .login-btn-wrap{
    padding: 26px 16px;
    .login-btn-wrap{
      background-color: #3296fa;
      border: none;
      .van-button__text{
        font-size: 15px;
      }
    }
  }
  .send-btn{
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text{
      font-size: 11px;
      color: #666666;
    }
  }

}
</style>
