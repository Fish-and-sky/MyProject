<template>
  <div class="prostyleleft">
  <div class="prostyleleft-k">
  <div class="pro-left">
  <div class="pro-title" v-html="theprovalue">
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
import marked from 'marked'
export default {
  data(){
    return{
      theprovalue:'',
    }
  },
  mounted(){
    this.theprovalue=marked(this.provalue);
  },
  props:{
    proimg:{defauct:""},
    proimg1:{defauct:""},
    provalue:{defauct:""}
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