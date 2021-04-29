<template>
  <div class="prostyle5">
    <div class="prostyle5-k">
    <div class="prostyle5-left">
    <div class="prostyle5-title" v-html="theprovalue"></div>
    <div></div>
    </div>
    <div class="prostyle5-right">
    <el-image :src="prostyleimg"></el-image>
    </div>
    </div>
  </div>
</template>
<script>
//左左字右图
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
.prostyle5{
  width: 100%;
  margin-top: 80px;
  padding-top:40px;
  padding-bottom: 40px;
  background-color: rgba(228, 238, 237, 0.527);
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