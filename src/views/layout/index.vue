<template>
    <div>
        <!-- 子路由的出口 -->
        <router-view/>
        <!-- /子路由的出口 -->
        <!-- 导航栏1 -->
        <!-- <router-link to="/my">我的</router-link>
        <router-link to="/qa">问答</router-link>
        <router-link to="/video">视频</router-link>
        <router-link to="/">首页</router-link> -->
        <!-- /导航栏1 -->

        <!-- 底部导航栏2 -->
        <van-tabbar v-model="active" route>
            <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item name="search" icon="comment-o" to="/qa">问答</van-tabbar-item>
            <van-tabbar-item name="friends" icon="video-o" to="/video">视频</van-tabbar-item>
            <van-tabbar-item name="setting" icon="manager-o" to="/my">我的</van-tabbar-item>
        </van-tabbar>
        <!-- /底部导航栏2 -->

        <!-- 底部导航栏3 -->
        <!-- <van-tabbar v-model="active">
          <van-tabbar-item badge="123">
            <span>高尔夫钻石卡专区</span>
            <template #icon="props">
              <img :src="props.active ? icon.active : icon.inactive" />
            </template>
          </van-tabbar-item>
          <van-tabbar-item icon="search">标签</van-tabbar-item>
          <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar> -->
        <!-- /底部导航栏3 -->
    </div>
</template>
<script>
// import qa from '@views/qa/index.vue'
export default {
  name: 'LayoutIndex',
  components: {
    // qa
  },
  props: {

  },
  data () {
    return {
      active: 0,
      icon: {
        active: 'http://bjmsbank.prd.swiftpass.cn/hes/golfactivity/img/img9.jpg', // 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
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

  }
}
</script>
<style lang="scss" scoped>

</style>
