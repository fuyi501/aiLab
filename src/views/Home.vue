<template>
  <div class="hello">
    <div>
      <el-carousel
        :height="imgHeight"
        trigger="click"
        :interval="3000"
        @change="changeImg"
      >
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <el-row
            :style="{
              height: imgHeight,
              'background-image': 'url(' + item.img + ')',
              'background-size': 'cover'
            }"
          >
            <el-col>
              <p
                style="font-size:66px;color:#fff;margin-top:200px;margin-bottom:30px;"
              >
                智能改变世界
              </p>
              <p style="font-size:26px;color:#fff;">
                顶尖的一流的牛逼的计算机视觉技术研发团队
              </p>
            </el-col>
          </el-row>
          <!-- <div :style="{height: imgHeight, 'background-image': 'url(' + item.img + ')' }">智能生活</div>
          <img ref="imgHeight" :height="imgHeight" :src="item.img"/> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row style="margin-bottom:50px;">
      <el-row>
        <p style="font-size:36px; ">核心技术</p>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <i class="el-icon-edit" style="font-size:60px;padding-top:30px;"></i>
            <div style="padding: 14px;">
              <p style="font-size:18px;">人的检测识别</p>
              <div class="bottom clearfix">
                <span>支持行人/人脸跟踪检测、五官定位、人群分析、行人属性分析、行为检测等</span><br>
                <el-button size="mini" type="primary" round style="margin:20px 0px 10px 0px;">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <i class="el-icon-edit" style="font-size:60px;padding-top:30px;"></i>
            <div style="padding: 14px;">
              <p style="font-size:18px;">车的检测识别</p>
              <div class="bottom clearfix">
                <span>支持车辆检测跟踪、车流量统计、车辆属性分析、违法检测、非机动车检测分类等</span><br>
                <el-button size="mini" type="primary" round style="margin:20px 0px 10px 0px;">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <i class="el-icon-edit" style="font-size:60px;padding-top:30px;"></i>
            <div style="padding: 14px;">
              <p style="font-size:18px;">人的检测识别</p>
              <div class="bottom clearfix">
                <span>支持OCR字符识别、图像处理、以图搜图，实现工业产品质量诊断、缺陷检测</span><br>
                <el-button size="mini" type="primary" round style="margin:20px 0px 10px 0px;">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>

    <el-row style="margin-bottom:50px;">
      <el-row>
        <p style="font-size:36px; ">行业应用</p>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="5">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <i class="el-icon-edit" style="font-size:60px;padding-top:30px;"></i>
            <div style="padding: 14px;">
              <p style="font-size:24px;">智慧交通</p>
              <div class="bottom clearfix">
                <span>支持OCR字符识别、图像处理、以图搜图，实现工业产品质量诊断、缺陷检测</span><br>
                <el-button type="primary" round style="margin:20px 0px 10px 0px;">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <i class="el-icon-edit" style="font-size:60px;padding-top:30px;"></i>
            <div style="padding: 14px;">
              <p style="font-size:24px;">智慧工厂</p>
              <div class="bottom clearfix">
                <span>支持OCR字符识别、图像处理、以图搜图，实现工业产品质量诊断、缺陷检测</span><br>
                <el-button type="primary" round style="margin:20px 0px 10px 0px;">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <i class="el-icon-edit" style="font-size:60px;padding-top:30px;"></i>
            <div style="padding: 14px;">
              <p style="font-size:24px;">智慧医疗</p>
              <div class="bottom clearfix">
                <span>支持OCR字符识别、图像处理、以图搜图，实现工业产品质量诊断、缺陷检测</span><br>
                <el-button type="primary" round style="margin:20px 0px 10px 0px;">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <i class="el-icon-edit" style="font-size:60px;padding-top:30px;"></i>
            <div style="padding: 14px;">
              <p style="font-size:24px;">智慧商业</p>
              <div class="bottom clearfix">
                <span>支持OCR字符识别、图像处理、以图搜图，实现工业产品质量诊断、缺陷检测</span><br>
                <el-button type="primary" round style="margin:20px 0px 10px 0px;">了解更多</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>

    <el-row style="margin-bottom:50px;">
      <el-row>
        <p style="font-size:36px; ">合作伙伴</p>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="5" v-for="(o) in 4" :key="o">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/test2.jpg" class="image" />
            <div style="padding: 14px;">
              <span>合作伙伴</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">合作伙伴</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      imgHeight: "",
      imgList: [
        { id: 0, name: "首页1", img: require("../assets/home.jpg") },
        { id: 1, name: "首页2", img: require("../assets/home2.jpg") }
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
