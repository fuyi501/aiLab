<template>
  <div class="about">
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[0].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          智慧安防
        </p>
        <p style="font-size:16px;color:#fff;">
          基于海量监控视频数据，实现数据特征提取（人、车、物）结构化，全面提升治安防控水平
        </p>
      </el-col>
    </el-row>

    <el-row style="margin-bottom:50px;">
      <el-row>
        <p style="font-size:36px; ">行业背景</p>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <div style="padding: 14px;">
              <p style="font-size:18px;">行人特征提取</p>
              <div style="font-size:14px;margin-bottom:15px;" class="bottom clearfix">
                <span>支持对监控点位或视频数据中的行人进行检测跟踪，
                  可提取出人的行走方向、上衣颜色、裤子颜色、是否带口罩、是否背包、是否戴眼镜、性别、身高等多个关键信息，
                  通过有效信息迅速定位到目标。同时支持该目标经过时间点录像查看功能。</span><br>
              </div>
              <img src="../../assets/test2.jpg" class="image" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <div style="padding: 14px;">
              <p style="font-size:18px;">机动车特征提取</p>
              <div style="font-size:14px;margin-bottom:15px;" class="bottom clearfix">
                <span>支持对监控点位或视频数据中的机动车进行检测跟踪，
                  可提取出机动车的车辆号牌、车身颜色、车辆品牌、车辆类型等多个关键信息，
                  同时进行结构化数据分析整理，通过有效信息迅速定位到目标。</span><br>
              </div>
              <img src="../../assets/test2.jpg" class="image" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <div style="padding: 14px;">
              <p style="font-size:18px;">非机动特征提取</p>
              <div style="font-size:14px;margin-bottom:15px;" class="bottom clearfix">
                <span>支持对监控点位或视频数据中的非机动车进行检测跟踪，
                  并对非机动车的类型（电动车、自行车、三轮车等）进行精准分类。
                  平台可检测非机动车的详细属性，包括驾驶人是是否戴头盔、是否装遮阳伞等，且支持车头/车尾模式。</span><br>
              </div>
              <img src="../../assets/test2.jpg" class="image" />
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>

    <el-row style="margin-bottom:50px;">
      <el-row>
        <p style="font-size:36px; ">典型案例</p>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="5">
          <img src="../../assets/test2.jpg" class="image" />
        </el-col>
        <el-col :span="15">
          <div style="padding: 0px;text-align:left">
            <span style="font-size:18px;">杭州市XX区公安局</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>与杭州市XX区公安局的长期深度合作，让天象海量监控视频清洗检索技术在公安实战中得到了全面检验。
                该市公安局采用海量监控视频清洗检索系统，通过接入辖区大量治安监控设备，
                实现对人、车、物的特征提取和实时布控，有效打击各类犯罪。<br>
                自2015年10月平台上线以来，杭州市XX区公安局累计破获案件50余起，抓获犯罪嫌疑人89人，
                破案效率较此前提升50%。其中，包含各类扒窃案件25起，交通肇事逃逸案件15起，
                儿童走失找回案件8起，同时协助破获入室盗窃案件2起，取得了丰硕的战果。</span><br>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top: 50px;">
        <el-col :span="5">
          <img src="../../assets/test2.jpg" class="image" />
        </el-col>
        <el-col :span="15">
          <div style="padding: 0px;text-align:left">
            <span style="font-size:18px;">福建省XX市公安局</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>2015年以来，福建省XX市发生的侵财类刑事案件约占刑事案件总数的80%以上，而在全部侵财案件中，
                盗窃电动车发案最多，最令百姓痛恨。该市公安局采用天象海量监控视频清洗检索系统，
                通过接入辖区大量治安监控设备，主要实现对非机动车尤其是电动车的特征提取和实时布控，
                有效打击犯罪。该系统自上线以来，经过该局图侦大队视频串并，共打掉电动车盗窃团伙3个，
                刑拘嫌疑人15名，破获案件38起。在最近的一起案件中，通过对嫌疑人特征进行实时布控，
                警方掌握了其作案规律，最终将盗窃电动车的违法嫌疑人马某（男，21岁）、张某（男，22岁）抓获。</span><br>
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
        { id: 0, name: "首页1", img: require("../../assets/security/anfang.jpg") },
        { id: 1, name: "首页2", img: require("../../assets/people/humanbg01.jpg") },
        { id: 2, name: "首页2", img: require("../../assets/people/posbg.jpg") }
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

