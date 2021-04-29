<template>
  <div class="prostyle4">
      <div class="prostyle4-k">
      <div class="prostyle4-top">
      <div class="prostyle4-title" v-html="theprovalue"></div>
      </div>
      <div class="prostyle4-bottom">
      <el-image :src="prostyleimg"></el-image>
      </div>
      </div>
  </div>
</template>
<script>
//上字下图
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
.prostyle4{
  width: 100%;
  margin-top: 80px;
  padding-top: 60px;
  /*background-color: rgba(228, 238, 237, 0.527);*/
}
.prostyle4-k{
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*border: 1px solid slateblue;*/
  /*background-color: rgba(244, 250, 248, 0.527);*/
}
.prostyle4-top{
  margin-bottom: 40px;
}
</style>