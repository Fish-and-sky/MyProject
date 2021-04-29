<template>
  <div class="prostyle1">
    <div class="prostyle1-k">
    <div class="prostyle1-left">
    <div class="prostyle1-title" v-html="theprovalue"></div>
    </div>
    <div class="prostyle1-right">
    <el-image :src="prostyle"></el-image>
    </div>
    </div>
  </div>
</template>
<script>
//左字右图
import marked from 'marked'
import '../../../../assets/css/theprostyle.css'
export default {
  data(){
    return{
      theprovalue:'',
          }
  },
  mounted(){
    var _this=this;
    _this.theprovalue=marked(_this.provalue);
  },
  methods:{
    
  },
  props:{
    prostyle:{default:""},
    provalue:{defauct:""},
    }
}
</script>
<style scoped>
.prostyle1{
  width: 100%;
  margin-top: 80px;
}
.prostyle1-k{
  width: 1000px;
  height: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.prostyle1-left{
  width: 450px;
}
.prostyle1-right{
  width: 450px;
  display: flex;
  flex-direction: row-reverse;
}
</style>