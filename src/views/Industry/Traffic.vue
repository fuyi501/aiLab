<template>
  <div class="about">
    <el-row :style="{ height: imgHeight, 'background-image': 'url(' + imgList[0].img + ')', 'background-size': 'cover'}">
      <el-col>
        <p style="font-size:46px;color:#fff;margin-top:8%;margin-bottom:30px;">
          智慧交通
        </p>
        <p style="font-size:16px;color:#fff;">
          基于海量交通、出行数据的模型建设<br>
          分析车流拥堵状况及多种交通违法行为，优化管理城市交通运行策略
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
              <p style="font-size:18px;">机动车保有量高速增长</p>
              <div style="font-size:14px;margin-bottom:15px;" class="bottom clearfix">
                <span>截止2016年底，全国机动车保有量达到2.9亿，其中汽车保有量达1.94亿辆，
                  新注册量和年增量均达历史最高水平，也令城市交通压力倍增。</span><br>
              </div>
              <img src="../../assets/test2.jpg" class="image" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <div style="padding: 14px;">
              <p style="font-size:18px;">交通违法行为危害严重</p>
              <div style="font-size:14px;margin-bottom:15px;" class="bottom clearfix">
                <span>截止2016年底，全国交警部门共查处机动车违法行为超3亿起，
                  其中闯红灯、违法禁止标线、违章停车等位居前列，驾驶人员安全意识较差。</span><br>
              </div>
              <img src="../../assets/test2.jpg" class="image" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" :offset="1">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <div style="padding: 14px;">
              <p style="font-size:18px;">交通拥堵状况逐渐加剧</p>
              <div style="font-size:14px;margin-bottom:15px;" class="bottom clearfix">
                <span>《2016年度中国主要城市交通分析报告》显示：国内交通拥堵状况正发生进一步恶化，因道路拥堵造成的交通事故层出不穷。</span><br>
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
            <span style="font-size:18px;">交通视频分析云平台</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>全国公安交警系统目前普遍存在交通拥堵事故频发、道路执法乱象难熄、手动抓拍精力受限等一系列交通管理难题。
                在此背景下，衢州市公安局交警支队率先将交通视频分析云平台与交通管理实战相结合。
                该局通过将系统接入衢州市区道路现有监控资源，实时分析道路车辆流量、拥堵点位分布，
                同时进行了机动车多种违章行为检测分析，从而有效保障了衢州城市道路的文明有序运行。</span><br>
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
            <span style="font-size:18px;">交通视频分析云平台</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>全国公安交警系统目前普遍存在交通拥堵事故频发、道路执法乱象难熄、手动抓拍精力受限等一系列交通管理难题。
                在此背景下，衢州市公安局交警支队率先将交通视频分析云平台与交通管理实战相结合。
                该局通过将系统接入衢州市区道路现有监控资源，实时分析道路车辆流量、拥堵点位分布，
                同时进行了机动车多种违章行为检测分析，从而有效保障了衢州城市道路的文明有序运行。</span><br>
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
            <span style="font-size:18px;">交通视频分析云平台</span>
            <div style="font-size:14px;margin-top:10px;" class="bottom clearfix">
              <span>全国公安交警系统目前普遍存在交通拥堵事故频发、道路执法乱象难熄、手动抓拍精力受限等一系列交通管理难题。
                在此背景下，衢州市公安局交警支队率先将交通视频分析云平台与交通管理实战相结合。
                该局通过将系统接入衢州市区道路现有监控资源，实时分析道路车辆流量、拥堵点位分布，
                同时进行了机动车多种违章行为检测分析，从而有效保障了衢州城市道路的文明有序运行。</span><br>
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
        { id: 0, name: "首页1", img: require("../../assets/traffic/jiaotong.jpg") },
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

