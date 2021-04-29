<template>
  <div class="prostyleright">
  <div class="prostyleright-k">
  <div class="pro-left">
  <div><el-image :src="proimg"></el-image></div>
  <div><el-image :src="proimg1"></el-image></div>
  </div>
  <div class="pro-right">
  <div class="pro-titleright" v-html="provalue">
  </div>
  </div>
  </div>
  </div>
</template>
<script>
import '../../../../assets/css/theprostyle.css'
export default {
  data(){
    return{
      proimg:'http://www.ubitraq.com/images/soft/history.png',
      proimg1:'http://www.ubitraq.com/images/soft/shadow_trajectory.png',
      provalue:'<h2>历史轨迹回放</h2><p>人员行动轨迹</p><p>物资移动路线</p><p>超长时间存储</p><p>灵活选时播放</p><p>快慢倍速播放</p>'
    }
  }
}
</script>
<style scoped>
.prostyleright{
  width: 100%;
  margin-top: 40px;
}
.prostyleright-k{
  width: 1060px;
  height: 420px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
}
.pro-left{
  width: 500px;
  height: 420px;
}
.pro-right{
  width: 500px;
  height: 420px;
}
.pro-left div:nth-child(1){
  border-radius: 10px;
  margin-bottom: 5px;
}
</style>