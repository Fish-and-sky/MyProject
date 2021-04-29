<template>
  <div class="protopimg">
  <div class="protopimg-k">
  <el-image :src="systemimg" class="bigimg"></el-image>
  <div class="protopimg-title">
  <div class="title-k">
  <h2>{{titleh}}</h2>
  <p>{{titlep}}</p>
  </div>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
        // systemimg:'http://www.ubitraq.com/images/system/banner_system.png',
        screenWidth:0,
    }
  },
  props:{
      titleh:{default:""},
      titlep:{default:""},
      systemimg:{default:""}
  },
  mounted(){
  }
}
</script>
<style scoped>
.protopimg{
  width: 100%;
  overflow: hidden;
  color: white;
}
.protopimg h2{
  font-size: 30px;
  font-weight: bolder;
}
.protopimg p{
  font-size: 20px;
  line-height: 30px;
}
.protopimg-k{
  position: relative;
  display: flex;
  justify-content: center;
}
.protopimg .el-image{
  height: 400px;
}
.protopimg-title{
  position: absolute;
  top: 40%;
  min-width: 500px;
  height: 100px;
  border: 4px solid white;
  border-top:0px; ;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;

}
.title-k{
  margin-top: -20px;
}
.title-k p{
  margin-top: 20px;
}
</style>