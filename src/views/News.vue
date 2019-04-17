<template>
  <div class="about">
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[0].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          媒体动态
        </p>
        <p style="font-size:16px;color:#fff;">
          凭借领先的技术优势和创新的发展模式，<br>
          天象智能曾先后被央视新闻、腾讯、新浪、搜狐、中国网、中安网等新闻媒体做专题报道。
        </p>
      </el-col>
    </el-row>

    <el-row style="margin-bottom:50px;">
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="5">
          <img src="../assets/test2.jpg" class="image" />
        </el-col>
        <el-col :span="15">
          <div style="padding: 0px;text-align:left">
            <span style="font-size:18px;">天象智能荣膺2017年度中国智能交通行业“最佳成长企业奖”</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>近日，由智能交通网主办，中国智能交通协会、
                国家智能交通产业技术创新战略联盟支持的第六届ITS CHINA年度盛典在北京皇苑大酒店隆重举行。
                此次盛典以北京为集合点，汇聚了来自全国各地的业内企业、行业领导及学术领袖等重量级嘉宾，
                从十九大新时代“交通强国”战略出发，共同探讨新时代背景下智能交通的发展理念和方向。</span><br>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="5">
          <img src="../assets/test2.jpg" class="image" />
        </el-col>
        <el-col :span="15">
          <div style="padding: 0px;text-align:left">
            <span style="font-size:18px;">天象智能荣膺2017年度中国智能交通行业“最佳成长企业奖”</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>近日，由智能交通网主办，中国智能交通协会、
                国家智能交通产业技术创新战略联盟支持的第六届ITS CHINA年度盛典在北京皇苑大酒店隆重举行。
                此次盛典以北京为集合点，汇聚了来自全国各地的业内企业、行业领导及学术领袖等重量级嘉宾，
                从十九大新时代“交通强国”战略出发，共同探讨新时代背景下智能交通的发展理念和方向。</span><br>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="5">
          <img src="../assets/test2.jpg" class="image" />
        </el-col>
        <el-col :span="15">
          <div style="padding: 0px;text-align:left">
            <span style="font-size:18px;">天象智能荣膺2017年度中国智能交通行业“最佳成长企业奖”</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>近日，由智能交通网主办，中国智能交通协会、
                国家智能交通产业技术创新战略联盟支持的第六届ITS CHINA年度盛典在北京皇苑大酒店隆重举行。
                此次盛典以北京为集合点，汇聚了来自全国各地的业内企业、行业领导及学术领袖等重量级嘉宾，
                从十九大新时代“交通强国”战略出发，共同探讨新时代背景下智能交通的发展理念和方向。</span><br>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "people",
  data() {
    return {
      imgHeight: "390px",
      imgList: [
        { id: 0, name: "首页1", img: require("../assets/news.jpg") }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>

