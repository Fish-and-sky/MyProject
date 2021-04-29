<template>
  <div class="prostyle2">
    <div class="prostyle2-k">
    <div class="prostyle2-left">
    <el-image :src="prostyleimg"></el-image>
    </div>
    <div class="prostyle2-right">
    <div class="prostyle2-title" v-html="theprovalue">
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
      theprovalue:"",
          }
  },
  mounted(){
    this.theprovalue=marked(this.provalue);
  },
  props:{
    prostyleimg:{default:""},
    provalue:{defauct:""},
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