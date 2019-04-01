<template>
  <el-container id="app" ref="homePage" style="height:500px;">
    <el-header style="height:68px;border-bottom: solid 1px #202020;">
      <MyHeader></MyHeader>
    </el-header>
    <el-main>
      <router-view />
      <Footer></Footer>
    </el-main>
  </el-container>
</template>

<script>
import MyHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    MyHeader,
    Footer
  },
  data() {
    return {
      clientHeight: ""
    };
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`;
    //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.changeFixed(this.clientHeight);
    }
  },
  methods: {
    changeFixed(clientHeight) {
      //动态修改样式
      // console.log(clientHeight);
      // console.log(this.$refs.homePage.$el.style.height);
      this.$refs.homePage.$el.style.height = clientHeight + "px";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background-color: #202020;
  font-size: 18px !important;
  color: #333;
  text-align: center;
  line-height: 68px;
  /* z-index: 999; */
}
.el-main {
  padding: 0px !important;
  /* margin-top: -68px; */
  /* z-index: 0 */
}
body {
  margin: 0px;
}
</style>
