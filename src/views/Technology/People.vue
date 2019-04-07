<template>
  <div class="about">
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[0].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:26%;margin-bottom:30px;">
          人脸五官定位
        </p>
        <p style="font-size:16px;color:#fff;">
          准确定位人物面部的五官位置，包括左右眼睛、嘴巴两侧和鼻子的位置。<br>
          该技术适用于表情变化、模糊、明暗变化等各种实际环境。
        </p>
      </el-col>
    </el-row>
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[1].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          人脸检测跟踪
        </p>
        <p style="font-size:16px;color:#fff;">
          针对背景复杂、低质量的图片或高密度人群监控视频，可准确、迅速地实现人脸检测。<br>
          该技术可适应侧脸、遮挡、模糊、表情变化等多种实际环境。
        </p>
      </el-col>
    </el-row>
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[2].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          行为检测
        </p>
        <p style="font-size:16px;color:#fff;">
          支持入侵、绊线、离岗等异常行为的检测，该技术同时适用于室内、室外的场景，白天和夜晚均可检测。
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "people",
  data() {
    return {
      imgHeight: "",
      imgList: [
        { id: 0, name: "首页1", img: require("../../assets/people/face.gif") },
        { id: 1, name: "首页2", img: require("../../assets/people/humanbg01.jpg") },
        { id: 2, name: "首页2", img: require("../../assets/people/posbg.jpg") }
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

