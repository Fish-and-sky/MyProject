<template>
    <div :class="{product:proflag,product1:!proflag}">
    <div><header1></header1></div>
    <div v-show="flag"><protopimg :titleh="titleh" :titlep="titlep" :systemimg="systemimg"></protopimg></div>
    <div><prolistimg></prolistimg></div>
    <div>
    <prostyleleft></prostyleleft>
    <prostyleright></prostyleright>
    </div>
    <div><bottom></bottom></div>
    </div>
</template>
<script>
import header1 from '../../header2/header.vue'
import bottom from '../../bottom/bottom.vue'
import protopimg from '../protopimg/protopimg.vue'
import prolistimg from '../product-listimg/prolistimg.vue'
import prostyleleft from '../product-style/prostyleleft.vue'
import prostyleright from '../product-style/prostyleright.vue'
import '../../../../assets/css/theprostyle.css'
export default {
    data(){
        return{
            proflag:true,
            screenWidth:0,
            flag:true,
            titleh:'SOFTWARE / 软件',
            titlep:'云端/本地部署， 开放位置平台， 深入洞见数据',
            systemimg:'http://www.ubitraq.com/images/soft/banner_software.png',
        }
    },
    mounted() {
    this.screenWidth= document.body.clientWidth;
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.proflag=false;
    }else if(this.screenWidth>1300){
      this.proflag=true;
    }else if(this.screenWidth<=600){
      this.proflag=true
    }
    window.onresize=()=>{
      this.screenWidth = document.body.clientWidth;
    }
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.proflag=false;
    }else if(this.screenWidth>1300){
      this.proflag=true;
    }else if(this.screenWidth<=600){
      this.proflag=true
    }
  },
    components:{header1,bottom,protopimg,prolistimg,prostyleleft,prostyleright}
}
</script>
<style scoped>
.product {
  min-width: 1300px;
}
.product1 {
  min-width: 1100px;
}
</style>