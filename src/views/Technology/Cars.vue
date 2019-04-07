<template>
  <div class="about">
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[0].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          车辆检测与跟踪
        </p>
        <p style="font-size:16px;color:#fff;">
          全天候（包括白天、夜晚）准确、迅速地检测各种类型、分辨率不同的车辆及其位置。<br>
          采用DLT技术稳定跟踪车辆目标，并随着车辆目标的驶近或远离自动缩放跟踪框，保证目标的持续跟踪，且支持非固定场景下的车辆跟踪。
        </p>
      </el-col>
    </el-row>
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[1].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          车流量统计
        </p>
        <p style="font-size:16px;color:#fff;">
          基于视频统计车头、车尾拍摄角度下的车流量，并基于车道给出车流量相关的各种指标，<br>
          包括车头间距、车道占用比、车道过车量、排队长度等，同时提供车道的拥挤程度量化指标。
        </p>
      </el-col>
    </el-row>
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[2].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          违法检测
        </p>
        <p style="font-size:16px;color:#fff;">
          可实现违章停车、实线变道、压实线、逆向行驶、占用专车道、未按导向行驶、路口加塞、<br>
          黄线格停车、机动车闯红灯、斑马线前不礼让行人、驾驶员未系安全带、开车打手机等各类机动车违法行为检测。
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "cars",
  data() {
    return {
      imgHeight: "",
      imgList: [
        { id: 0, name: "首页1", img: require("../../assets/technology/vimg01.jpg") },
        { id: 1, name: "首页2", img: require("../../assets/technology/vimg02.jpg") },
        { id: 2, name: "首页2", img: require("../../assets/technology/vimg04.jpg") }
      ]
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    imgHeight: function() {
      return `${document.documentElement.clientHeight - 68}px`;
    }
  },
  mounted() {
    // 获取浏览器可视区域高度
    this.imgHeight = `${document.documentElement.clientHeight - 68}px`;
    console.log(this.imgHeight);
    window.onresize = function temp() {
      this.imgHeight = `${document.documentElement.clientHeight - 68}px`;
    };
  },
  methods: {
    changeImg(oldIndex, newIndex) {
      console.log(oldIndex, newIndex);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>

