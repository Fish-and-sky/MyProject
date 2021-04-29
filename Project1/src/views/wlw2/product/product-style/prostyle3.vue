<template>
  <div class="prostyle3">
      <div class="prostyle3-k">
      <div class="prostyle3-top">
      <el-image :src="prostyleimg3"></el-image>
      </div>
      <div class="prostyle3-bottom">
      <div class="prostyle3-title" v-html="protitle3"></div>
      </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      prostyleimg3:'http://www.ubitraq.com/images/system/chart_system.gif',
      protitle3:'<h4>产品a：2D/3D定位系统</h4><p>主要用途：人员和资产位置监控、工业4.0、仓储物流、机器人、无人机等</p><p>定位误差：<10cm</p>'
    }
  }
}
</script>
<style scoped>
.prostyle3{
  width: 100%;
  margin-top: 80px;
  padding-top: 60px;
  background-color: rgba(228, 238, 237, 0.527);
  padding-bottom: 40px;
}
.prostyle3-k{
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(244, 250, 248, 0.527);
}
.prostyle3-top{
  margin-bottom: 40px;
}
.prostyle3-bottom{
  width: 1000px;
}
</style>