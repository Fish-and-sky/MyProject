<template>
  <div class="prostyleleft">
  <div class="prostyleleft-k">
  <div class="pro-left">
  <div class="pro-title" v-html="provalue">
  </div>
  </div>
  <div class="pro-right">
  <div><el-image :src="proimg"></el-image></div>
  <div><el-image :src="proimg1"></el-image></div>
  </div>
  </div>
  </div>
</template>
<script>
import '../../../../assets/css/theprostyle.css'
export default {
  data(){
    return{
      proimg:'http://www.ubitraq.com/images/soft/position.png',
      proimg1:'http://www.ubitraq.com/images/soft/shadow_position.png',
      provalue:'<h2>实时位置监控</h2><p>拉火山了防破</p><p>发哦评价防破解132</p><p>拉火山了防6635165破</p><p>发哦评价防465645654破解</p>',
    }
  }
}
</script>
<style scoped>
.prostyleleft{
  width: 100%;
  background-color: rgba(228, 238, 237, 0.527);
  margin-top: 40px;
}
.prostyleleft-k{
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
.pro-right div:nth-child(1){
  border-radius: 10px;
  margin-bottom: 5px;
}
</style>