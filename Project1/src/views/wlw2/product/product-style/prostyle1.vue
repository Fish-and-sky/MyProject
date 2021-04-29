<template>
  <div class="prostyle1">
    <div class="prostyle1-k">
    <div class="prostyle1-left">
    <div v-html="provalue" class="prostyle1-title"></div>
    </div>
    <div class="prostyle1-right">
    <el-image :src="prostyle"></el-image>
    </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'

export default {
  data(){
    return{
      prostyle:'http://www.ubitraq.com/images/system/map_system_2.png',
      provalue:'<h4>产品a：2D/3D定位系统</h4><p>主要用途：人员和资产位置监控、工业4.0、仓储物流、机器人、无人机等</p><p>定位误差：<10cm</p><br/><br/><br/><h4>1231</h4>'
    }
  }
}
</script>
<style scoped>
.prostyle1{
  width: 100%;
  margin-top: 80px;
}
.prostyle1-k{
  width: 1000px;
  height: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.prostyle1-left{
  width: 450px;
}
.prostyle1-right{
  width: 450px;
  display: flex;
  flex-direction: row-reverse;
}
</style>