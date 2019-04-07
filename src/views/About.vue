<template>
  <div class="about">
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[0].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          关于
        </p>
        <p style="font-size:16px;color:#fff;">
          高层次的人才结构，学界业界精英的融合 <br>
          令天象智能在智能视频分析领域具备一流的技术水准和领先的竞争实力
        </p>
      </el-col>
    </el-row>

    <el-row style="margin-bottom:50px;">
      <el-row>
        <p style="font-size:36px; ">简介</p>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 10px;">
        <el-col :span="20">
          <div style="font-size:14px;margin-bottom:15px;text-align:left" class="bottom clearfix">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州天象智能科技有限公司坐落于素有“天堂硅谷”美誉的杭州天堂软件园，
              是由教育部长江学者、全球计算机图像图像学领域权威学者叶修梓先生于2015年创立的一家专注于智能视频大数据分析的科技创新型企业。
              在人工智能产业兴起的大背景下，天象智能依托于以浙江大学博士生团队为核心的研发队伍，
              凭借多年在图像识别、视频分析、深度学习等人工智能技术领域的积累，充分融合了大数据分析和云计算技术，
              针对客户及行业需求提供基于视频大数据深度应用的行业解决方案、云平台产品和服务。
              目前，公司技术已广泛应用于智能交通、公安、智慧商业等领域，其产品主要包括交通视频视频大数据分析云平台、
              安防视频大数据分析云平台、海量交通图像智能检索云平台、机动车未礼让行人检测抓拍系统、
              行人闯红灯自动抓拍曝光平台等。</span><br>

              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天象智能秉承“科技创新、合作共赢”的理念，以雄厚的技术力量，科学的管理体制，
                严格的质量标准以及竭诚的售前售后服务，赢得了客户的高度评价和认可。</p>
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
        { id: 0, name: "首页1", img: require("../assets/traffic/jiaotong.jpg") }
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

