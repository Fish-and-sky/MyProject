<template>
  <div class="prostyle3">
      <div class="prostyle3-k">
      <div class="prostyle3-top">
      <el-image :src="prostyleimg"></el-image>
      </div>
      <div class="prostyle3-bottom">
      <div class="prostyle3-title" v-html="theprovalue"></div>
      </div>
      </div>
  </div>
</template>
<script>
//上图下字
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
    prostyleimg:{default:""},
    provalue:{defauct:""},
    }
}
</script>
<style scoped>
.prostyle3{
  width: 100%;
  margin-top: 80px;
  padding-top: 60px;
  background-color: rgba(228, 238, 237, 0.527);
  padding-bottom: 40px;
}
.prostyle3-k{
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(244, 250, 248, 0.527);
}
.prostyle3-top{
  margin-bottom: 40px;
}
.prostyle3-bottom{
  width: 1000px;
}
</style>