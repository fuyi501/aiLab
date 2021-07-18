<template>
  <el-row>
    <el-row class="footer" type="flex" justify="center">
      <el-col :span="10">
        <el-row class="footer-left">
          <el-col :span="4">
            <p style="font-size:18px;">关于</p>
            <p>简介</p>
            <p>媒体报道</p>
            <p>联系我们</p>
          </el-col>
          <el-col :span="6">
            <p style="font-size:18px;">核心技术</p>
            <p>人的检测识别</p>
            <p>车的检测识别</p>
            <p>机器视觉</p>
          </el-col>
          <el-col :span="6">
            <p style="font-size:18px;">行业应用</p>
            <p>智慧交通</p>
            <p>智慧工厂</p>
            <p>智慧医疗</p>
          </el-col>
          <el-col :span="4">
            <p style="font-size:18px;">关注我们</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <el-row class="footer-right">
          <el-col :span="24">
            <p>商务合作</p>
            <p>13408468876</p>
            <p>周一到周五 09:00 - 18:00（北京时间）</p>
            <p>乘方大数据</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="footer-footer" type="flex" align="middle">
      <el-col>
        Copyright©2018 乘方大数据
        <a
          style="text-decoration:none;color:#fff;"
          target="_blank"
          href="http://www.miitbeian.gov.cn"
        >
          京ICP备18013727号
        </a>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: "myfooter"
};
</script>

<style scoped>
.footer {
  height: 262px;
  color: #ffffff;
  background-color: #2f2f2f;
  text-align: center;
  vertical-align: middle;
}
.footer-left {
  height: 212px;
  padding-top: 50px;
  text-align: center;
}
.footer-left > .el-col {
  text-align: left;
}
.footer-right {
  height: 212px;
  padding-top: 50px;
  text-align: center;
}
.footer-right > .el-col {
  text-align: right;
}
.footer-footer {
  height: 60px;
  color: #ffffff;
  background-color: #202020;
}
</style>
