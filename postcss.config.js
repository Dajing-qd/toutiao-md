/* postCSS配置文件，需要导出一个对象。
PostCSS是基于Node.js运行的一个处理css的工具，所以它的配置文件也是运行在Node.js中的
 需要注意的是：
该'postcss-pxtorem'插件不能转换行内样式中的 px，例如 <div style="width: 200px;"></div>
*/
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器.VueCLI已经在内部默认配置了
    // autoprefixer: {
    //   // browsers用来配置要兼容到的系统（浏览器）环境
    //   // 这个配置没有问题，但是写到这里会有控制台编译警告，
    //   // 为什么？ 因为VueCLI是通过项目中的.browserslistrc文件来配置要兼容的环境信息的,所以下面的注释掉
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // 把px转成rem
    'postcss-pxtorem': {
      // 转换的根元素基准值
      // 正常情况下按照设计稿来
      // 750宽的设计稿 750/10 = 75
      // 375 宽的设计稿 375/10 = 37.5
      // vant组件库是基于逻辑像素375宽写的
      // 移动端页面一般都是基于iphone6/7/8为原型设计（逻辑像素375）的
      // 设计稿都是基于物理像素eg:750宽设计的
      // 所以如果设置成75，那么我们就可以在设计稿中测量多少就写多少
      // 但是vant的样式就会变得很小，小了一半，所以我们还是使用37.5
      // 但是在测量我们设计稿的时候，我们必须让测量单位/2
      rootValue: 37.5,
      // 需要转换的CSS属性，* 就是所有属性都要转换,所有带单位的都要转换
      // 还可以写 font-size,height等

      propList: ['*']
    }
  }
}
