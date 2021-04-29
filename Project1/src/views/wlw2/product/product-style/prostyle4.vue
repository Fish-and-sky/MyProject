<template>
  <div class="prostyle4">
      <div class="prostyle4-k">
      <div class="prostyle4-top">
      <div class="prostyle4-title" v-html="protitle4"></div>
      </div>
      <div class="prostyle4-bottom">
      <el-image :src="prostyleimg4"></el-image>
      </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      prostyleimg4:'http://www.ubitraq.com/images/system/system_system.png',
      protitle4:'<h3>产品a：2D/3D定位系统</h3><p>主要用途：人员和资产位置监控、工业4.0、仓储物流、机器人、无人机等</p><p>定位误差：<10cm</p>'
    }
  }
}
</script>
<style scoped>
.prostyle4{
  width: 100%;
  margin-top: 80px;
  padding-top: 60px;
  /*background-color: rgba(228, 238, 237, 0.527);*/
}
.prostyle4-k{
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*border: 1px solid slateblue;*/
  /*background-color: rgba(244, 250, 248, 0.527);*/
}
.prostyle4-top{
  margin-bottom: 40px;
}
</style>