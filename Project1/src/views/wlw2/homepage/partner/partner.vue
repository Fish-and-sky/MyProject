<template>
  <div class="partner">
    <div class="partner-k">
    <div class="partner-title">
    <h2>这些合作伙伴信任我们</h2>
    </div>
    <div class="partner-img">
    <div class="partner-image" v-for="(item,index) in 42" :key="index">
    <el-image :src="partnerimg"></el-image>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      partnerimg:'http://www.ubitraq.com/images/partner/zgh.png'
    }
  }
}
</script>
<style scoped>
.partner{
  width: 100%;
  background-color: rgb(242, 250, 250);
  margin-top: 40px;
}
.partner h2{
  font-size: 30px;
  font-weight: bolder;
}
.partner-k{
  width: 1060px;
  background-color: rgb(242, 250, 250);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.partner-title{
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
}
.partner-img{
  width: 1060px;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
}
.partner-image{
  margin-top: 20px;
  margin-left: 10px;
  width: 140px;
  height: 60px;
  background-color: blanchedalmond;
}
</style>