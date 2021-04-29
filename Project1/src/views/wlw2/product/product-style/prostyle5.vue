<template>
  <div class="prostyle5">
    <div class="prostyle5-k">
    <div class="prostyle5-left">
    <div class="prostyle5-title" v-html="provalue"></div>
    <div></div>
    </div>
    <div class="prostyle5-right">
    <el-image :src="prostyleimg"></el-image>
    </div>
    </div>
  </div>
</template>
<script>
import marked from 'marked'
export default {
  data(){
    return{
      prostyleimg:'http://www.ubitraq.com/images/system/tags_system.png',
      provalue:'<h4>产品a：2D/3D定位系统</h4><p>主要用途：人员和资产位置监控、机器人、无人机等</p><p>定位误差：<10cm</p><p>拉开计划；法律</p>'
    }
  }
}
</script>
<style scoped>
.prostyle5{
  width: 100%;
  margin-top: 80px;
}
.prostyle5-k{
  width: 1000px;
  height: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.prostyle5-left{
  width: 450px;
  display: flex;
  flex-direction: row-reverse;
}
.prostyle5-right{
  width: 450px;
}
</style>