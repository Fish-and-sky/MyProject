<template>
  <div class="prostyle2">
    <div class="prostyle2-k">
    <div class="prostyle2-left">
    <el-image :src="prostyleimg"></el-image>
    </div>
    <div class="prostyle2-right">
    <div class="prostyle2-title" v-html="provalue">
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
export default {
  data(){
    return{
      prostyleimg:'http://www.ubitraq.com/images/system/anchors_system.png',
      provalue:'<h3>产品a：2D/3D定位系统</h3><p>主要用途：人员和资产位置监控、工业4.0、仓储物流、机器人、无人机等</p><p>定位误差：<10cm</p><p>拉开计划；法律</p>'
    }
  }
}
</script>
<style scoped>
.prostyle2{
  width: 100%;
  margin-top: 80px;
}
.prostyle2-k{
  width: 1000px;
  height: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.prostyle2-left{
  width: 450px;
}
.prostyle2-right{
  width: 450px;
}
.prostyle2-title{
  margin-left: 40px;
}
</style>