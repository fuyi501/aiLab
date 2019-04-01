<template>
  <el-row type="flex" justify="center">
    <el-col :span="10" class="header-left">
      <img alt="Vue logo" src="../assets/logo.svg" class="logo" />
    </el-col>
    <el-col :span="10">
      <el-menu
        :default-active="$route.path"
        class="el-menu-right"
        mode="horizontal"
        background-color="#202020"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">核心技术</template>
          <el-menu-item index="/projects">人的检测识别</el-menu-item>
          <el-menu-item index="">车的检测识别</el-menu-item>
          <el-menu-item index="">机器视觉</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">行业应用</template>
          <el-menu-item index="">智慧交通</el-menu-item>
          <el-menu-item index="">智慧工厂</el-menu-item>
          <el-menu-item index="">智慧工地</el-menu-item>
          <el-menu-item index="">智慧医疗</el-menu-item>
        </el-submenu>
        <el-menu-item index="/readbook">媒体动态</el-menu-item>
        <el-menu-item index="/resume">关于</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "myheader"
};
</script>

<style >
.header-left {
  float: left;
  text-align: left;
}
.logo {
  margin-top: 14px;
  height: 40px;
  width: 160px;
}
.el-menu-right {
  height: 66px;
  float: right;
  text-align: right;
}
.el-menu-item {
  font-size: 18px;
  height: 68px !important;
  text-align: center;
  line-height: 66px !important;
}
.el-submenu {
  height: 68px;
  text-align: center;

  line-height: 66px !important;

}
.el-menu.el-menu--horizontal {
  border-bottom: 0px;
}
.el-menu--horizontal > .el-menu-item.is-active {
  /* border-bottom: 0px !important; */
  color: #303133;
}
.el-submenu > .el-submenu__title {
  /* font-size: 18px !important; */
  height: 68px !important;
  text-align: center;
  line-height: 66px !important;
}
.el-menu--popup > .el-menu-item {
  /* font-size: 12px; */
  height: 38px !important;
  text-align: center;
  line-height: 36px !important;
}
</style>
